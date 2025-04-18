import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import { NextAuthOptions, Session, User } from "next-auth"
import { JWT } from "next-auth/jwt"
// use AdapterUser as fix for id being number instead of string
import { AdapterUser } from "next-auth/adapters"

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = await prisma.users.findFirst({
          where: { email: credentials.email },
        })

        if (
          !user ||
          !(await bcrypt.compare(credentials.password, user.password))
        ) {
          return null
        }

        return user
      },
    }),
  ],
  callbacks: {
    async session({
      session,
      token,
    }: {
      session: Session
      token: JWT
    }): Promise<Session> {
      if (session.user) {
        session.user.id = token.id
        session.user.role = token.role
        session.user.email = token.email!
      }
      return session
    },
    async jwt({
      token,
      user,
    }: {
      token: JWT
      user?: User | AdapterUser
    }): Promise<JWT> {
      if (user) {
        token.id = user.id as number
        token.role = user.role
        token.email = user.email
      }
      return token
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
}

export default NextAuth(authOptions)
