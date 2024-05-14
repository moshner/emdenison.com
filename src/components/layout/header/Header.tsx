import { PropsWithChildren } from "react"

const Header = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-72 bg-brown-900 bg-hero-1 bg-no-repeat bg-cover bg-top md:bg-top-3">
      {children}
    </div>
  )
}

export default Header
