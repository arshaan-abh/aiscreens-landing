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
        <div className="sticky top-0 flex w-main max-w-full items-center justify-between bg-gradient-to-b from-zinc-950 to-transparent p-8">
          <Logo />
          <div className="hidden gap-8 font-rubik text-sm sm:flex">
            <div>Home</div>
            <div>Features</div>
            <div>Services</div>
          </div>
          <button className="hidden rounded-full bg-cyan-500 px-4 py-2 text-xs font-medium sm:flex">
            Sign In
          </button>
          <SheetTrigger className="sm:hidden">
            <Menu />
          </SheetTrigger>
        </div>
        <div className="grid w-main max-w-full grid-cols-[repeat(16,1fr)] grid-rows-[repeat(16,1fr)] gap-4 p-8 pt-0">
          <FancyCard
            className="col-start-1 col-end-[17] row-start-[6] row-end-[8]
            sm:col-start-1 sm:col-end-9 sm:row-start-[11] sm:row-end-[17]
            lg:col-span-4 lg:row-span-7"
          >
            <div className="flex flex-col items-center justify-end gap-4 p-8">
              <div className="flex grow items-center text-center font-monda text-lg">
                Take the next step with confidence – smart campaigns are just a
                few clicks away. Our user-friendly product is designed to ensure
                your success.
              </div>
              <button className="rounded-lg bg-cyan-500 px-16 py-2 font-medium">
                Start
              </button>
            </div>
          </FancyCard>
          <FancyCard
            className="col-start-1 col-end-[17] row-start-1 row-end-6
            sm:col-start-1 sm:col-end-[17] sm:row-start-1 sm:row-end-6
            lg:col-span-12 lg:row-span-7"
          >
            <div className="grid gap-8 px-8 sm:grid-cols-[repeat(2,1fr)]">
              <div className="flex flex-col justify-end pt-12 text-center font-manrope text-4xl font-extrabold -tracking-widest 3xs:text-5xl 2xs:text-6xl xs:text-7xl sm:justify-center sm:py-6 sm:text-start">
                <div>Unleash</div>
                <div className="whitespace-nowrap text-cyan-500">
                  Your Screen&apos;s
                </div>
                <div className="sm:text-end">Untapped</div>
                <div className="sm:text-end">Potential</div>
              </div>
              <div className="pb-12 text-center font-monda text-xl sm:py-8 sm:text-start">
                Welcome to AiScreens,where the art of screen marketing meets
                limitless possibilities. Direct your brand&#39;s story by
                orchestrating visually stunning imagery, compelling videos,and
                persuasive text to showcase your services or products...
              </div>
            </div>
          </FancyCard>
          <div
            className="col-start-1 col-end-[17] row-start-[14] row-end-[16]
            flex flex-col rounded-2xl bg-cyan-500 p-4 font-monda
            sm:col-start-9 sm:col-end-[17] sm:row-start-[11] sm:row-end-[14]
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
            className="col-start-1 col-end-[17] row-start-[8] row-end-[14]
            sm:col-start-1 sm:col-end-[17] sm:row-start-6 sm:row-end-[11]
            lg:col-span-12 lg:row-span-9"
          >
            <div className="grid grid-cols-[repeat(1,1fr)] gap-8 py-8 sm:grid-cols-[repeat(2,1fr)]">
              <div className="order-2 mr-8 flex flex-col justify-end gap-4 pl-8 sm:order-1 sm:mr-0 sm:justify-between sm:gap-8">
                <div className="font-monda text-2xl font-bold">
                  Cloud Control Panel
                </div>
                <div className="font-monda text-lg">
                  We understand the challenges of gathering marketing materials
                  and ideas, as well as the distractions they can bring.
                  That&#39;s why we&#39;ve revamped the entire process to make
                  it not only smoother but also highly efficient.The
                  AiScreens&#39; Cloud All-in-One Control...
                </div>
              </div>
              <div className="order-1 ml-8 flex items-center justify-end sm:order-2 sm:ml-0">
                <Image src={slide1} alt="Slide 1" />
              </div>
            </div>
          </FancyCard>
          <div
            className="sticky bottom-8 z-10
            col-start-9 col-end-[17] row-start-[16] row-end-[17]
            flex flex-col rounded-2xl bg-rose-600 p-4 font-monda
            sm:static sm:col-start-9 sm:col-end-13 sm:row-start-[14] sm:row-end-[17]
            lg:col-span-2 lg:row-span-5"
          >
            <LinkIcon className="mb-2" />
            <div className="hidden text-sm capitalize sm:flex">
              Contact us today to commence crafting professional screen
              experiences.
            </div>
            <div className="grow sm:min-h-2" />
            <div className="text-2xl font-bold">Contact Us</div>
          </div>
          <div
            className="sticky bottom-8 z-10
            col-start-1 col-end-9 row-start-[16] row-end-[17]
            flex flex-col rounded-2xl bg-rose-600 p-4 font-monda
            sm:static sm:col-start-13 sm:col-end-[17] sm:row-start-[14] sm:row-end-[17]
            lg:col-span-2 lg:row-span-5"
          >
            <LinkIcon className="mb-2" />
            <div className="hidden text-sm capitalize sm:flex">
              We are committed to reshaping the future of screen marketing.
            </div>
            <div className="grow sm:min-h-2" />
            <div className="text-2xl font-bold">about Us</div>
          </div>
        </div>
        <div className="pointer-events-none fixed inset-0 top-auto h-96 bg-gradient-to-t from-zinc-950 to-transparent sm:hidden" />
        <SheetContent className="border-teal-900 bg-teal-950">
          <SheetHeader>
            <SheetTitle className="text-white">Menu</SheetTitle>
          </SheetHeader>
          <div className="border-b border-teal-900 py-4">Home</div>
          <div className="border-b border-teal-900 py-4">Features</div>
          <div className="border-b border-teal-900 py-4">Services</div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Home;

// TODO list:
// 1. organize grid class names
// 2. use grid-rows-16 instead?
