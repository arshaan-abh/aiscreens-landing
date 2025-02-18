"use client";
import {
  type FC,
  useEffect,
  useRef,
  useCallback,
  useState,
  ReactNode,
  createContext,
  useContext,
  RefObject,
} from "react";
import HTMLProps from "@/interfaces/html-props";
import { c } from "@/lib/utils";
import { CloseButton } from "./icons";

const BoundaryContext = createContext<RefObject<HTMLDivElement>>({
  current: null,
});

const ExpandableCardsBoundary: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...otherProps
}) => {
  const boundaryRef = useContext(BoundaryContext);
  return (
    <BoundaryContext.Provider value={boundaryRef}>
      <div
        ref={boundaryRef}
        className={c("relative", className)}
        {...otherProps}
      />
    </BoundaryContext.Provider>
  );
};

interface ExpandableCardProps extends HTMLProps<HTMLDivElement> {
  extra?: ReactNode;
}

const ExpandableCard: FC<ExpandableCardProps> = ({
  extra,
  className,
  children,
  ...otherProps
}) => {
  const [isExpanded, setIsExpand] = useState(false);
  const element = useRef<HTMLDivElement>(null);
  const absoluteElement = useRef<HTMLDivElement>(null);
  const boundaryElement = useContext(BoundaryContext);
  const shrinkerElement = useRef<HTMLButtonElement>(null);

  const expand = useCallback(() => {
    setIsExpand(true);
  }, []);

  const shrink = useCallback(() => {
    setIsExpand(false);
  }, []);

  const setUp = useCallback(() => {
    if (!element.current) return;
    if (!absoluteElement.current) return;
    const expandableDOMRect = element.current.getBoundingClientRect();
    const boundaryDOMRect = boundaryElement.current
      ? boundaryElement.current.getBoundingClientRect()
      : { top: 0, right: 0, bottom: 0, left: 0 };
    absoluteElement.current.style.top = `${(expandableDOMRect.top - boundaryDOMRect.top).toString()}px`;
    absoluteElement.current.style.right = `${(expandableDOMRect.right - boundaryDOMRect.right).toString()}px`;
    absoluteElement.current.style.bottom = `${(expandableDOMRect.bottom - boundaryDOMRect.bottom).toString()}px`;
    absoluteElement.current.style.left = `${(expandableDOMRect.left - boundaryDOMRect.left).toString()}px`;
    absoluteElement.current.style.width = `${expandableDOMRect.width.toString()}px`;
    absoluteElement.current.style.height = `${expandableDOMRect.height.toString()}px`;
    absoluteElement.current.style.setProperty(
      "--p",
      getComputedStyle(element.current).getPropertyValue("padding"),
    );

    absoluteElement.current.style.setProperty(
      "--w",
      element.current.offsetWidth.toString() + "px",
    );
    absoluteElement.current.style.setProperty(
      "--h",
      element.current.offsetHeight.toString() + "px",
    );

    absoluteElement.current.style.setProperty(
      "--bt",
      boundaryDOMRect.top.toString() + "px",
    );
    absoluteElement.current.style.setProperty(
      "--br",
      boundaryDOMRect.right.toString() + "px",
    );
    absoluteElement.current.style.setProperty(
      "--bb",
      boundaryDOMRect.bottom.toString() + "px",
    );
    absoluteElement.current.style.setProperty(
      "--bl",
      boundaryDOMRect.left.toString() + "px",
    );
  }, [boundaryElement]);

  useEffect(() => {
    const elementCurrent = element.current;
    const shrinkerElementCurrent = shrinkerElement.current;
    elementCurrent?.addEventListener("click", expand);
    shrinkerElementCurrent?.addEventListener("click", shrink);
    addEventListener("resize", setUp);
    setUp();
    return () => {
      elementCurrent?.removeEventListener("click", expand);
      shrinkerElementCurrent?.removeEventListener("click", shrink);
      removeEventListener("resize", setUp);
    };
  }, [expand, setUp, shrink]);

  return (
    <>
      <div ref={element} className={className} {...otherProps}>
        {children}
      </div>
      <div
        ref={absoluteElement}
        data-is-expanded={isExpanded}
        className={c(
          `absolute overflow-hidden transition-all duration-1000 
          data-[is-expanded=false]:pointer-events-none data-[is-expanded=false]:invisible
          data-[is-expanded=true]:!inset-x-[calc(var(--mx,0rem)+1px)] data-[is-expanded=true]:!inset-y-px
          data-[is-expanded=false]:z-10 data-[is-expanded=true]:z-20
          data-[is-expanded=true]:!h-[calc(100%-2px)] data-[is-expanded=true]:!w-[calc(100%-var(--mx,0rem)*2-2px)]`,
          className,
        )}
        {...otherProps}
      >
        <div
          data-is-expanded={isExpanded}
          className={`grid h-[calc(var(--h)-var(--p)*2)] w-[calc(var(--w)-var(--p)*2)] transition-all duration-1000
            data-[is-expanded=true]:mt-[calc(var(--h)*-1+var(--p)*2+var(--lh,1lh))]`}
        >
          {children}
        </div>
        <div
          className="relative mt-[--p] grid
            h-[calc(var(--bb)-var(--bt)-var(--p)*3-var(--lh,1lh)-2px)] w-[calc(var(--br)-var(--bl)-var(--p)*2-var(--mx,0rem)*2-2px)]"
        >
          <button
            data-is-expanded={isExpanded}
            className="absolute right-0 top-[calc(var(--p)*-1+var(--lh,1lh)*-1)] transition-opacity duration-1000 data-[is-expanded=false]:opacity-0 data-[is-expanded=true]:opacity-100"
            ref={shrinkerElement}
          >
            <CloseButton />
          </button>
          {extra}
        </div>
      </div>
    </>
  );
};

export { ExpandableCardsBoundary, ExpandableCard };

// TODO list:
// 1. dynamic 2.25rem
// 2. dynamic one pixel
// 3. dynamic transition
// 4. optimize and reformat
