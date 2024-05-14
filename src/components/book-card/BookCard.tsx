import { PropsWithChildren } from "react";

interface Props {
    imgSrc: string;
}

const BookCard = ({ imgSrc, children }: PropsWithChildren<Props>) => {
  return (
    <div className="grid grid-cols-2 gap-2 mx-3 my-6 max-w-xl">
        <div>
            {children}
        </div>
        <img src={imgSrc} /> 
    </div>
  )
}

export default BookCard
