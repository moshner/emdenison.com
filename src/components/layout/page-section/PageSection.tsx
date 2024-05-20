import { PropsWithChildren } from "react"

interface Props {
  id?: string;
}

const PageSection = ({ id, children }: PropsWithChildren<Props>) => {
  return (
    <section id={id} className="mt-10 max-w-screen-xl m-auto">
      {children}
    </section>
  )
}

export default PageSection
