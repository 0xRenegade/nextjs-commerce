"use client"

import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center p-4 gap-5">
      <img src="/next.svg" alt="Nextjs Logo" className="w-md" />
      <div className="italic text-6xl text-slate-950">eCommerce!</div>
      <Link
        href="/products"
        className="text-slate-100 bg-slate-950 p-2 rounded"
      >
        Products
      </Link>
    </main>
  )
}
