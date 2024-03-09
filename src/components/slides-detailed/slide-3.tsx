import HTMLProps from "@/interfaces/html-props";
import { c } from "@/lib/utils";
import type { FC } from "react";
import slide3 from "/public/slide-3-big.png";
import slide1Detail1 from "/public/slides-detailed/slide-3-detail-1.png";
import slide1Detail2 from "/public/slides-detailed/slide-3-detail-2.png";
import Image from "next/image";

interface Slide2Props extends HTMLProps<HTMLDivElement> {
  index?: number;
}

const Slide3: FC<Slide2Props> = ({ className, ...otherProps }) => {
  return (
    <div
      className={c(
        "relative col-start-8 col-end-17 row-start-1 row-end-17 h-full w-full overflow-hidden",
        className,
      )}
      {...otherProps}
    >
      <Image
        className="absolute inset-0 top-[18px] z-20 animate-pulse-full"
        src={slide1Detail1}
        alt="Slide 3"
      />
      <Image
        className="absolute inset-0 z-20 animate-pulse-full-delay"
        src={slide1Detail2}
        alt="Slide 3"
      />
      <div className="absolute inset-0 z-10 animate-slide-3-cover bg-secondary/75" />
      <Image className="animate-slide-3" src={slide3} alt="Slide 3" />
    </div>
  );
};

export default Slide3;

// TODO maybe work on animation's timing function
