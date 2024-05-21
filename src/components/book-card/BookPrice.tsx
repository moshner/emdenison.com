
interface Props {
    screenReader: string;
    price: string;
}

const BookPrice = ({ screenReader, price }: Props) => {
  return (
    <div className="bg-digital-native-green w-20 z-20 text-center text-lg absolute left-1 top-1 rounded-xl"><span className="sr-only">{screenReader}: </span>{price}</div>
  )
}

export default BookPrice
