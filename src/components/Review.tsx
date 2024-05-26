import { PropsWithChildren } from "react"
import Stars from "./Stars";

interface Props {
    stars: number;
    cite: string;
    className?: string;
}

const Review = ({ stars, cite, className, children }: PropsWithChildren<Props>) => {
  return (
    <div className={className}>
        <Stars rating={stars} />
        <p className="pt-4 text-lg">“{children}”</p>
        <cite className="float-right">— {cite}</cite>
      </div>
  )
}

export default Review
