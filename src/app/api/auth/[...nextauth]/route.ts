import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

export const authOption: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
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
      return `${baseUrl}/terms-and-conditions`;
    },
  },
  debug:true
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
