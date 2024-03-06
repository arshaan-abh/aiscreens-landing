"use client";
import { useState, type FC, useCallback } from "react";
import FancyCard from "./fancy-card";
import { NextSlide, PrevSlide } from "./icons";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./carousel";
import slide1 from "/public/slide-1-big.png";
import slide2 from "/public/slide-2-big.png";
import slide3 from "/public/slide-3-big.png";
import slide4 from "/public/slide-4-big.png";
import slide5 from "/public/slide-5-big.png";
import slide6 from "/public/slide-6-big.png";
import slide7 from "/public/slide-7-big.png";
import Image from "next/image";

const slides = [
  {
    image: slide1,
    title: "Cloud Control Panel",
    content:
      "We understand the challenges of gathering marketing materials and ideas, as well as the distractions they can bring. That's why we've revamped the entire process to make it not only smoother but also highly efficient. The AiScreens' Cloud All-in-One Control Panel is the perfect answer to your content creation and management needs. It provides a comprehensive platform that eliminates the necessity for additional devices or sites.",
  },
  {
    image: slide2,
    title: "Notice Board and Integrated Media Editor",
    content:
      "Utilize AiScreens to broadcast essential messages and effectively communicate with your audience, simplifying the process and enhancing communication impact. Input announcement sand the system ensures they reach your target audience promptly...",
  },
  {
    image: slide3,
    title: "Media Player",
    content:
      "AiScreens offers a versatile media player that supports both images and videos. With intuitive controls and customisable settings, you can easily curate and display your visual content with precision. Tailor your media playback to align with...",
  },
  {
    image: slide4,
    title: "Tailored App Integration",
    content:
      "Enhance your content with AiScreens' app integration. Choose from a variety of options such as YouTube, Days of the Year, RSS Feeds, GoogleReviews, and more. Customise their functionality to create a dynamic screen experience...",
  },
  {
    image: slide5,
    title: "Real-Time Web Page Streaming",
    content:
      "Cultivate dynamic communication with AiScreens. Share link sand showcase website content on screens, engaging your audience with real-time updates and interactive elements, elevating the impact of your communication strategy...",
  },
  {
    image: slide6,
    title: "Scheduling Innovation",
    content:
      "Maintaining organization is crucial for marketing success. Every message needs precise timing to maximize its impact. With AiScreens' Scheduling Innovation, you can manage your marketing campaigns with agility. Arrange and schedule content effortlessly...",
  },
  {
    image: slide7,
    title: "Customised Screen Layouts with Multizones",
    content:
      "Whether you have one screen or multiple screens, AiScreens empowers you to manage the layout on each one. With a variety of layouts to choose from, you can pick the one that best fits your preferences. Choose between a multi-zone or...",
  },
];

const FeaturesPage: FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [apiImage, setApiImage] = useState<CarouselApi>();

  const nextHandler = useCallback(() => {
    api?.scrollNext();
    apiImage?.scrollNext();
  }, [api, apiImage]);

  const prevHandler = useCallback(() => {
    api?.scrollPrev();
    apiImage?.scrollPrev();
  }, [api, apiImage]);

  return (
    <div className="relative flex w-screen justify-center">
      <div className="grid w-main-smaller max-w-full grid-cols-[repeat(16,1fr)] grid-rows-[repeat(16,1fr)] gap-4 px-8 lg:w-main">
        <FancyCard className="col-start-1 col-end-8 row-start-1 row-end-17 gap-6 p-8 backdrop-blur-2xl">
          <div className="flex gap-2">
            <button onClick={prevHandler}>
              <PrevSlide className="text-primary-500" />
            </button>
            <button onClick={nextHandler}>
              <NextSlide className="text-primary-500" />
            </button>
          </div>
          <Carousel
            opts={{
              watchDrag: false,
            }}
            setApi={setApi}
            className="grid"
          >
            <CarouselContent className="-ml-8">
              {slides.map((slide, index) => (
                <CarouselItem
                  className="flex flex-col justify-end gap-6 pl-8"
                  key={index}
                >
                  <h3 className="text-5xl font-extrabold">{slide.title}</h3>
                  <div className="h-px bg-gradient-to-l from-gradient-from to-gradient-to" />
                  <p className="text-gray">{slide.content}</p>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </FancyCard>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Carousel
            opts={{
              watchDrag: false,
            }}
            setApi={setApiImage}
            className="grid h-full"
          >
            <CarouselContent className="-ml-8 h-full">
              {slides.map((slide, index) => (
                <CarouselItem
                  className="flex items-center justify-start pl-8"
                  key={index}
                >
                  <div className="mx-auto grid w-main-smaller max-w-full grid-cols-[repeat(16,1fr)] grid-rows-[repeat(16,1fr)] gap-4 px-8 lg:w-main">
                    <Image
                      className="col-start-8 col-end-17 row-start-1 row-end-17 h-full w-full"
                      src={slide.image}
                      alt={`Slide ${index}`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
