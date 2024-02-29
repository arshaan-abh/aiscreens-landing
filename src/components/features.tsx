"use client";
import Autoplay from "embla-carousel-autoplay";
import type { FC } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import Image from "next/image";
import slide1 from "/public/slide-1.png";
import slide2 from "/public/slide-2.png";
import slide3 from "/public/slide-3.png";
import slide4 from "/public/slide-4.png";
import slide5 from "/public/slide-5.png";
import slide6 from "/public/slide-6.png";
import slide7 from "/public/slide-7.png";

const slides = [
  {
    image: slide1,
    title: "Cloud Control Panel",
    content:
      "We understand the challenges of gathering marketing materials and ideas, as well as the distractions they can bring. That's why we've revamped the entire process to make it not only smoother but also highly efficient.",
  },
  {
    image: slide2,
    title: "Notice Board And Media Editor",
    content:
      "Utilize AiScreens to broadcast essential messages and effectively communicate with your audience, simplifying the process and enhancing communication impact. Input announcement sand the system ensures they reach your target audience promptly.",
  },
  {
    image: slide3,
    title: "Media Player",
    content:
      "AiScreens offers a versatile media player that supports both images and videos. With intuitive controls and customisable settings, you can easily curate and display your visual content with precision.",
  },
  {
    image: slide4,
    title: "Tailored App Integration",
    content:
      "Enhance your content with AiScreens' app integration. Choose from a variety of options such as YouTube, Days of the Year, RSS Feeds, GoogleReviews, and more. Customise their functionality to create a dynamic screen experience.",
  },
  {
    image: slide5,
    title: "Real-Time Web Page Streaming",
    content:
      "Cultivate dynamic communication with AiScreens. Share link sand showcase website content on screens, engaging your audience with real-time updates and interactive elements, elevating the impact of your communication strategy.",
  },
  {
    image: slide6,
    title: "Scheduling Innovation",
    content:
      "Maintaining organization is crucial for marketing success.Every message needs precise timing to maximize its impact. With AiScreens' Scheduling Innovation, you can manage your marketing campaigns with agility.",
  },
  {
    image: slide7,
    title: "Customised Screen Layouts",
    content:
      "Whether you have one screen or multiple screens, AiScreens empowers you to manage the layout on each one. With a variety of layouts to choose from, you can pick the one that best fits your preferences.",
  },
];

const Features: FC = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="grid"
    >
      <CarouselContent className="h-full">
        {slides.map((slide, index) => (
          <CarouselItem
            className="grid grid-cols-[repeat(1,1fr)] gap-8 py-8 sm:grid-cols-[repeat(2,1fr)]"
            key={index}
          >
            <div className="order-2 mr-8 flex flex-col justify-end gap-4 pl-8 sm:order-1 sm:mr-0 sm:justify-between sm:gap-8">
              <div className="text-2xl font-bold tracking-tighter">
                {slide.title}
              </div>
              <div className="text-lg">{slide.content}</div>
            </div>
            <div className="order-1 ml-8 flex items-center justify-end sm:order-2 sm:ml-0">
              <Image src={slide.image} alt="Slide 1" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Features;
