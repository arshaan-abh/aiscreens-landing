import { type FC } from "react";
import { LinkIcon, Logo } from "@/components/icons";
import FancyCard from "@/components/fancy-card";
import AvatarGroup from "@/components/avatar-group";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/sheet";
import { Menu } from "lucide-react";
import Features from "@/components/features";
import Image from "next/image";
import avatar1 from "/public/avatar-1.jpg";
import avatar2 from "/public/avatar-2.jpg";
import avatar3 from "/public/avatar-3.jpg";
import {
  ExpandableCard,
  ExpandableCardsBoundary,
} from "@/components/expandable-card";
import { textSlides } from "@/constants/text-slides";
import TextSlide from "@/components/text-slider";

const Home: FC = () => {
  return (
    <Sheet>
      <div className="sticky top-0 z-30 flex w-main max-w-full items-center gap-12 bg-gradient-to-b from-zinc-950 to-transparent p-8">
        <Logo />
        <div className="hidden gap-4 text-sm sm:flex">
          <a
            className="rounded-2xl border border-white px-4 py-2 font-bold tracking-tight"
            href="#home"
          >
            Home
          </a>
          <a
            className="rounded-2xl px-4 py-2 tracking-tight"
            href="#testimonial"
          >
            Testimonial
          </a>
          <a className="rounded-2xl px-4 py-2 tracking-tight" href="#footer">
            Contact Us
          </a>
        </div>
        <a
          href="https://aiscreens.selectedstartups.com/"
          className="ml-auto hidden rounded-2xl bg-primary-500 px-4 py-2 text-sm font-bold tracking-tight sm:flex"
        >
          Sign In
        </a>
        <SheetTrigger className="ml-auto sm:hidden">
          <Menu />
        </SheetTrigger>
      </div>
      <div className="mb-8 grid w-main max-w-full grid-cols-[repeat(16,1fr)] grid-rows-[repeat(16,1fr)] gap-4 px-8">
        <FancyCard className="col-start-1 col-end-8 row-start-1 row-end-17">
          <div className="flex flex-col justify-between gap-y-6 px-8 py-6">
            <div className="my-auto flex flex-col text-start text-7xl font-extrabold -tracking-widest">
              <div>Unleash</div>
              <div className="whitespace-nowrap text-primary-500">
                Your Screen&apos;s
              </div>
              <div className="text-end">Untapped</div>
              <div className="text-end">Potential</div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="h-px bg-gradient-to-l from-gradient-from to-gradient-to" />
              <div className="hidden flex-col gap-4 xl:flex">
                {textSlides[0]}
                {textSlides[1]}
              </div>
              <TextSlide className="block xl:hidden" />
            </div>
          </div>
        </FancyCard>
        <ExpandableCardsBoundary
          className="col-start-8 col-end-17 row-start-1 row-end-17
            grid grid-cols-[repeat(9,1fr)] grid-rows-[repeat(16,1fr)] gap-4"
        >
          <a
            className="col-start-1 col-end-4 row-start-12 row-end-17
              grid overflow-hidden rounded-3xl"
          >
            <ExpandableCard
              className="grid rounded-3xl bg-primary-500 p-4 shadow-border-2 shadow-secondary
              data-[is-expanded=true]:rounded-[calc(1.5rem-1px)] data-[is-expanded=true]:bg-primary-500/50 data-[is-expanded=true]:backdrop-blur-2xl"
              extra={<div />}
            >
              {/* TODO the gap must be equal to expandable card's padding */}
              <div className="flex flex-col justify-between gap-4">
                <div className="flex items-start justify-between gap-4">
                  <AvatarGroup
                    avatars={[
                      <Image src={avatar1} alt="Avatar 1" key={0} />,
                      <Image src={avatar2} alt="Avatar 2" key={1} />,
                      <Image src={avatar3} alt="Avatar 3" key={2} />,
                    ]}
                  />
                  <LinkIcon className="shrink-0" />
                </div>
                <div className="hidden text-sm xl:flex">
                  Recover our history
                </div>
                <div className="text-3xl font-extrabold tracking-tighter">
                  Testimonial
                </div>
              </div>
            </ExpandableCard>
          </a>
          <FancyCard className="col-start-1 col-end-10 row-start-1 row-end-12">
            <Features />
          </FancyCard>
          <a
            className="static bottom-8
              col-start-4 col-end-7 row-start-12 row-end-17
              grid overflow-hidden rounded-3xl"
          >
            <ExpandableCard
              className="grid rounded-3xl bg-rose p-4 text-secondary shadow-border-2 shadow-secondary
              data-[is-expanded=true]:rounded-[calc(1.5rem-1px)] data-[is-expanded=true]:bg-rose/50 data-[is-expanded=true]:backdrop-blur-2xl"
              extra={<div />}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="hidden text-sm capitalize xl:flex">
                    Craft professional screen experiences with us.
                  </div>
                  <LinkIcon className="ml-auto shrink-0" />
                </div>
                <div className="mt-auto text-3xl font-extrabold tracking-tighter">
                  Contact Us
                </div>
              </div>
            </ExpandableCard>
          </a>
          <a
            className="static bottom-8
              col-start-7 col-end-10 row-start-12 row-end-17
              grid overflow-hidden rounded-3xl"
          >
            <ExpandableCard
              className="grid rounded-3xl bg-rose p-4 text-secondary shadow-border-2 shadow-secondary
              data-[is-expanded=true]:rounded-[calc(1.5rem-1px)] data-[is-expanded=true]:bg-rose/50 data-[is-expanded=true]:backdrop-blur-2xl"
              extra={<div />}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="hidden text-sm capitalize xl:flex">
                    We&#39;re reshaping the future of screen marketing.
                  </div>
                  <LinkIcon className="ml-auto shrink-0" />
                </div>
                <div className="mt-auto text-3xl font-extrabold tracking-tighter">
                  About Us
                </div>
              </div>
            </ExpandableCard>
          </a>
        </ExpandableCardsBoundary>
      </div>
      <SheetContent className="border-teal-900 bg-teal-950">
        <SheetHeader>
          <SheetTitle className="text-white">Menu</SheetTitle>
        </SheetHeader>
        <SheetClose className="w-full text-start">
          <a href="#home">
            <div className="border-b border-teal-900 py-4">Home</div>
          </a>
        </SheetClose>
        <SheetClose className="w-full text-start">
          <a href="#testimonial">
            <div className="border-b border-teal-900 py-4">Testimonial</div>
          </a>
        </SheetClose>
        <SheetClose className="w-full text-start">
          <a href="#footer">
            <div className="border-b border-teal-900 py-4">Contact Us</div>
          </a>
        </SheetClose>
        <a href="https://aiscreens.selectedstartups.com/">
          <div className="border-b border-teal-900 py-4">Sign In</div>
        </a>
      </SheetContent>
    </Sheet>
  );
};

export default Home;

// TODO list:
// 1. use grid-rows-16 instead?
