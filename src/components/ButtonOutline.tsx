
interface Props {
    text: string;
    borderColor?: string;
    textColor?: string;
}

const ButtonOutline = ({ text, borderColor = "border-brown-900", textColor = "brown-900"}: Props) => {

  return (
    <button role="button" className={`font-bold mt-4 py-2 px-6 rounded-full ${borderColor} ${textColor} border-2 hover:underline`}>{text}</button>
  )
}

export default ButtonOutline
