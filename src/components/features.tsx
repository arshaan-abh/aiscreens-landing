"use client";
import Autoplay from "embla-carousel-autoplay";
import { useContext, type FC } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import Image from "next/image";
import slide1 from "/public/slide-1.png";
import slide2 from "/public/slide-2.png";
import slide3 from "/public/slide-3.png";
import slide4 from "/public/slide-4.png";
import slide5 from "/public/slide-5.png";
import slide6 from "/public/slide-6.png";
import slide7 from "/public/slide-7.png";
import { Context } from "@/contexts/context";

const slides = [
  {
    image: slide1,
    title: "Cloud Control Panel",
    content:
      "We understand the challenges of gathering marketing materials and ideas, as well as the distractions they can bring.",
  },
  {
    image: slide2,
    title: "Notice Board And Media Editor",
    content:
      "Utilize AiScreens to broadcast essential messages and effectively communicate with your audience, simplifying the ...",
  },
  {
    image: slide3,
    title: "Media Player",
    content:
      "AiScreens offers a versatile media player that supports both images and videos. With intuitive controls and customisable settings, you can ...",
  },
  {
    image: slide4,
    title: "Tailored App Integration",
    content:
      "Enhance your content with AiScreens' app integration. Choose from a variety of options such as YouTube, Days of the Year, RSS Feeds ...",
  },
  {
    image: slide5,
    title: "Real-Time Web Page Streaming",
    content:
      "Cultivate dynamic communication with AiScreens. Share link sand showcase website content on screens, engaging your audience with...",
  },
  {
    image: slide6,
    title: "Scheduling Innovation",
    content:
      "Maintaining organization is crucial for marketing success. Every message needs precise timing to maximize its impact...",
  },
  {
    image: slide7,
    title: "Customised Screen Layouts",
    content:
      "Whether you have one screen or multiple screens, AiScreens empowers you to manage the layout on each one. With a variety of ...",
  },
];

const Features: FC = () => {
  const { context } = useContext(Context);

  return (
    <Carousel
      className="grid"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="-ml-8 h-full">
        {slides.map((slide, index) => (
          <CarouselItem className="h-full pl-8" key={index}>
            <div className="flex h-full flex-row items-center gap-8 p-8 sm:flex-col sm:items-stretch">
              <div className="w-1/3 text-3xl font-extrabold tracking-tighter sm:w-auto">
                {slide.title}
              </div>
              <div className="grid h-full w-2/3 grid-cols-6 gap-8 sm:w-auto">
                <div className="col-span-3 hidden h-full flex-col items-start justify-between gap-8 sm:flex xl:col-span-2">
                  <div className="text-lg text-gray">{slide.content}</div>
                  <a
                    onClick={context.bind(null, index)}
                    href="#features"
                    className="rounded-2xl bg-primary-500 px-4 py-2 text-sm font-bold tracking-tight"
                  >
                    More
                  </a>
                </div>
                <div className="col-span-6 flex items-center justify-center sm:col-span-3 sm:items-end sm:justify-end xl:col-span-4">
                  <Image src={slide.image} alt={`Slide ${index}`} />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Features;
