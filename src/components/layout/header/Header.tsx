import { PropsWithChildren } from "react"

const Header = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-72 md:h-96 lg:h-96 bg-brown-900 bg-hero-1 bg-no-repeat bg-cover bg-top xs:bg-top-1 md:bg-top-2 lg:bg-top-3 max-w-screen-xl m-auto">
      <div className="backdrop-blur-xs h-full bg-brown-900/80 	">
        {children}
      </div>
    </div>
  )
}

export default Header
