import { PropsWithChildren } from "react";

interface Props {
    imgSrc: string;
    alt: string;
}

const BookAside = ({ alt, imgSrc, children }: PropsWithChildren<Props>) => {
  return (
    <aside className="float-right w-1/2 max-w-96 ml-10 relative isolate" >
        <img src={imgSrc} alt={alt} />
        {children}
    </aside>
  )
}

export default BookAside
