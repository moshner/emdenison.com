
interface Props {
    text: string;
    outline?: boolean;
    color?: "bg-brown" | "bg-orange" | "bg-teal";
}

const BookButton = ({ text, color = "bg-brown"}: Props) => {

  return (
    <button role="button" className={`font-bold mt-4 py-2 px-6 rounded-full ${color} hover:underline text-white`}>{text}</button>
  )
}

export default BookButton
