import { PropsWithChildren } from "react"

const BookCardSubTitle = ({ children }: PropsWithChildren) => {
    return (
        <h4 className="mt-4 font-sans-serif text-l font-bold text-brown-900">{children}</h4>
    )

}

export default BookCardSubTitle