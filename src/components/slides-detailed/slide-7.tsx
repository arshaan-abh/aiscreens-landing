import HTMLProps from "@/interfaces/html-props";
import { c } from "@/lib/utils";
import type { FC } from "react";
import slide7 from "/public/slide-7-big.png";
import slide7Detail from "/public/slides-detailed/slide-7-detail.png";
import Image from "next/image";

interface Slide7Props extends HTMLProps<HTMLDivElement> {
  index?: number;
}

const Slide7: FC<Slide7Props> = ({ className, ...otherProps }) => {
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
        src={slide7Detail}
        alt="Slide 7"
      />
      <Image src={slide7} alt="Slide 7" />
    </div>
  );
};

export default Slide7;
