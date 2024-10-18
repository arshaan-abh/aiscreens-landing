"use client";
import HTMLProps from "@/interfaces/html-props";
import Autoplay from "embla-carousel-autoplay";
import type { FC } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import { textSlides } from "@/constants/text-slides";

const TitleSlider: FC<HTMLProps<HTMLDivElement>> = ({ ...otherProps }) => {
  return (
    <Carousel
      className="grid h-full"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="-ml-8 h-full">
        <CarouselItem className="pl-8">
          <div
            className="my-auto flex h-full flex-col justify-center text-start text-7xl font-extrabold -tracking-widest sm:text-8xl lg:text-6xl 1.5xl:text-7xl"
            {...otherProps}
          >
            <div>Unleash</div>
            <div className="whitespace-nowrap text-primary-500">
              Your Screen&apos;s
            </div>
            <div className="text-end">Untapped</div>
            <div className="text-end">Potential</div>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-8 sm:hidden">
          <div className="flex h-full flex-col justify-center gap-4">
            {textSlides[0]}
            {textSlides[1]}
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default TitleSlider;

// TODO list:
// 1. overflowing issue
// 2. sliding issue
