import { PropsWithChildren } from "react";

interface Props {
    imgSrc: string;
}

const BookCard = ({ imgSrc, children }: PropsWithChildren<Props>) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mx-3 my-6 max-w-xl lg:grid-cols-1">
        <div className="order-last sm:order-first lg:order-last">
            {children}
        </div>
        <img className="max-h-80" src={imgSrc} /> 
    </div>
  )
}

export default BookCard
