import HTMLProps from "@/interfaces/html-props";
import { createElement, type FC } from "react";

interface SwitchParentProps extends HTMLProps<HTMLElement> {
  condition: boolean;
  component1: FC | string;
  component1Props?: object;
  component2: FC | string;
  component2Props?: object;
}

const SwitchParent: FC<SwitchParentProps> = ({
  component1,
  component1Props,
  component2,
  component2Props,
  condition,
  children,
  ...otherProps
}) => {
  return condition
    ? createElement(component1, { ...otherProps, ...component1Props }, children)
    : createElement(
        component2,
        { ...otherProps, ...component2Props },
        children,
      );
};

export default SwitchParent;
