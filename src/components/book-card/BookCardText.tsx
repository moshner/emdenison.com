import { PropsWithChildren } from "react"

const BookCardText = ({ children }: PropsWithChildren) => {
    return (
        <p className="mt-4 font-sans-serif font-normal text-brown-900">{children}</p>
    )

}

export default BookCardText