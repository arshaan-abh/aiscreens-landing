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
  const shrinkerElement = useRef<HTMLDivElement>(null);

  const expand = useCallback(() => {
    setIsExpand(true);
  }, []);

  const shrink = useCallback(() => {
    setIsExpand(false);
  }, []);

  useEffect(() => {
    const elementCurrent = element.current;
    const shrinkerElementCurrent = shrinkerElement.current;
    elementCurrent?.addEventListener("click", expand);
    shrinkerElementCurrent?.addEventListener("click", shrink);
    return () => {
      elementCurrent?.removeEventListener("click", expand);
      shrinkerElementCurrent?.removeEventListener("click", shrink);
    };
  }, [expand, shrink]);

  useEffect(() => {
    if (!element.current) return;
    if (!absoluteElement.current) return;
    const expandableDOMRect = element.current.getBoundingClientRect();
    const boundaryDOMRect = boundaryElement.current
      ? boundaryElement.current.getBoundingClientRect()
      : { top: 0, right: 0, bottom: 0, left: 0 };
    absoluteElement.current.style.top = `${expandableDOMRect.top - boundaryDOMRect.top}px`;
    absoluteElement.current.style.right = `${expandableDOMRect.right - boundaryDOMRect.right}px`;
    absoluteElement.current.style.bottom = `${expandableDOMRect.bottom - boundaryDOMRect.bottom}px`;
    absoluteElement.current.style.left = `${expandableDOMRect.left - boundaryDOMRect.left}px`;
    absoluteElement.current.style.width = `${expandableDOMRect.width}px`;
    absoluteElement.current.style.height = `${expandableDOMRect.height}px`;
    absoluteElement.current.style.setProperty(
      "--p",
      getComputedStyle(element.current).getPropertyValue("padding"),
    );

    absoluteElement.current.style.setProperty(
      "--w",
      element.current.offsetWidth + "px",
    );
    absoluteElement.current.style.setProperty(
      "--h",
      element.current.offsetHeight + "px",
    );

    absoluteElement.current.style.setProperty(
      "--bt",
      boundaryDOMRect.top + "px",
    );
    absoluteElement.current.style.setProperty(
      "--br",
      boundaryDOMRect.right + "px",
    );
    absoluteElement.current.style.setProperty(
      "--bb",
      boundaryDOMRect.bottom + "px",
    );
    absoluteElement.current.style.setProperty(
      "--bl",
      boundaryDOMRect.left + "px",
    );
  }, [boundaryElement]);

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
            data-[is-expanded=true]:mt-[calc(var(--h)*-1+var(--p)*2+2.25rem)]`}
        >
          {children}
        </div>
        <div
          ref={shrinkerElement}
          className="mt-[--p] grid
            h-[calc(var(--bb)-var(--bt)-var(--p)*3-2.25rem-2px)] w-[calc(var(--br)-var(--bl)-var(--p)*2-var(--mx,0rem)*2-2px)]"
        >
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
