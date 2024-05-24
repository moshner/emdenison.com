import { PropsWithChildren } from "react";

interface Props {
    imgSrc: string;
    alt: string;
}

const BookAside = ({ alt, imgSrc, children }: PropsWithChildren<Props>) => {
  return (
    <aside className="m-auto mb-3 md:float-right md:w-1/2 max-w-96 md:ml-10 relative isolate lg:sticky lg:top-5" >
        <img src={imgSrc} alt={alt} />
        {children}
    </aside>
  )
}

export default BookAside
