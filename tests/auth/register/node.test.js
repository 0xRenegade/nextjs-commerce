/**
 * @jest-environment node
 */

import { hash } from "bcrypt"
import { createUser, findUserByEmail } from "@/lib/userService"

jest.mock("@/lib/userService", () => ({
  findUserByEmail: jest.fn(),
  createUser: jest.fn(),
}))

jest.mock("bcrypt")

describe("/api/register", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should register a new user", async () => {
    const { POST } = await import("@/app/api/register/route")
    findUserByEmail.mockResolvedValue(null)
    hash.mockResolvedValue("hashedpass")
    createUser.mockResolvedValue({ id: 1, email: "test@example.com" })

    const req = new Request("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify({
        email: "test@example.com",
        password: "password123",
      }),
      headers: { "Content-Type": "application/json" },
    })

    const res = await POST(req)
    const body = await res.json()

    expect(res.status).toBe(201)
    expect(body.user.email).toBe("test@example.com")
    expect(hash).toHaveBeenCalledWith("password123", 10)
    expect(createUser).toHaveBeenCalled()
  })

  it("should returns 400 if user exists", async () => {
    const { POST } = await import("@/app/api/register/route")
    findUserByEmail.mockResolvedValue({
      id: 123,
      email: "exists@example.com",
    })

    const req = new Request("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify({ email: "exists@example.com", password: "pass" }),
      headers: { "Content-Type": "application/json" },
    })

    const res = await POST(req)
    const body = await res.json()

    expect(res.status).toBe(400)
    expect(body.message).toBe("User already exists")
  })
})
