import Button from "./Button";

interface Props {
    title: string;
    subTitle?: string;
    text: string;
    imgSrc: string;
    btnText: string;
    btnColor: "orange" | "teal";
}

const BookObject = ({ title, subTitle, text, imgSrc, btnText, btnColor }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-2 mx-3 my-6 max-w-xl">
        <div>
            <h3 className="font-sans-serif text-2xl font-normal text-brown-900">{title}</h3>
            <h4 className="font-sans-serif text-l font-bold text-brown-900">{subTitle}</h4>
            <p  className="font-sans-serif font-normal text-brown-900">{text}</p>
            <Button text={btnText} color={btnColor}></Button>
        </div>
        <img src={imgSrc} />
    </div>
  )
}

export default BookObject
