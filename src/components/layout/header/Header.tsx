import { PropsWithChildren } from "react"
import ScrollDownIcon from "../../ScrollDownIcon"

interface Props {
  scrollLink?: string;
}

const Header = ({ scrollLink, children }: PropsWithChildren<Props>) => {
  return (
    <div className="h-screen lg:h-96 bg-brown-900 bg-hero-1 bg-no-repeat bg-cover bg-top lg:bg-top-3 max-w-screen-xl m-auto transition-all duration-[5000ms] hover:bg-bottom">
      <div className="backdrop-blur-xs h-full bg-brown-900/80 content-center">
        {children}
        <a className="absolute inset-x-0 bottom-0 w-screen pb-2 lg:hidden opacity-50" href={scrollLink}><ScrollDownIcon className="m-auto" stroke="#FFD4BB"/></a>
      </div>
    </div>
  )
}

export default Header
