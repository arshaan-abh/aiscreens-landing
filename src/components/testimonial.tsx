import { type FC } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import Image from "next/image";
import testimonial1 from "/public/testimonial-1.png";
import testimonial2 from "/public/testimonial-2.png";
import testimonial3 from "/public/testimonial-3.png";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    title: "Rachel A",
    description: "Marketing Manager",
    content:
      "Using AiScreens for our marketing campaigns has been a game-changer. It's like having a virtual marketing strategist working around the clock!",
    image: testimonial1,
  },
  {
    title: "John M.",
    description: "Small Business Owner",
    content:
      "As a small business owner, AiScreens has allowed me to compete with larger companies on a more level playing field. It has helped me reach my target audience more effectively, resulting in higher ROI for my advertising budget.",
    image: testimonial2,
  },
  {
    title: "Emily L.",
    description: "Retail Store Owner",
    content:
      "AiScreens is one of the most innovative tools I've come across. It allows us to stay ahead of market trend sand adjust our campaigns in real-time, ensuring maximum impact. Plus, the intuitive interface makes it easy to navigate and optimize our campaigns for success.",
    image: testimonial3,
  },
];

const Testimonial: FC = () => {
  return (
    <div className="w-main max-w-full px-8 py-4" id="testimonial">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{ align: "start" }}
        className="relative overflow-hidden rounded-2xl text-white"
      >
        <CarouselContent className="-ml-4">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className={`grid pl-4 transition-all lg:basis-3/4`}
            >
              <div
                className={`grid grid-cols-[repeat(2,1fr)] rounded-2xl bg-cyan-500 sm:grid-cols-[repeat(3,1fr)]`}
              >
                <div className="order-2 col-span-2 flex items-end justify-center p-4 pb-0 sm:order-1 sm:col-span-1">
                  <Image src={slide.image} alt="..." />
                </div>
                <div className="order-1 col-span-2 flex flex-col justify-around gap-4 p-8 pb-0 sm:order-2 sm:pb-8 sm:pl-0">
                  <div className="flex flex-col gap-2 font-monda">
                    <div className="text-3xl font-bold">{slide.title}</div>
                    <div className="text-2xl font-normal">
                      {slide.description}
                    </div>
                  </div>
                  <div className="text-lg font-normal">{slide.content}</div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Testimonial;
