import HTMLProps from "@/interfaces/html-props";
import {
  useState,
  type FC,
  useEffect,
  useCallback,
  CSSProperties,
} from "react";
import "@/styles/illumination.css";

interface IlluminationProps extends HTMLProps<HTMLDivElement> {
  color?: string;
}

const Illumination: FC<IlluminationProps> = ({
  className,
  refProp,
  children,
  ...otherProps
}) => {
  const [location, setLocation] = useState({
    x: 0,
    y: 0,
  });

  const mouseMoveHandler = useCallback((event: MouseEvent) => {
    setLocation({ x: event.clientX, y: event.clientY });
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
      <div
        style={
          {
            "--illumination-y": location.y + "px",
            "--illumination-x": location.x + "px",
          } as CSSProperties
        }
        className="illumination pointer-events-none absolute inset-0 bg-fixed"
      ></div>
    </div>
  );
};

export default Illumination;

// TODO set the css custom properties only once
