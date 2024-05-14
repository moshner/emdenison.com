import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const Header = ({ children }: Props) => {
  return (
    <div className="h-72 bg-brown-900 bg-[url('../public/img/hero-1.png')] bg-no-repeat bg-cover bg-top md:bg-top-3">
      {children}
    </div>
  )
}

export default Header
