import SiteWrapper from "@/components/layout/SiteWrapper"
import Link from "next/link"

export default function About() {
  return (
    <SiteWrapper>
      <main className="flex flex-1 flex-col items-center justify-center text-center p-4 gap-5">
        <img src="/next.svg" alt="Nextjs Logo" className="w-md" />
        <div className="text-slate-950 w-100">
          Nextjs Commerce is a mock eCommerce website created for educational
          purposes and portfolio building. This is not intended to take actual
          payments or sell real products. If you would like to use this code to
          make your own eCommerce website, feel free to do so.
        </div>
        <Link
          href="https://github.com/0xRenegade/nextjs-commerce"
          className="text-slate-100 bg-slate-950 p-2 rounded"
          target="_blank"
        >
          Github
        </Link>
      </main>
    </SiteWrapper>
  )
}
