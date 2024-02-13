import type { FC } from "react";
import { LinkIcon, Logo, UserIcon } from "@/components/icons";
import FancyCard from "@/components/fancy-card";
import AvatarGroup from "@/components/avatar-group";
import Image from "next/image";
import slide1 from "/public/slide-1.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/sheet";
import { Menu } from "lucide-react";

const Home: FC = () => {
  return (
    <>
      <Sheet>
        <div className="flex w-main max-w-full items-center justify-between p-8">
          <Logo />
          <div className="hidden gap-8 font-rubik text-sm sm:flex">
            <div>Home</div>
            <div>Features</div>
            <div>Services</div>
          </div>
          <button className="hidden rounded-full bg-cyan-500 px-4 py-2 text-xs font-medium sm:flex">
            View plans
          </button>
          <SheetTrigger className="sm:hidden">
            <Menu />
          </SheetTrigger>
        </div>
        <div className="grid w-main max-w-full grid-cols-[repeat(16,1fr)] grid-rows-[repeat(16,1fr)] gap-4 p-8 pt-0">
          <FancyCard
            className="col-start-1 col-end-9 row-start-[11] row-end-[17]
            lg:col-span-4 lg:row-span-7"
          >
            <div className="flex flex-col items-center justify-end gap-4 p-8">
              <div className="flex grow items-center text-center font-monda text-lg">
                and Innovate, Anytime, Welcome to f screen marketings
                possibilities. Dispelling videos, and persuasive text to
                showcase your products.
              </div>
              <button className="rounded-lg bg-cyan-500 px-16 py-2 font-medium">
                Publish
              </button>
            </div>
          </FancyCard>
          <FancyCard
            className="col-start-1 col-end-[17] row-start-1 row-end-6
            lg:col-span-12 lg:row-span-7"
          >
            <div className="grid gap-8 px-8 sm:grid-cols-[repeat(2,1fr)]">
              <div className="flex flex-col justify-center pt-12 text-center font-manrope text-7xl font-extrabold -tracking-widest sm:py-6 sm:text-start">
                <div>Unleash</div>
                <div className="whitespace-nowrap text-cyan-500">
                  Your Screen&apos;s
                </div>
                <div className="sm:text-end">Untapped</div>
                <div className="sm:text-end">Potential</div>
              </div>
              <div className="pb-12 text-center font-monda text-xl sm:py-8 sm:text-start">
                AiScreens - Unleash Your l Craft, Schedule, and Innovate,
                Anytime, Anywhere Welcome to AiScreens, meets limitless
                possibilities.
              </div>
            </div>
          </FancyCard>
          <div
            className="col-start-9 col-end-[17] row-start-[11] row-end-[14]
            flex flex-col rounded-2xl bg-cyan-500 p-4 font-monda
            lg:col-span-4 lg:row-span-4"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">Testimonial</div>
                <LinkIcon />
              </div>
              <div className="text-sm">Recover our history</div>
            </div>
            <div className="min-h-2 grow" />
            <div className="flex items-center gap-2 text-sm text-zinc-950">
              <AvatarGroup
                avatars={[
                  <UserIcon key={0} className="text-white" />,
                  <UserIcon key={1} className="text-white" />,
                  <UserIcon key={2} className="text-white" />,
                ]}
              />
              Recover our history
            </div>
          </div>
          <FancyCard
            className="col-start-1 col-end-[17] row-start-6 row-end-[11]
            lg:col-span-12 lg:row-span-9"
          >
            <div className="grid grid-cols-[repeat(2,1fr)] gap-8 py-8">
              <div className="flex flex-col justify-between gap-8 pl-8">
                <div className="font-monda text-2xl font-bold">
                  Cloud Control Panel
                </div>
                <div className="font-monda text-lg">
                  AiScreens - Unleash Your Screen&#39;s Untapped Potential
                  <br />
                  Craft, Schedule, and Innovate, Anytime, Welcome to f screen
                  marketings possibilities. Dispelling videos, and persuasive
                  text to showcase your services or products. Wit...
                </div>
              </div>
              <div className="flex items-center justify-end">
                <Image src={slide1} alt="Slide 1" />
              </div>
            </div>
          </FancyCard>
          <div
            className="col-start-9 col-end-13 row-start-[14] row-end-[17]
            flex flex-col rounded-2xl bg-rose-600 p-4 font-monda
            lg:col-span-2 lg:row-span-5"
          >
            <LinkIcon className="mb-2" />
            <div className="text-sm">Do you have any question?</div>
            <div className="min-h-2 grow" />
            <div className="text-2xl font-bold">Contact Us</div>
          </div>
          <div
            className="col-start-13 col-end-[17] row-start-[14] row-end-[17]
            flex flex-col rounded-2xl bg-rose-600 p-4 font-monda
            lg:col-span-2 lg:row-span-5"
          >
            <LinkIcon className="mb-2" />
            <div className="text-sm">recover our history</div>
            <div className="min-h-2 grow" />
            <div className="text-2xl font-bold">about Us</div>
          </div>
        </div>
        <SheetContent className="bg-teal-950">
          <SheetHeader>
            <SheetTitle className="text-white">Menu</SheetTitle>
          </SheetHeader>
          <div className="border-b py-4">Home</div>
          <div className="border-b py-4">Features</div>
          <div className="border-b py-4">Services</div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Home;
