import { JSX, ReactNode } from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

interface WrapperProps {
  children: ReactNode
}

export default function SiteWrapper({ children }: WrapperProps): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
