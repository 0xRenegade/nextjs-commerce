import { JSX, ReactNode } from "react"

interface WrapperProps {
  children: ReactNode
}

export default function SiteWrapper({ children }: WrapperProps): JSX.Element {
  return <div className="flex flex-col min-h-screen">{children}</div>
}
