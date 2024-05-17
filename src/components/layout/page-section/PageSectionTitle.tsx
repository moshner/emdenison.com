import { PropsWithChildren } from "react";


const SectionTitle = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="pt-40 pb-10 font-sans-serif text-3xl font-medium text-brown-50 drop-shadow text-center backdrop-blur-xs 
                  lg:pt-20 lg:text-left lg:ml-96 lg:backdrop-blur-none  lg:text-4xl 
                  xl:pt-10 xl:ml-80 xl:text-5xl">{children}</h2>
  )
}

export default SectionTitle

