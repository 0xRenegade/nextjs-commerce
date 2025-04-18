"use client"
import { useSession } from "next-auth/react"

export default function Dashboard() {
  const { data: session } = useSession()

  if (!session) return <p>Loading...</p>

  return (
    <div>
      <h1>Welcome, {session.user.email}</h1>
      <p>ROLE: {session.user.role}</p>
      {session.user.role === "SHOP_OWNER" ? (
        <p>Manage your shop</p>
      ) : (
        <p>Browse the catalog</p>
      )}
    </div>
  )
}
