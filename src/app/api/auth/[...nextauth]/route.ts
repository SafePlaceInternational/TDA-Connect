import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import { prisma } from "@/lib/prisma";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

const authOption : NextAuthOptions = {
  session:{
    strategy:'jwt'
  },
  providers:[
    GoogleProvider({
        clientId: GOOGLE_CLIENT_ID,
        clientSecret:GOOGLE_CLIENT_SECRET,
        authorization: {
            params: {
              scope: 'openid profile email', // Explicitly set email and profile scopes
            },
          },
    })
    ],
    pages:{
        signIn:'/sign-in',
    },
    callbacks:{
        async signIn({ account,profile}){
            if(!profile?.email){
                throw new Error('No Profile')
            }

            await prisma.user.upsert({
                where:{
                    email:profile.email,
                },
                create:{
                    email:profile.email,  
                    passwordHash:'' 
                },
                update:{
                    email:profile.email,
                },
            })
            return true
        }
    }
}

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };

