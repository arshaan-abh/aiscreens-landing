import type { FC } from "react";
import HTMLProps from "@/interfaces/html-props";
import Illumination from "./illumination";

const FancyCard: FC<HTMLProps<HTMLDivElement>> = (props) => {
  const { className, refProp, children, ...otherProps } = props;
  return (
    <Illumination
      className={`grid rounded-2xl bg-gradient-to-r from-cyan-300 to-cyan-950 p-px ${className}`}
      ref={refProp}
      {...otherProps}
    >
      <div className="grid rounded-[calc(1rem-1px)] bg-gradient-to-r from-zinc-950 to-teal-950">
        {children}
      </div>
    </Illumination>
  );
};

export default FancyCard;
