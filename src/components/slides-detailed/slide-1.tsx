import HTMLProps from "@/interfaces/html-props";
import { c } from "@/lib/utils";
import type { FC } from "react";
import slide1 from "/public/slide-1-big.png";
import slide1Detail from "/public/slides-detailed/slide-1-data.png";
import Image from "next/image";

interface Slide1Props extends HTMLProps<HTMLDivElement> {
  index?: number;
}

const Slide1: FC<Slide1Props> = ({ className, ...otherProps }) => {
  return (
    <div
      className={c(
        "relative col-start-8 col-end-17 row-start-1 row-end-17 h-full w-full",
        className,
      )}
      {...otherProps}
    >
      <Image
        className="absolute inset-0 animate-pulse-full bg-secondary/75"
        src={slide1Detail}
        alt="Slide 1"
      />
      <Image src={slide1} alt="Slide 1" />
    </div>
  );
};

export default Slide1;
