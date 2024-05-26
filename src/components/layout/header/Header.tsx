import { PropsWithChildren } from "react"
import ScrollDownIcon from "../../ScrollDownIcon"
import TopNav from "../../TopNav";
import { animateScroll as scroll } from 'react-scroll';

interface Props {
  scrollLink?: string;
}

const Header = ({ scrollLink, children }: PropsWithChildren<Props>) => {

  const scrollMore = () => {
    scroll.scrollMore(500); // Scrolling an additional 500px from the current scroll position.
  };

  return (
    <>
    <div className={`relative h-svh lg:h-96 bg-brown-900 bg-hero-1 bg-no-repeat bg-cover bg-top lg:bg-top-3 max-w-screen-xl m-auto transition-[background] duration-[90000ms] hover:bg-center lg:rounded-b-2xl`}>
      <TopNav />
      <div className="backdrop-blur-xs h-full bg-brown-900/80 content-center lg:rounded-b-2xl">
        {children}
        <a className="absolute inset-x-0 bottom-0 w-screen pb-2 lg:hidden opacity-50" href={scrollLink} onClick={scrollMore}><ScrollDownIcon className="m-auto" stroke="#FFD4BB"/></a>
      </div>
    </div>
    </>
  )
}

export default Header
