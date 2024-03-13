import HTMLProps from "@/interfaces/html-props";
import { c } from "@/lib/utils";
import type { FC } from "react";
import slide4 from "/public/slide-4-big.png";
import slide4Detail from "/public/slides-detailed/slide-4-detail.png";
import Image from "next/image";

interface Slide4Props extends HTMLProps<HTMLDivElement> {
  index?: number;
}

const Slide4: FC<Slide4Props> = ({ className, ...otherProps }) => {
  return (
    <div
      className={c(
        "relative col-start-1 col-end-17 row-start-8 row-end-17 h-full w-full lg:col-start-8 lg:col-end-17 lg:row-start-1 lg:row-end-17",
        className,
      )}
      {...otherProps}
    >
      <Image
        className="absolute inset-0 animate-pulse-full bg-secondary/75"
        src={slide4Detail}
        alt="Slide 4"
      />
      <Image src={slide4} alt="Slide 4" />
    </div>
  );
};

export default Slide4;
