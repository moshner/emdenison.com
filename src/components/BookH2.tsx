import { PropsWithChildren } from "react"


const BookH2 = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="col-span-3 text-center text-4xl pb-10 font-digital-native-serif">
      {children}
    </h2>
  )
}

export default BookH2
