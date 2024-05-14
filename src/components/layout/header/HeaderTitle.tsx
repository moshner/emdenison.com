
interface Props {
    children: string;
}

const HeaderTitle = ({ children }: Props) => {
  return (
    <h1 className='font-serif text-4xl font-bold text-brown-50 drop-shadow text-center pb-5 pt-40'>
        {children}
    </h1>
  )
}

export default HeaderTitle
