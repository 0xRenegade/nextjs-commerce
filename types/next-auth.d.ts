import NextAuth from "next-auth"

// Override interfaces from next-auth module because we use id as number instead of string
declare module "next-auth" {
  interface Session {
    user: {
      id: number
      role: "SHOP_OWNER" | "SHOPPER"
      email: string
    }
  }

  interface User {
    id: number
    role: "SHOP_OWNER" | "SHOPPER"
    email: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number
    role: "SHOP_OWNER" | "SHOPPER"
    email: string
  }
}
