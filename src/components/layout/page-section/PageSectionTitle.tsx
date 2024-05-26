import { PropsWithChildren } from "react";


const SectionTitle = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="pt-40 pb-10 font-serif text-4xl font-medium text-brown-50 drop-shadow text-center 
                   lg:text-left lg:ml-10 lg:backdrop-blur-none lg:text-5xl 
                   xl:ml-10 xl:text-5xl">{children}</h2>
  )
}

export default SectionTitle

