import type { Dispatch, FC, SetStateAction } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import person1 from "/public/person-1.jpg";
import person2 from "/public/person-2.jpg";
import person3 from "/public/person-3.jpg";
import person1small from "/public/person-1-small.jpg";
import person2small from "/public/person-2-small.jpg";
import person3small from "/public/person-3-small.jpg";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Star, StarFill } from "./icons";

interface Testimonial {
  image: StaticImageData;
  smallImage: StaticImageData;
  name: string;
  job: string;
  content: string;
  star: 0 | 1 | 2 | 3 | 4 | 5;
}

const testimonials: Testimonial[] = [
  {
    image: person1,
    smallImage: person1small,
    name: "Rachel A",
    job: "Marketing Manager",
    content:
      "Using Selected Screens for our marketing campaigns has been a game-changer. It's like having a virtual marketing strategist working around the clock!",
    star: 4,
  },
  {
    image: person2,
    smallImage: person2small,
    name: "John M.",
    job: "Small Business Owner",
    content:
      "As a small business owner, Selected Screens has allowed me to compete with larger companies on a more level playing field. It has helped me reach my target audience more effectively, resulting in higher ROI for my advertising budget.",
    star: 5,
  },
  {
    image: person3,
    smallImage: person3small,
    name: "Emily L.",
    job: "Retail Store Owner",
    content:
      "Selected Screens is one of the most innovative tools I've come across. It allows us to stay ahead of market trends and adjust our campaigns in real-time, ensuring maximum impact. Plus, the intuitive interface makes it easy to navigate and optimize our campaigns for success.",
    star: 4,
  },
];

interface TestimonialSliderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setApi: Dispatch<SetStateAction<any>>;
}

const TestimonialSlider: FC<TestimonialSliderProps> = ({ setApi }) => {
  return (
    <Carousel setApi={setApi}>
      <CarouselContent className="-ml-8">
        {testimonials.map((testimonial, index) => (
          <CarouselItem className="pl-8" key={index}>
            <div className="flex w-full flex-col items-center gap-4">
              <Image
                className="mt-[13px] hidden rounded-lg xs:block"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <Image
                className="mt-[13px] rounded-lg xs:hidden"
                src={testimonial.smallImage}
                alt={testimonial.name}
              />
              <div className="flex flex-col">
                <h4 className="text-center text-2xl font-bold text-white">
                  {testimonial.name}
                </h4>
                <p className="text-center text-sm text-primary-700">
                  {testimonial.job}
                </p>
              </div>
              <p className="w-[242px] text-center text-base text-white xs:w-[368px]">
                {testimonial.content}
              </p>
              <div className="flex flex-row gap-1 text-primary-700">
                {Array.from(Array(testimonial.star), (_, index) => (
                  <StarFill key={index} />
                ))}
                {Array.from(Array(5 - testimonial.star), (_, index) => (
                  <Star key={index} />
                ))}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TestimonialSlider;
