// "use client"

import type { Metadata } from "next"
import "./globals.css"
import NavBar from "@/components/layout/NavBar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Nextjs Commerce",
  description: "Created by 0xRenegade",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
