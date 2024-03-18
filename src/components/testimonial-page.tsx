"use client";
import { useCallback, useState, type FC, useEffect } from "react";
import { ImageBorder, NextSlide, PrevSlide, Quotes } from "./icons";
import TestimonialSlider from "./testimonial-slider";
import { CarouselApi } from "./carousel";

const TestimonialPage: FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  const disabilityHandler = useCallback(() => {
    if (api?.selectedScrollSnap() === 0) {
      setPrevEnabled(false);
      setNextEnabled(true);
    } else if (
      api?.selectedScrollSnap() ===
      (api?.scrollSnapList().length ?? 0) - 1
    ) {
      setPrevEnabled(true);
      setNextEnabled(false);
    } else {
      setPrevEnabled(true);
      setNextEnabled(true);
    }
  }, [api]);

  useEffect(() => {
    disabilityHandler();
    api?.on("select", disabilityHandler);
    return () => {
      api?.off("select", disabilityHandler);
    };
  }, [api, disabilityHandler]);

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
          <button
            onClick={prevHandler}
            className="group z-10"
            disabled={!prevEnabled}
          >
            <PrevSlide className="text-white transition-all group-disabled:text-primary-600 group-disabled:opacity-50" />
          </button>
          <ImageBorder />
          <button
            onClick={nextHandler}
            className="group z-10"
            disabled={!nextEnabled}
          >
            <NextSlide className="text-white transition-all group-disabled:text-primary-600 group-disabled:opacity-50" />
          </button>
        </div>
        <Quotes className="ml-auto text-primary-600 opacity-50" />
      </div>
    </div>
  );
};

export default TestimonialPage;
