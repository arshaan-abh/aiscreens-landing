"use client";
import { type FC, useCallback, useEffect } from "react";
import HTMLProps from "@/interfaces/html-props";
import useSupportsTouch from "@/hooks/use-supports-touch";

interface IlluminationProps extends HTMLProps<HTMLDivElement> {
  color?: string;
}

const Illumination: FC<IlluminationProps> = ({
  className,
  refProp,
  children,
  ...otherProps
}) => {
  const isTouchBased = useSupportsTouch();

  const mouseMoveHandler = useCallback(
    (event: MouseEvent) => {
      const style = document.body.style;
      if (
        style.getPropertyValue("--illumination-x") !== event.clientX + "px" &&
        !isTouchBased
      )
        style.setProperty("--illumination-x", event.clientX + "px");
      if (
        style.getPropertyValue("--illumination-y") !== event.clientY + "px" &&
        !isTouchBased
      )
        style.setProperty("--illumination-y", event.clientY + "px");
    },
    [isTouchBased],
  );

  useEffect(() => {
    addEventListener("mousemove", mouseMoveHandler);
    return () => {
      removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [mouseMoveHandler]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      ref={refProp}
      {...otherProps}
    >
      {children}
      <div className="pointer-events-none absolute inset-0 bg-fixed bg-easing-radial-illumination" />
    </div>
  );
};

export default Illumination;

// TODO list:
// 1. don't listen multiple times
// 2. or add transition
// 3. or detect touch move
