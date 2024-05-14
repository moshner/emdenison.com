import { PropsWithChildren } from "react";

interface Props {
    bgImg: string;
}

const PageSectionHeader = ({ children, bgImg }: PropsWithChildren<Props>) => {
  return (
    <div className={`bg-brown-900 bg-no-repeat bg-cover bg-top md:bg-top-3 ${bgImg}`}>
      {children}
    </div>
  )
}

export default PageSectionHeader
