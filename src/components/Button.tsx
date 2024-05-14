
interface Props {
    text: string;
    outline?: boolean;
    color?: "brown" | "orange" | "teal";
}

const Button = ({ text, color = "brown"}: Props) => {

    const bgColor = `bg-${color}`;
    // const outlineClass = outline ? 'border-' + color : bgColor
    const classList = `font-bold py-2 px-4 rounded-full ${bgColor} hover:underline text-white`;

  return (
    <button role="button" className={classList}>{text}</button>
  )
}

export default Button
