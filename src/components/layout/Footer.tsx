import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

library.add(faGithub)

export default function Footer() {
  return (
    <footer className="flex w-full p-4 text-slate-950 text-center italic justify-center align-center gap-1">
      <Link
        target="_blank"
        href="https://github.com/0xRenegade/nextjs-commerce"
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </Link>
      <div className="">Mock eCommerce website. All products are fake.</div>
    </footer>
  )
}
