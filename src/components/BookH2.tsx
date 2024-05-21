import { PropsWithChildren } from "react"

interface Props {
  font?: string;
}


const BookH2 = ({ font = "font-digital-native-serif", children }: PropsWithChildren<Props>) => {
  return (
    <h2 className={`col-span-3 text-center text-4xl pb-10 ${font}`}>
      {children}
    </h2>
  )
}

export default BookH2
