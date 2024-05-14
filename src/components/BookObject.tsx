
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
    <div>
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
      <p>{text}</p>
      <button role="button" className={btnColor}>{btnText}</button>
      <img src={imgSrc} />
    </div>
  )
}

export default BookObject
