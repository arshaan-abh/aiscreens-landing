import type { FC } from "react";
import HTMLProps from "@/interfaces/html-props";
import Illumination from "./illumination";

const FancyCard: FC<HTMLProps<HTMLDivElement>> = (props) => {
  const { className, refProp, children, ...otherProps } = props;
  return (
    <Illumination
      className={`relative grid rounded-3xl bg-gradient-to-r from-gradient-from to-gradient-to ${className}`}
      ref={refProp}
      {...otherProps}
    >
      <div className="absolute inset-px rounded-[calc(1.5rem-1px)] bg-secondary" />
      <div className="relative grid rounded-[calc(1.5rem-1px)] bg-gradient-to-l from-gradient-from/30 to-gradient-to/30">
        {children}
      </div>
    </Illumination>
  );
};

export default FancyCard;
