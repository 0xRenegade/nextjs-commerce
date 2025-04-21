import bcrypt from "bcrypt"
import { findUserByEmail, createUser } from "@/lib/userService"

export async function POST(req: Request) {
  const body = await req.json()
  const { email, password } = body

  const existingUser = await findUserByEmail(email)

  if (existingUser) {
    return new Response(JSON.stringify({ message: "User already exists" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await createUser({ email, password: hashedPassword })
  return new Response(JSON.stringify({ user: user }), {
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
