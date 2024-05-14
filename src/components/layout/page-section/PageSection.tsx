import { PropsWithChildren } from "react"


const PageSection = ({ children }: PropsWithChildren) => {
  return (
    <section className="mt-10">
      {children}
    </section>
  )
}

export default PageSection
