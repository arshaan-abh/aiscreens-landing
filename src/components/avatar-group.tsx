import type { FC, ReactNode } from "react";
import HTMLProps from "@/interfaces/html-props";

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
            className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-primary-500"
            style={{ marginLeft: index === 0 ? undefined : "-1.25rem" }}
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
