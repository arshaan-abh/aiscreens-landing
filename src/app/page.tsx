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
      <ExpandableCardsBoundary className="grid w-main max-w-full grid-cols-[repeat(16,1fr)] grid-rows-[repeat(16,1fr)] gap-4 px-8">
        <FancyCard
          className="col-start-1 col-end-17 row-start-1 row-end-6
            sm:col-start-1 sm:col-end-17 sm:row-start-1 sm:row-end-6
            lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-17"
        >
          <div className="flex flex-col justify-between gap-y-6 px-8 py-6">
            <div className="my-auto flex flex-col text-center text-4xl font-extrabold -tracking-widest 3xs:text-5xl 2xs:text-6xl xs:text-7xl sm:text-start">
              <div>Unleash</div>
              <div className="whitespace-nowrap text-primary-500">
                Your Screen&apos;s
              </div>
              <div className="sm:text-end">Untapped</div>
              <div className="sm:text-end">Potential</div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="h-px bg-gradient-to-l from-gradient-from to-gradient-to" />
              <div className="text-center text-gray sm:text-start">
                Welcome to <span className="font-bold">AiScreens</span>, where
                the art of screen marketing meets limitless possibilities.
                Direct your brand&#39;s story by orchestrating visually stunning
                imagery, compelling videos, and persuasive text to showcase your
                services or products. With AiScreens, liberate yourself from the
                constraints of time or location, manage your screen marketing
                whenever, wherever, and embrace the liberty to craft
                unforgettable experiences for your audience.
              </div>
            </div>
          </div>
        </FancyCard>
        <a
          className="col-start-1 col-end-17 row-start-14 row-end-16
            grid overflow-hidden rounded-3xl
            sm:col-start-9 sm:col-end-17 sm:row-start-11 sm:row-end-14
            lg:col-start-8 lg:col-end-11 lg:row-start-12 lg:row-end-17"
        >
          <ExpandableCard
            className="grid rounded-3xl bg-primary-500 p-4 shadow-border-2 shadow-secondary [--mx:2rem]
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
                <LinkIcon />
              </div>
              <div className="text-sm">Recover our history</div>
              <div className="text-3xl font-extrabold tracking-tighter">
                Testimonial
              </div>
            </div>
          </ExpandableCard>
        </a>
        <FancyCard
          className="col-start-1 col-end-17 row-start-8 row-end-14
            sm:col-start-1 sm:col-end-17 sm:row-start-6 sm:row-end-11
            lg:col-start-8 lg:col-end-17 lg:row-start-1 lg:row-end-12"
        >
          <Features />
        </FancyCard>
        <a
          className="sticky bottom-8
            col-start-9 col-end-17 row-start-16 row-end-17
            grid overflow-hidden rounded-3xl sm:static
            sm:col-start-9 sm:col-end-13 sm:row-start-14 sm:row-end-17
            lg:col-start-14 lg:col-end-17 lg:row-start-12 lg:row-end-17"
        >
          <ExpandableCard
            className="grid rounded-3xl bg-rose p-4 text-secondary shadow-border-2 shadow-secondary [--mx:2rem]
              data-[is-expanded=true]:rounded-[calc(1.5rem-1px)] data-[is-expanded=true]:bg-rose/50 data-[is-expanded=true]:backdrop-blur-2xl"
            extra={<div />}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div className="hidden text-sm capitalize sm:flex">
                  Craft professional screen experiences with us.
                </div>
                <LinkIcon className="shrink-0" />
              </div>
              <div className="grow sm:min-h-4" />
              <div className="text-3xl font-extrabold tracking-tighter">
                Contact Us
              </div>
            </div>
          </ExpandableCard>
        </a>
        <a
          className="sticky bottom-8
            col-start-1 col-end-9 row-start-16 row-end-17
            grid overflow-hidden rounded-3xl sm:static
            sm:col-start-13 sm:col-end-17 sm:row-start-14 sm:row-end-17
            lg:col-start-11 lg:col-end-14 lg:row-start-12 lg:row-end-17"
        >
          <ExpandableCard
            className="grid rounded-3xl bg-rose p-4 text-secondary shadow-border-2 shadow-secondary [--mx:2rem]
              data-[is-expanded=true]:rounded-[calc(1.5rem-1px)] data-[is-expanded=true]:bg-rose/50 data-[is-expanded=true]:backdrop-blur-2xl"
            extra={<div />}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div className="hidden text-sm capitalize sm:flex">
                  We&#39;re reshaping the future of screen marketing.
                </div>
                <LinkIcon className="shrink-0" />
              </div>
              <div className="grow sm:min-h-4" />
              <div className="text-3xl font-extrabold tracking-tighter">
                About Us
              </div>
            </div>
          </ExpandableCard>
        </a>
      </ExpandableCardsBoundary>
      <div className="pointer-events-none fixed inset-0 top-auto h-96 bg-gradient-to-t from-zinc-950 to-transparent sm:hidden" />
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
