import { PropsWithChildren } from "react"


const HeaderSubTitle = ({ children }: PropsWithChildren) => {
  return (
    <h2 className='font-digital-native-sans text-2xl font-light text-white drop-shadow text-center'>
        {children}
    </h2>
  )
}

export default HeaderSubTitle
