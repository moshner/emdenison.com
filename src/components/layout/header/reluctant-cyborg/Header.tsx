import { PropsWithChildren } from "react"
import ScrollDownIcon from "../../../ScrollDownIcon"
import TopNav from "../../../TopNav";

interface Props {
  scrollLink?: string;
}

const Header = ({ scrollLink, children }: PropsWithChildren<Props>) => {
  return (
    <div className={`relative h-screen lg:h-96 bg-orange-950 bg-hero-reluctant-cyborg bg-no-repeat bg-cover bg-top lg:bg-top-3 max-w-screen-xl m-auto transition-[background] duration-[20000ms] hover:bg-bottom motion-reduce:transition-none motion-reduce:hover:br-top lg:rounded-b-2xl`}>
      <TopNav active="reluctant-cyborg" menuColor="text-white" />
      <div className="backdrop-blur-xs h-full bg-orange-950/80 content-center lg:rounded-b-2xl">
        {children}
        <a className="absolute inset-x-0 bottom-0 w-screen pb-2 lg:hidden opacity-50" href={scrollLink}><ScrollDownIcon className="m-auto" stroke="#FFFFFF"/></a>
      </div>
    </div>
  )
}

export default Header
