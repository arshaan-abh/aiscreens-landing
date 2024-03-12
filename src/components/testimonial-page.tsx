"use client";
import { useCallback, useState, type FC } from "react";
import { ImageBorder, NextSlide, PrevSlide, Quotes } from "./icons";
import TestimonialSlider from "./testimonial-slider";
import { CarouselApi } from "./carousel";

const TestimonialPage: FC = () => {
  const [api, setApi] = useState<CarouselApi>();

  const nextHandler = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const prevHandler = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  return (
    <div className="relative mt-4 flex flex-col items-center">
      <div className="absolute inset-0 z-10">
        <TestimonialSlider setApi={setApi} />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-between">
        <div className="flex items-center">
          <button onClick={prevHandler} className="z-10">
            <PrevSlide />
          </button>
          <ImageBorder />
          <button onClick={nextHandler} className="z-10">
            <NextSlide />
          </button>
        </div>
        <Quotes className="ml-auto text-primary-600 opacity-50" />
      </div>
    </div>
  );
};

export default TestimonialPage;
