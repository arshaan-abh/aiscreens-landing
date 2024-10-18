"use client";
import Autoplay from "embla-carousel-autoplay";
import type { FC } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import FancyCard from "./fancy-card";
import { Check, CheckEmpty } from "./icons";

const featuresData = [
  "5 products",
  "Up to 1,000 subscribers",
  "Basic analytics",
  "48-hour support response time",
];

interface Package {
  name: string;
  price: number;
  description: string;
  features: [boolean, boolean, boolean, boolean];
}

const packages: Package[] = [
  {
    name: "Freelancer",
    price: 24,
    description: "The essentials to provide your best work for clients.",
    features: [true, true, false, false],
  },
  {
    name: "Startup",
    price: 32,
    description: "A plan that scales with your rapidly growing business.",
    features: [true, true, true, false],
  },
  {
    name: "Enterprise",
    price: 48,
    description: "Dedicated support and infrastructure for your company.",
    features: [true, true, true, true],
  },
];

const PricingPage: FC = () => {
  return (
    <>
      <div className="mb-4 flex flex-col gap-4 rounded-4xl bg-rose px-12 py-14 text-secondary">
        <h4 className="text-4xl font-extrabold">
          Pricing plans for teams of all sizes
        </h4>
        <p>
          Choose an affordable plan that&#39;s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="lg:hidden"
      >
        <CarouselContent className="-ml-4 mb-4">
          {packages.map((packageData, index) => (
            <CarouselItem className="pl-4" key={index}>
              <Package {...packageData} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mb-4 hidden gap-4 lg:flex">
        {packages.map((packageData, index) => (
          <div className="basis-1/3" key={index}>
            <Package {...packageData} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingPage;

const Package: FC<Package> = ({ name, price, description, features }) => {
  return (
    <FancyCard className="flex h-full flex-col gap-4 p-4">
      <h5 className="text-xl font-extrabold text-gray">{name}</h5>
      <div className="flex items-end">
        <p className="text-2xl font-bold">$</p>
        <p className="text-5xl font-extrabold">{price}</p>
        <p className="text-2xl font-bold">/Month</p>
      </div>
      <div className="h-px bg-gradient-to-l from-gradient-from to-gradient-to" />
      <p className="text-sm text-gray">{description}</p>
      <div className="flex flex-col gap-3">
        {features.map((feature, index) => (
          <div
            className={`flex items-center gap-4 ${feature ? "text-gray" : "text-primary-400"}`}
            key={index}
          >
            {feature ? <Check /> : <CheckEmpty />}
            <p className="font-semibold">{featuresData[index]}</p>
          </div>
        ))}
      </div>
      <div className="grow" />
      <button className="flex items-center justify-center rounded-2xl bg-primary-500 p-3 text-sm font-bold">
        Monthly Billing
      </button>
    </FancyCard>
  );
};
