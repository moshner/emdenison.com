import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const Section = ({ children }: Props) => {
  return (
    <section className="mt-10">
      {children}
    </section>
  )
}

export default Section
