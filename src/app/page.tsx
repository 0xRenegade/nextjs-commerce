import NavBar from "@/components/layout/NavBar"
import Footer from "@/components/layout/Footer"
import SiteWrapper from "@/components/layout/SiteWrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <SiteWrapper>
      <NavBar />
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
      <Footer />
    </SiteWrapper>
  )
}
