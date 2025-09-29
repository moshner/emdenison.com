import { PropsWithChildren } from "react"
import ScrollDownIcon from "../../../ScrollDownIcon"
import TopNav from "../../../TopNav";
import { animateScroll as scroll } from 'react-scroll';

interface Props {
  scrollLink?: string;
}

const Header = ({ scrollLink, children }: PropsWithChildren<Props>) => {
  
  const scrollMore = () => {
    scroll.scrollMore(500); // Scrolling an additional 500px from the current scroll position.
  };
  
  return (
    <div className={`relative h-svh lg:h-96 bg-orange-950 bg-hero-reluctant-cyborg bg-no-repeat bg-cover bg-right-3 lg:bg-top-3 max-w-screen-xl m-auto transition-[background] duration-[20000ms] hover:bg-left motion-reduce:transition-none motion-reduce:hover:bg-right-3 lg:rounded-b-2xl`}>
      <TopNav active="Books" menuColor="text-white" />
      <div className="backdrop-blur-xs h-full bg-orange-950/80 content-center lg:rounded-b-2xl">
        {children}
        <a className="absolute inset-x-0 bottom-0 w-screen pb-2 lg:hidden opacity-50" href={scrollLink} onClick={scrollMore}><ScrollDownIcon className="m-auto" stroke="#FFFFFF"/></a>
      </div>
    </div>
  )
}

export default Header
