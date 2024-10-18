"use client";
import {
  useState,
  type FC,
  useCallback,
  useRef,
  useEffect,
  useContext,
} from "react";
import FancyCard from "./fancy-card";
import { NextSlide, PrevSlide } from "./icons";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./carousel";
import Slide1 from "./slides-detailed/slide-1";
import slide2 from "/public/slide-2-big.png";
import Slide3 from "./slides-detailed/slide-3";
import Slide4 from "./slides-detailed/slide-4";
import slide5 from "/public/slide-5-big.png";
import Slide6 from "./slides-detailed/slide-6";
import Slide7 from "./slides-detailed/slide-7";
import Image from "next/image";
import { Context } from "@/contexts/context";

const slides = [
  {
    image: <Slide1 />,
    title: "Cloud Control Panel",
    content:
      "We understand the challenges of gathering marketing materials and ideas, as well as the distractions they can bring. That's why we've revamped the entire process to make it not only smoother but also highly efficient.",
    content2:
      "The Selected Screens' Cloud All-in-One Control Panel is the perfect answer to your content creation and management needs. It provides a comprehensive platform that eliminates the necessity for additional devices or sites.",
  },
  {
    image: (
      <div className="col-start-1 col-end-17 row-start-8 row-end-17 h-full w-full lg:col-start-8 lg:col-end-17 lg:row-start-1 lg:row-end-17">
        <Image src={slide2} alt="Slide 2" />
      </div>
    ),
    title: "Notice Board and Integrated Media Editor",
    content:
      "Utilise Selected Screens to broadcast essential messages and effectively communicate with your audience, simplifying the process and enhancing communication impact. Input announcements and the system ensures they reach your target audience promptly.",
    content2:
      "Selected Screens offers a vast library of media and text options along with robust editing tools. Unlock creative possibilities with our built-in media designer, which provides templates for images and texts to craft a unique brand narrative.",
  },
  {
    image: <Slide3 />,
    title: "Media Player",
    content:
      "Selected Screens offers a versatile media player that supports both images and videos. With intuitive controls and customisable settings, you can easily curate and display your visual content with precision.",
    content2:
      "Tailor your media playback to align with your specific goals. Whether you're presenting a slideshow of images or playing a video playlist, our media player ensures a captivating and engaging experience for your audience.",
  },
  {
    image: <Slide4 />,
    title: "Tailored App Integration",
    content:
      "Enhance your content with Selected Screens' app integration. Choose from a variety of options such as YouTube, Days of the Year, RSS Feeds, Google Reviews, and more. Customise their functionality to create a dynamic screen experience.",
    content2:
      "With app integration, you can effortlessly enrich your displays with real-time social media updates, weather forecasts, news feeds, and other interactive elements, enhancing engagement and providing valuable information to your audience.",
  },
  {
    image: (
      <div className="col-start-1 col-end-17 row-start-8 row-end-17 h-full w-full lg:col-start-8 lg:col-end-17 lg:row-start-1 lg:row-end-17">
        <Image src={slide5} alt="Slide 5" />
      </div>
    ),
    title: "Real-Time Web Page Streaming",
    content:
      "Cultivate dynamic communication with Selected Screens. Share links and showcase website content on screens, engaging your audience with real-time updates and interactive elements, elevating the impact of your communication strategy.",
    content2:
      "Selected Screens seamlessly integrates online content with on-site displays, ensuring a cohesive brand experience and enriching interaction with your audience. With our user-friendly interface, real-time web page streaming has never been easier.",
  },
  {
    image: <Slide6 />,
    title: "Scheduling Innovation",
    content:
      "Maintaining organisation is crucial for marketing success. Every message needs precise timing to maximise its impact. With Selected Screens' Scheduling Innovation, you can manage your marketing campaigns with agility.",
    content2:
      "Arrange and schedule content effortlessly, empowering real-time adjustments and performance monitoring for a harmonious brand presence. Tailor content deployment to resonate with your audience or suit campaign objectives strategically.",
  },
  {
    image: <Slide7 />,
    title: "Customised Screen Layouts with Multizones",
    content:
      "Whether you have one screen or multiple screens, Selected Screens empowers you to manage the layout on each one. With a variety of layouts to choose from, you can pick the one that best fits your preferences.",
    content2:
      "Choose between a multi-zone or single-zone setup based on your preferences and needs. With a multi-zone configuration, you can independently design and schedule each zone to cater to different themes or audiences.",
  },
];

const FeaturesPage: FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [apiImage, setApiImage] = useState<CarouselApi>();
  const imageSlider = useRef<HTMLDivElement>(null);
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);
  const { setContext } = useContext(Context);

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

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
      apiImage?.scrollTo(index);
      disabilityHandler();
    },
    [api, apiImage, disabilityHandler],
  );

  useEffect(() => {
    setContext(() => scrollTo);
  }, [scrollTo, setContext]);

  useEffect(() => {
    disabilityHandler();
  }, [disabilityHandler]);

  const nextHandler = useCallback(() => {
    api?.scrollNext();
    apiImage?.scrollNext();
    disabilityHandler();
  }, [api, apiImage, disabilityHandler]);

  const prevHandler = useCallback(() => {
    api?.scrollPrev();
    apiImage?.scrollPrev();
    disabilityHandler();
  }, [api, apiImage, disabilityHandler]);

  return (
    <div className="relative w-full">
      <div className="mx-auto w-main-smaller max-w-full justify-center lg:w-main">
        <div className="grid-cols-16 grid-rows-16 gap-4 px-8 lg:grid">
          <FancyCard
            className="col-start-1 col-end-17 row-start-1 row-end-8
            mb-4 gap-6 p-8 backdrop-blur-2xl
            lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-17 lg:mb-0"
          >
            <div className="flex gap-2">
              <button
                className="group"
                onClick={prevHandler}
                disabled={!prevEnabled}
              >
                <PrevSlide className="text-primary-500 transition-colors group-disabled:text-primary-400" />
              </button>
              <button
                className="group"
                onClick={nextHandler}
                disabled={!nextEnabled}
              >
                <NextSlide className="text-primary-500 transition-colors group-disabled:text-primary-400" />
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
                    <div>
                      <p className="text-gray">{slide.content}</p>
                      <p className="text-gray">{slide.content2}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </FancyCard>
          <div
            className="absolute inset-x-0 lg:pointer-events-none lg:inset-0 lg:-z-10"
            ref={imageSlider}
          >
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
                    className="flex justify-start pl-8 lg:items-center"
                    key={index}
                  >
                    <div className="mx-auto w-main-smaller max-w-full grid-cols-16 grid-rows-16 gap-4 px-8 lg:grid lg:w-main">
                      {slide.image}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="invisible lg:hidden">
            <Image src={slide2} alt="Slide 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;

// TODO check carousel component's transition detail
