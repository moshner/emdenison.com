import { PropsWithChildren } from "react"

const BookCardTitle = ({ children }: PropsWithChildren) => {
    return (
        <h3 className="font-sans-serif text-2xl font-normal text-brown-900">{children}</h3>
    )

}

export default BookCardTitle