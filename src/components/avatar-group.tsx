import type { FC, ReactNode } from "react";
import HTMLProps from "@src/interfaces/html-props";

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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-gray-900"
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
