import HTMLProps from "@/interfaces/html-props";
import { c } from "@/lib/utils";
import type { FC } from "react";
import slide6 from "/public/slide-6-big.png";
import slide6Detail from "/public/slides-detailed/slide-6-detail.png";
import Image from "next/image";

interface Slide6Props extends HTMLProps<HTMLDivElement> {
  index?: number;
}

const Slide6: FC<Slide6Props> = ({ className, ...otherProps }) => {
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
        src={slide6Detail}
        alt="Slide 6"
      />
      <Image src={slide6} alt="Slide 6" />
    </div>
  );
};

export default Slide6;
