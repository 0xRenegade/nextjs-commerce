"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { MouseEvent, ChangeEvent, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Register() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [repeatPassword, setRepeatPassword] = useState<string>("")
  const [error, setError] = useState<null | string>(null)
  const [message, setMessage] = useState<null | string>(null)
  const router = useRouter()

  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault()

    setError(null)
    setMessage(null)

    if (email === "" || password === "" || repeatPassword === "") {
      setError("One or more fields are missing")
      return
    }

    if (password !== repeatPassword) {
      setError("Passwords do not match")
      return
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })

    if (res.status === 400) {
      setError("User already exists")
      return
    }

    if (res.status === 201) {
      setMessage("User created successfully")

      setTimeout(() => {
        router.push("/login")
      }, 1500)
    }
  }
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center p-4 gap-5">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <div className="flex items-start flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-start flex-col gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setPassword(e.target.value)
                    }
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-start flex-col gap-2">
                  <Label htmlFor="password">Repeat Password</Label>
                  <Input
                    id="repeat-password"
                    type="password"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setRepeatPassword(e.target.value)
                    }
                    required
                  />
                </div>
              </div>
              <Button
                onClick={(e: MouseEvent<HTMLButtonElement>) => handleSubmit(e)}
                className="w-full cursor-pointer"
              >
                Register
              </Button>
              {error && <p className="form-error">{error}</p>}
              {message && <p className="form-success">{message}</p>}
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
