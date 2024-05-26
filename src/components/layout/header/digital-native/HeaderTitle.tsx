
interface Props {
    children: string;
}

const HeaderTitle = ({ children }: Props) => {
  return (
    <h1 className='font-digital-native-serif uppercase tracking-wider text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white drop-shadow text-center pb-5'>
        {children}
    </h1>
  )
}

export default HeaderTitle
