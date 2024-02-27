import type { FC, ReactNode } from "react";
import HTMLProps from "@/interfaces/html-props";
import { c } from "@/lib/utils";

interface AvatarGroupProps extends HTMLProps<HTMLDivElement> {
  avatars: ReactNode[];
}

const AvatarGroup: FC<AvatarGroupProps> = (props) => {
  const { className, refProp, avatars, ...otherProps } = props;
  return (
    <div className={`flex ${className}`} ref={refProp} {...otherProps}>
      {avatars.map((avatar, index) => {
        return (
          <div
            className={c(
              "flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-primary-500",
              index > 0 && "-ml-10",
            )}
            key={index}
          >
            {avatar}
          </div>
        );
      })}
    </div>
  );
};

export default AvatarGroup;
