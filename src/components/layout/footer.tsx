import useScrollToTop from "../useScrollToTop"


const Footer = () => {
  useScrollToTop();
  return (
    <footer className={`mt-10 relative h-[530px] lg:h-[1024px] bg-brown-900 bg-footer-1 bg-no-repeat bg-cover bg-top lg:bg-top max-w-screen-xl m-auto transition-[background] duration-[90000ms] hover:bg-center lg:rounded-t-2xl`}>
      <div className="lg:backdrop-blur-xs h-full bg-brown-900/70 text-brown-50 w-full text-center lg:rounded-t-2xl">
            <p className="absolute bottom-0 w-full sm:bg-brown-900/50 p-3">Copyright {'\u00a9'} {new Date().getFullYear()} E.M. Denison. All Rights Reserved. <br className="md:hidden" />
            Art by <a className="underline" href="https://en.wikipedia.org/wiki/Henrique_Alvim_Corr%C3%AAa">Henrique Alvim Corrêa</a>
            </p>
      </div>
    </footer>
  )
}

export default Footer
