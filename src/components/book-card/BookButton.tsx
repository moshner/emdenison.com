import { Link } from "react-router-dom";

interface Props {
    text: string;
    outline?: boolean;
    color?: "bg-brown-900" | "bg-orange" | "bg-teal";
    href: string;
}

const BookButton = ({ href, text, color = "bg-brown-900"}: Props) => {

  return (
    <Link role="button" to={href} className={`inline-block font-bold mt-4 py-2 px-6 rounded-full ${color} hover:underline text-white`}>{text}</Link>
  )
}

export default BookButton
