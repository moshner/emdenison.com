import { Link } from "react-router-dom";

interface Props {
    text: string;
    borderColor?: string;
    textColor?: string;
    href: string;
}

const ButtonOutline = ({ text, href, borderColor = "border-brown-900", textColor = "brown-900"}: Props) => {

  return (
    <Link role="button" to={href} className={`inline-block font-bold mt-4 py-2 px-6 rounded-full ${borderColor} ${textColor} border-2 hover:underline`}>{text}</Link>
  )
}

export default ButtonOutline
