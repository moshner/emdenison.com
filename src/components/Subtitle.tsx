
interface Props {
    children: string;
}

const Subtitle = ({ children }: Props) => {
  return (
    <h2 className='font-sans-serif text-2xl font-light text-brown-50 drop-shadow text-center'>
        {children}
    </h2>
  )
}

export default Subtitle
