import type { FC } from "react";
import { LinkIcon, Logo } from "@src/components/icons";
import FancyCard from "@src/components/fancy-card";

const Home: FC = () => {
  return (
    <>
      <div className="flex w-main max-w-full items-center justify-between p-8">
        <Logo />
        <div className="flex gap-8 font-rubik text-sm">
          <div>Home</div>
          <div>Features</div>
          <div>Services</div>
        </div>
        <button className="rounded-full bg-cyan-500 px-4 py-2 text-xs font-medium">
          View plans
        </button>
      </div>
      <div className="grid w-main max-w-full grid-cols-[repeat(16,1fr)] grid-rows-[repeat(16,1fr)] gap-4 p-8 pt-0">
        <FancyCard className="col-span-4 row-span-7">
          <div className="flex flex-col items-center justify-end gap-4 p-8">
            <div className="flex grow items-center text-center font-monda text-lg">
              and Innovate, Anytime, Welcome to f screen marketings
              possibilities. Dispelling videos, and persuasive text to showcase
              your products.
            </div>
            <button className="rounded-lg bg-cyan-500 px-16 py-2 font-medium">
              Publish
            </button>
          </div>
        </FancyCard>
        <FancyCard className="col-span-12 row-span-7">
          <div className="grid grid-cols-[repeat(2,1fr)] gap-8 px-8">
            <div className="flex flex-col justify-center py-4 font-manrope text-7xl font-extrabold -tracking-widest">
              <div>Unleash</div>
              <div className="text-cyan-500">Your Screen&apos;s</div>
              <div className="text-end">Untapped</div>
              <div className="text-end">Potential</div>
            </div>
            <div className="py-8 font-monda text-xl">
              AiScreens - Unleash Your l Craft, Schedule, and Innovate, Anytime,
              Anywhere Welcome to AiScreens, meets limitless possibilities.
            </div>
          </div>
        </FancyCard>
        <div className="col-span-4 row-span-4 flex flex-col rounded-2xl bg-cyan-500 p-4 font-monda">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">Testimonial</div>
              <LinkIcon />
            </div>
            <div className="text-sm">Recover our history</div>
          </div>
          <div className="min-h-2 grow" />
          <div className="text-sm text-zinc-950">Recover our history</div>
        </div>
        <FancyCard className="col-span-12 row-span-9"></FancyCard>
        <div className="col-span-2 row-span-5 flex flex-col rounded-2xl bg-rose-600 p-4 font-monda">
          <LinkIcon className="mb-2" />
          <div className="text-sm">Do you have any question?</div>
          <div className="min-h-2 grow" />
          <div className="text-2xl font-bold">Contact Us</div>
        </div>
        <div className="col-span-2 row-span-5 flex flex-col rounded-2xl bg-rose-600 p-4 font-monda">
          <LinkIcon className="mb-2" />
          <div className="text-sm">recover our history</div>
          <div className="min-h-2 grow" />
          <div className="text-2xl font-bold">about Us</div>
        </div>
      </div>
    </>
  );
};

export default Home;
