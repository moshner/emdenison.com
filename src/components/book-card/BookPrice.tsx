
interface Props {
    screenReader: string;
    price: string;
    bgColor?: string;
}

const BookPrice = ({ bgColor = "bg-digital-native-green", screenReader, price }: Props) => {
  return (
    <div className={`${bgColor} w-20 z-20 text-center text-lg absolute left-1 top-1 rounded-xl`}><span className="sr-only">{screenReader}: </span>{price}</div>
  )
}

export default BookPrice
