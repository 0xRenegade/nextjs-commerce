import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

export async function POST(req: Request, res: Response) {
  const prisma = new PrismaClient()
  const body = await req.json()
  const { email, password } = body

  const existingUser = await prisma.users.findFirst({
    where: { email },
  })

  if (existingUser) {
    return new Response(JSON.stringify({ message: "User already exists" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.users.create({
    data: {
      email,
      password: hashedPassword,
      role: "SHOPPER",
    },
  })

  return new Response(JSON.stringify({ message: "User created" }), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export async function GET() {
  return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
    status: 405,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
