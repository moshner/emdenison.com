import { PropsWithChildren } from "react";

interface Props {
    bgImg: string;
}

const PageSectionHeader = ({ children, bgImg }: PropsWithChildren<Props>) => {
  return (
    <div className={`bg-stone-900 bg-no-repeat bg-cover bg-top md:bg-top-3 ${bgImg} lg:bg-contain lg:bg-left`}>
      {children}
    </div>
  )
}

export default PageSectionHeader
