import { PropsWithChildren } from "react"


const BookH2 = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="col-span-3 text-center text-3xl pb-5">
      {children}
    </h2>
  )
}

export default BookH2
