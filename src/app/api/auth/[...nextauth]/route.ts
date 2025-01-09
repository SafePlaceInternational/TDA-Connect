import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

export const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "openid profile email", // Explicitly set email and profile scopes
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error("No Profile");
      }

      await prisma.user.upsert({
        where: {
          email: profile.email,
        },
        create: {
          email: profile.email,
          passwordHash: "",
          hasAgreedTerms: false,
        },
        update: {
          email: profile.email,
        },
      });
      return true;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.email = profile.email; // Add email to the token
      }
      return token;
    },
    async session({ session, token }) {
      if (token.email && session.user?.email) {
        session.user.email = token.email;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
        try {
          const session = await getServerSession();
          const userEmail = session?.user?.email;
      
          console.log("Session====", session);
          console.log("Email===", userEmail);
      
          if (userEmail) {
            const user = await prisma.user.findUnique({
              where: { email: userEmail },
            });
            console.log("User fetched from DB:", user);
      
            if (user && !user.hasAgreedTerms) {
              console.log("Redirecting to Terms and Conditions");
              console.log(`${baseUrl}/terms-and-conditions`);
              return `${baseUrl}/terms-and-conditions`; // Redirect to terms for first-time users
            }
          }
      
          console.log("Redirecting to base URL");
          return baseUrl;
        } catch (error) {
          console.error("Error in redirect function:", error);
          // Fail-safe redirection
          return baseUrl;
        }
      }
      ,
  },
};

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

// export const authOption: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     GoogleProvider({
//       clientId: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       authorization: {
//         params: {
//           scope: "openid profile email", // Explicitly set email and profile scopes
//         },
//       },
//     }),
//   ],

//   callbacks: {
//     async signIn({ account, profile }) {
//       if (!profile?.email) {
//         throw new Error("No Profile");
//       }

//       await prisma.user.upsert({
//         where: {
//           email: profile.email,
//         },
//         create: {
//           email: profile.email,
//           passwordHash: "",
//           hasAgreedTerms:false,
//         },
//         update: {
//           email: profile.email,
//         },
//       });
//       return true;
//     },
//     async jwt({ token, account, profile }) {
//       if (account && profile) {
//         token.email = profile.email; // Add email to the token
//       }
//       return token;
//     },
//     async redirect({ url, baseUrl }) {
//       const session = await getServerSession();
//       const userEmail = session?.user?.email;

//       if (userEmail ) {
//         const user = await prisma.user.findUnique({
//           where: { email: userEmail },
//         });

//         if (user && !user.hasAgreedTerms) {
//           return "/terms-and-conditions"; // Redirect to terms for first-time users
//         }
//       }

//       return baseUrl;
//     },
//   },
// };

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
