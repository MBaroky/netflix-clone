
import CredentialsProvider from "next-auth/providers/credentials";
import prismadb from '@/lib/prismadb'
import {compare}  from 'bcrypt'
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";

export const authOptions:NextAuthOptions = {
    providers: [
      Github({
          clientId: process.env.GITHUB_ID || '',
          clientSecret: process.env.GITHUB_SECRET || '',
      }),
      Google({
          clientId: process.env.GOOGLE_CLIENT_ID || '',
          clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',

      }),
      Credentials({
          id:'credentials',
          name:'Credentials',
          credentials: {
              email:{
                  label:'Email',
                  type:'text',

              },
              password:{
                  label:'Password',
                  type:'password'
              },
          },
          async authorize(credentials){
              if(!credentials?.email || !credentials?.password){
                  throw new Error('Please enter your email and password')
              }
              const user = await prismadb.user.findUnique({
                  where:{
                      email:credentials.email
                  }
              })
              if (!user || !user.hashedPassword) {
                  throw new Error('Invalid email or password');
              }
              const isCorrect = await compare(credentials.password, user.hashedPassword);

              if (!isCorrect) {
                  throw new Error('Invalid email or password')
              }

              return user;
              }
          })
      ],
      pages:{
          signIn:'/login',
      },
      debug: process.env.NODE_ENV !== "production",
      adapter: PrismaAdapter(prismadb),
      session:{
          strategy: 'jwt',
      },
      jwt:{
          secret: process.env.NEXTAUTH_JWT_SECRET,
      },
      secret: process.env.NEXTAUTH_SECRET,
  }