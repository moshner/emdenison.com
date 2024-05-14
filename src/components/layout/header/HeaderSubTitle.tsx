import { PropsWithChildren } from "react"


const HeaderSubTitle = ({ children }: PropsWithChildren) => {
  return (
    <h2 className='font-sans-serif text-2xl font-light text-brown-50 drop-shadow text-center'>
        {children}
    </h2>
  )
}

export default HeaderSubTitle
