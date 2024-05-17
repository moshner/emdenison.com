import { PropsWithChildren } from "react"

const Header = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen lg:h-96 bg-brown-900 bg-hero-1 bg-no-repeat bg-cover bg-top lg:bg-top-3 max-w-screen-xl m-auto transition-all duration-[5000ms] hover:bg-bottom">
      <div className="backdrop-blur-xs h-full bg-brown-900/80 content-center">
        {children}
      </div>
    </div>
  )
}

export default Header
