import { ReactNode } from "react"

interface Props {
    children: ReactNode;
}

const Title = ({ children }: Props) => {
  return (
    <h1 className='font-serif text-4xl font-bold'>
        {children}
    </h1>
  )
}

export default Title
