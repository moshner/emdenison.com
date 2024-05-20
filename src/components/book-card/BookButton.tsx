import { Link } from "react-router-dom";

interface Props {
    text: string;
    outline?: boolean;
    color?: string;
    href: string;
    className: string;
}

const BookButton = ({ className, href, text, color = "bg-brown-900"}: Props) => {

  return (
    <Link role="button" to={href} className={`cursor-pointer inline-block font-bold mt-4 py-2 px-6 rounded-full ${color} hover:underline text-white ${className}`}>{text}</Link>
  )
}

export default BookButton
