import type { FC, ReactNode } from "react";
import HTMLProps from "@/interfaces/html-props";
import { c } from "@/lib/utils";

interface AvatarGroupProps extends HTMLProps<HTMLDivElement> {
  avatars: ReactNode[];
}

const AvatarGroup: FC<AvatarGroupProps> = ({
  className = "",
  refProp,
  avatars,
  ...otherProps
}) => {
  return (
    <div className={`flex ${className}`} ref={refProp} {...otherProps}>
      {avatars.map((avatar, index) => {
        return (
          <div
            className={c(
              "flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-primary-500 md:h-10 md:w-10",
              index > 0 && "-ml-10 md:-ml-5",
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
