import { type FC } from "react";
import { LinkIcon, Logo, UserIcon } from "@/components/icons";
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

const Home: FC = () => {
  return (
    <Sheet>
      <div className="sticky top-0 z-20 flex w-main max-w-full items-center gap-12 bg-gradient-to-b from-zinc-950 to-transparent p-8">
        <Logo />
        <div className="hidden gap-4 text-sm sm:flex">
          <a
            className="rounded-2xl border border-white px-4 py-2 font-bold"
            href="#home"
          >
            Home
          </a>
          <a className="rounded-2xl px-4 py-2" href="#testimonial">
            Testimonial
          </a>
          <a className="rounded-2xl px-4 py-2" href="#footer">
            Contact Us
          </a>
        </div>
        <a
          href="https://aiscreens.selectedstartups.com/"
          className="ml-auto hidden rounded-2xl bg-cyan-500 px-4 py-2 text-sm font-bold sm:flex"
        >
          Sign In
        </a>
        <SheetTrigger className="ml-auto sm:hidden">
          <Menu />
        </SheetTrigger>
      </div>
      <div className="grid w-main max-w-full grid-cols-[repeat(16,1fr)] grid-rows-[repeat(16,1fr)] gap-4 px-8">
        <FancyCard
          className="col-start-1 col-end-17 row-start-1 row-end-6
            sm:col-start-1 sm:col-end-17 sm:row-start-1 sm:row-end-6
            lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-17"
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
            <div className="flex items-end pb-12 text-center text-xl sm:py-8 sm:text-start">
              Welcome to AiScreens,where the art of screen marketing meets
              limitless possibilities. Direct your brand&#39;s story by
              orchestrating visually stunning imagery, compelling videos, and
              persuasive text to showcase your services or products.
            </div>
          </div>
        </FancyCard>
        <a
          href="#testimonial"
          className="col-start-1 col-end-17 row-start-14 row-end-16
            flex flex-col rounded-2xl bg-cyan-500 p-4
            sm:col-start-9 sm:col-end-17 sm:row-start-11 sm:row-end-14
            lg:col-start-8 lg:col-end-13 lg:row-start-12 lg:row-end-17"
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
        </a>
        <FancyCard
          className="col-start-1 col-end-17 row-start-8 row-end-14
            sm:col-start-1 sm:col-end-17 sm:row-start-6 sm:row-end-11
            lg:col-start-8 lg:col-end-17 lg:row-start-1 lg:row-end-12"
        >
          <Features />
        </FancyCard>
        <a
          href="#footer"
          className="sticky bottom-8 z-10
            col-start-9 col-end-17 row-start-16 row-end-17
            flex flex-col rounded-2xl bg-rose-600 p-4 sm:static
            sm:col-start-9 sm:col-end-13 sm:row-start-14 sm:row-end-17
            lg:col-start-15 lg:col-end-17 lg:row-start-12 lg:row-end-17"
        >
          <LinkIcon className="mb-2" />
          <div className="hidden text-sm capitalize sm:flex">
            Craft professional screen experiences with us.
          </div>
          <div className="grow sm:min-h-2" />
          <div className="text-lg font-bold">Contact Us</div>
        </a>
        <a
          href="#footer"
          className="sticky bottom-8 z-10
            col-start-1 col-end-9 row-start-16 row-end-17
            flex flex-col rounded-2xl bg-rose-600 p-4 sm:static
            sm:col-start-13 sm:col-end-17 sm:row-start-14 sm:row-end-17
            lg:col-start-13 lg:col-end-15 lg:row-start-12 lg:row-end-17"
        >
          <LinkIcon className="mb-2" />
          <div className="hidden text-sm capitalize sm:flex">
            We&#39;re reshaping the future of screen marketing.
          </div>
          <div className="grow sm:min-h-2" />
          <div className="text-lg font-bold">About Us</div>
        </a>
      </div>
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
