import type { FC } from "react";
import { Logo } from "@src/components/icons";
import FancyCard from "@src/components/fancy-card";

const Home: FC = () => {
  return (
    <>
      <div className="flex w-main max-w-full items-center justify-between p-6">
        <Logo />
        <div className="flex gap-6 font-rubik text-sm">
          <div>Home</div>
          <div>Features</div>
          <div>Services</div>
        </div>
        <button className="rounded-full bg-cyan-500 px-4 py-2 text-xs font-medium">
          View plans
        </button>
      </div>
      <div className="grid w-main max-w-full grid-cols-[repeat(16,1fr)] grid-rows-[repeat(16,1fr)] gap-4 p-6">
        <FancyCard className="col-span-4 row-span-7">
          <div className="flex flex-col items-center justify-end gap-4 p-6">
            <div className="text-center font-monda text-lg">
              and Innovate, Anytime, Welcome to f screen marketings
              possibilities. Dispelling videos, and persuasive text to showcase
              your products.
            </div>
            <button className="rounded-lg bg-cyan-500 px-8 py-2 font-medium">
              Publish
            </button>
          </div>
        </FancyCard>
        <FancyCard className="col-span-12 row-span-7">
          <div className="grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(1,1fr)] gap-6 p-6">
            <div className="col-span-2 row-span-1 flex flex-col justify-center font-manrope text-7xl font-extrabold -tracking-widest">
              <div>Unleash</div>
              <div className="text-cyan-500">Your Screen&apos;s</div>
              <div className="text-end">Untapped</div>
              <div className="text-end">Potential</div>
            </div>
            <div className="col-span-1 row-span-1 font-monda text-xl">
              AiScreens - Unleash Your l Craft, Schedule, and Innovate, Anytime,
              Anywhere Welcome to AiScreens, meets limitless possibilities.
            </div>
          </div>
        </FancyCard>
        <FancyCard className="col-span-4 row-span-4"></FancyCard>
        <FancyCard className="col-span-12 row-span-9"></FancyCard>
        <FancyCard className="col-span-2 row-span-5"></FancyCard>
        <FancyCard className="col-span-2 row-span-5"></FancyCard>
      </div>
    </>
  );
};

export default Home;
