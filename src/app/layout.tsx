"use client"

import "./globals.css"
import NavBar from "@/components/layout/NavBar"
import Footer from "@/components/layout/Footer"
import { SessionProvider } from "next-auth/react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Nextjs eCommerce</title>
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          <SessionProvider>
            <NavBar />
            {children}
            <Footer />
          </SessionProvider>
        </div>
      </body>
    </html>
  )
}
