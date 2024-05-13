import { ReactNode } from "react"

interface Props {
    children: ReactNode;
}

const Subtitle = ({ children }: Props) => {
  return (
    <h2 className='font-sans-serif text-2xl'>
        {children}
    </h2>
  )
}

export default Subtitle
