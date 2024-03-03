"use client";
import Autoplay from "embla-carousel-autoplay";
import type { FC } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import { textSlides } from "@/constants/text-slides";
import HTMLProps from "@/interfaces/html-props";
import { c } from "@/lib/utils";

const TextSlide: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref,
  ...otherProps
}) => {
  return (
    <Carousel
      className={c("grid", className)}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      {...otherProps}
    >
      <CarouselContent className="-ml-8 flex items-center">
        {textSlides.map((slide, index) => (
          <CarouselItem className="pl-8" key={index}>
            {slide}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TextSlide;
