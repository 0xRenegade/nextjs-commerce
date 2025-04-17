"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShop, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import SearchBar from "@/components/ui/searchbar"
import { signOut, useSession } from "next-auth/react"

library.add(faShop, faCartShopping)

const NavItem = {
  FIRST: {
    TITLE: "About",
    LINK: "/about",
  },
  SECOND: {
    TITLE: "Products",
    LINK: "/products",
  },
  THIRD: {
    TITLE: "Contact",
    LINK: "/contact",
  },
  FOURTH: {
    TITLE: "Login",
    LINK: "/login",
  },
  FIFTH: {
    TITLE: "Sign Up",
    LINK: "/register",
  },
  SIXTH: {
    TITLE: "Logout",
    LINK: null,
  },
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data: session } = useSession()

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-slate-950">
          <FontAwesomeIcon icon={faShop} size="2xl" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <SearchBar />
          <Link
            href={NavItem.FIRST.LINK}
            className="text-slate-950 hover:text-slate-100 hover:bg-slate-950 p-2 rounded"
          >
            {NavItem.FIRST.TITLE}
          </Link>
          <Link
            href={NavItem.SECOND.LINK}
            className="text-slate-950 hover:text-slate-100 hover:bg-slate-950 p-2 rounded"
          >
            {NavItem.SECOND.TITLE}
          </Link>
          <Link
            href={NavItem.THIRD.LINK}
            className="text-slate-950 hover:text-slate-100 hover:bg-slate-950 p-2 rounded"
          >
            {NavItem.THIRD.TITLE}
          </Link>
          <Link href="/cart" className="flex items-center justify-center">
            <FontAwesomeIcon icon={faCartShopping} size="2xl" />
          </Link>
          {!session && (
            <>
              <Link
                href={NavItem.FOURTH.LINK}
                className="text-slate-100 bg-slate-950 p-2 rounded"
              >
                {NavItem.FOURTH.TITLE}
              </Link>
              <Link
                href={NavItem.FIFTH.LINK}
                className="text-slate-100 bg-slate-950 p-2 rounded"
              >
                {NavItem.FIFTH.TITLE}
              </Link>
            </>
          )}
          {session && (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-slate-100 bg-slate-950 p-2 rounded cursor-pointer"
            >
              {NavItem.SIXTH.TITLE}
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            {/* Sheet and Title must be added to prevent errors/warnings */}
            <div className="hidden">
              <SheetTitle />
              <SheetDescription />
            </div>
            {/* Mobile menu drawer */}
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-6">
                <Link
                  href={NavItem.FIRST.LINK}
                  className="text-slate-950 hover:text-slate-100 hover:bg-slate-950 p-2 rounded text-center"
                >
                  {NavItem.FIRST.TITLE}
                </Link>
                <Link
                  href={NavItem.SECOND.LINK}
                  className="text-slate-950 hover:text-slate-100 hover:bg-slate-950 p-2 rounded text-center"
                >
                  {NavItem.SECOND.TITLE}
                </Link>
                <Link
                  href={NavItem.THIRD.LINK}
                  className="text-slate-950 hover:text-slate-100 hover:bg-slate-950 p-2 rounded text-center"
                >
                  {NavItem.THIRD.TITLE}
                </Link>
                <Link href="/cart" className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faCartShopping} size="2xl" />
                </Link>
                <Link
                  href={NavItem.FOURTH.LINK}
                  className="text-slate-100 bg-slate-950 p-2 rounded text-center"
                >
                  {NavItem.FOURTH.TITLE}
                </Link>
                <Link
                  href={NavItem.FIFTH.LINK}
                  className="text-slate-100 bg-slate-950 p-2 rounded text-center"
                >
                  {NavItem.FIFTH.TITLE}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
