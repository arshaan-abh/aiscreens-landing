import type { FC } from "react";
import HTMLProps from "@/interfaces/html-props";
import Illumination from "./illumination";
import { c } from "@/lib/utils";

const FancyCard: FC<HTMLProps<HTMLDivElement>> = (props) => {
  const { className, refProp, ...otherProps } = props;
  return (
    <Illumination
      className={c(
        "border-gradient relative grid overflow-hidden rounded-3xl bg-gradient-to-l from-gradient-from/30 to-gradient-to/30",
        "after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:bg-gradient-to-r after:from-gradient-from after:to-gradient-to after:p-px after:content-['']",
        className,
      )}
      ref={refProp}
      {...otherProps}
    />
  );
};

export default FancyCard;
