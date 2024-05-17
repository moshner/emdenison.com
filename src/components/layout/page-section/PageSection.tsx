import { PropsWithChildren } from "react"


const PageSection = ({ children }: PropsWithChildren) => {
  return (
    <section className="mt-10 max-w-screen-xl m-auto">
      {children}
    </section>
  )
}

export default PageSection
