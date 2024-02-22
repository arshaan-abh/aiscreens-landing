import { type FC, useCallback, useEffect } from "react";
import HTMLProps from "@/interfaces/html-props";

interface IlluminationProps extends HTMLProps<HTMLDivElement> {
  color?: string;
}

const Illumination: FC<IlluminationProps> = ({
  className,
  refProp,
  children,
  ...otherProps
}) => {
  const mouseMoveHandler = useCallback((event: MouseEvent) => {
    const style = document.body.style;
    if (style.getPropertyValue("--illumination-x") !== event.clientX + "px")
      style.setProperty("--illumination-x", event.clientX + "px");
    if (style.getPropertyValue("--illumination-y") !== event.clientY + "px")
      style.setProperty("--illumination-y", event.clientY + "px");
  }, []);

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
