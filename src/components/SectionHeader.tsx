
interface Props {
    children: string;
    bgImg: string;
}

const SectionHeader = ({ children, bgImg }: Props) => {
  return (
    <div className={"bg-brown-900 bg-no-repeat bg-cover bg-top md:bg-top-3 bg-[url('" + bgImg + "')]"}>
      <h2 className="pt-40 pb-10 font-sans-serif text-3xl font-medium text-brown-50 drop-shadow text-center">{children}</h2>
    </div>
  )
}

export default SectionHeader
