"use client";
import { useState, type FC } from "react";
import { BurgerMenu, CloseIcon, LinkIcon, Logo } from "@/components/icons";
import FancyCard from "@/components/fancy-card";
import AvatarGroup from "@/components/avatar-group";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/sheet";
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
import TitleSlider from "@/components/title-slider";
import FeaturesPage from "@/components/features-page";
import TestimonialPage from "@/components/testimonial-page";
import PricingPage from "@/components/pricing-page";
import ContactUsPage from "@/components/contact-us-page";
import AboutUsPage from "@/components/about-us-page";
import { Context } from "@/contexts/context";
import { defaultValue } from "@/contexts/context-default-value";
import SwitchParent from "@/components/switch-parent";
import useResponsiveState from "@/hooks/use-responsive-state";
import useIntersectionObserver from "@/hooks/use-Intersection-observer";

const Home: FC = () => {
  const [context, setContext] = useState(defaultValue);
  const isPhone = useResponsiveState<boolean>({
    defaultState: true,
    breakpoints: [{ breakpoint: 640, state: false }],
  });
  const sectionIds = ["home", "features", "pricing"];
  const activeSection = useIntersectionObserver(sectionIds);
  return (
    <Context.Provider value={{ context, setContext }}>
      <Sheet>
        <main className="h-screen w-full snap-y snap-mandatory flex-col items-center overflow-y-auto overflow-x-hidden scroll-smooth">
          <div className="nav-menu fixed inset-x-0 top-0 z-30 mx-auto flex w-main max-w-full items-center gap-12 p-8">
            <Logo />
            <div className="hidden gap-4 text-sm md:flex">
              <a
                className={`rounded-2xl border px-4 py-2 tracking-tight transition-all ${activeSection === "home" ? "border-white font-bold" : "border-transparent"}`}
                href="#home"
              >
                Home
              </a>
              <a
                className={`rounded-2xl border px-4 py-2 tracking-tight transition-all ${activeSection === "features" ? "border-white font-bold" : "border-transparent"}`}
                href="#features"
              >
                Features
              </a>
              <a
                className={`rounded-2xl border px-4 py-2 tracking-tight transition-all ${activeSection === "pricing" ? "border-white font-bold" : "border-transparent"}`}
                href="#pricing"
              >
                Pricing
              </a>
            </div>
            <a
              href="https://aiscreens.selectedstartups.com/"
              className="ml-auto hidden rounded-2xl bg-primary-500 px-4 py-2 text-sm font-bold tracking-tight md:flex"
            >
              Sign In
            </a>
            <SheetTrigger className="ml-auto md:hidden">
              <BurgerMenu className="text-primary-500" />
            </SheetTrigger>
          </div>
          <div
            id="home"
            className="mx-auto flex min-h-svh w-main-smaller max-w-full snap-start items-center pt-[6.375rem] lg:w-main"
          >
            <SwitchParent
              condition={isPhone}
              component1={ExpandableCardsBoundary}
              component2="div"
              className="mx-8 mb-4 grid grid-cols-[repeat(16,1fr)] grid-rows-[repeat(16,1fr)] gap-4"
            >
              <FancyCard
                className="col-start-1 col-end-17 row-start-1 row-end-8
            grid
            lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-17"
              >
                <div className="flex flex-col justify-between gap-y-6 px-8 py-6">
                  <TitleSlider />
                  <div className="hidden flex-col gap-6 sm:flex">
                    <div className="h-px bg-gradient-to-l from-gradient-from to-gradient-to" />
                    <div className="hidden flex-col gap-4 xl:flex">
                      {textSlides[0]}
                      {textSlides[1]}
                    </div>
                    <TextSlide className="block xl:hidden" />
                  </div>
                </div>
              </FancyCard>
              <SwitchParent
                condition={isPhone}
                component1="div"
                component2={ExpandableCardsBoundary}
                className="col-start-1 col-end-17 row-start-8 row-end-17
            grid grid-cols-[repeat(9,1fr)] grid-rows-[repeat(16,1fr)] gap-4
            lg:col-start-8 lg:col-end-17 lg:row-start-1 lg:row-end-17"
              >
                <a
                  className="col-start-1 col-end-13 row-start-13 row-end-17
              grid overflow-hidden rounded-3xl
              lg:col-start-1 lg:col-end-4 lg:row-start-12 lg:row-end-17"
                >
                  <ExpandableCard
                    className="group grid rounded-3xl bg-primary-500 p-4 text-3xl text-secondary shadow-border-2 shadow-secondary [--lh:unset] data-[is-expanded=true]:rounded-[calc(1.5rem-1px)] data-[is-expanded=true]:bg-primary-500/50 data-[is-expanded=true]:backdrop-blur-2xl
              lg:text-2xl 1.5xl:text-3xl"
                    extra={<TestimonialPage />}
                  >
                    {/* TODO the gap must be equal to expandable card's padding */}
                    <div className="flex flex-row-reverse items-end justify-between gap-4 text-white sm:flex-col sm:items-stretch">
                      <div className="flex items-start justify-between gap-4">
                        <AvatarGroup
                          className="transition-opacity duration-1000 group-[[data-is-expanded=true]]:opacity-0"
                          avatars={[
                            <Image src={avatar1} alt="Avatar 1" key={0} />,
                            <Image src={avatar2} alt="Avatar 2" key={1} />,
                            <Image src={avatar3} alt="Avatar 3" key={2} />,
                          ]}
                        />
                        <LinkIcon className="hidden shrink-0 sm:flex" />
                      </div>
                      <div className="hidden text-sm sm:flex lg:hidden xl:flex">
                        Recover our history
                      </div>
                      <div className="whitespace-nowrap font-extrabold tracking-tighter">
                        Testimonial
                      </div>
                    </div>
                  </ExpandableCard>
                </a>
                <FancyCard
                  className="col-start-1 col-end-13 row-start-1 row-end-9
              lg:col-start-1 lg:col-end-10 lg:row-start-1 lg:row-end-12"
                >
                  <Features isPhone={isPhone} />
                </FancyCard>
                <a
                  className="static bottom-8
              col-start-1 col-end-6 row-start-9 row-end-13
              grid overflow-hidden rounded-3xl
              lg:col-start-7 lg:col-end-10 lg:row-start-12 lg:row-end-17"
                >
                  <ExpandableCard
                    className="grid rounded-3xl bg-rose p-4 text-3xl text-secondary shadow-border-2 shadow-secondary [--lh:unset] data-[is-expanded=true]:rounded-[calc(1.5rem-1px)] data-[is-expanded=true]:bg-rose/50 data-[is-expanded=true]:backdrop-blur-2xl
              lg:text-2xl 1.5xl:text-3xl"
                    extra={<ContactUsPage />}
                  >
                    <div className="flex flex-col gap-4">
                      <div className="hidden items-start gap-4 sm:flex">
                        <div className="flex text-sm capitalize lg:hidden xl:flex">
                          Contact us today to commence crafting professional
                          screen experiences.
                        </div>
                        <LinkIcon className="ml-auto shrink-0" />
                      </div>
                      <div className="mt-auto whitespace-nowrap font-extrabold tracking-tighter">
                        Contact Us
                      </div>
                    </div>
                  </ExpandableCard>
                </a>
                <a
                  className="static bottom-8
              col-start-6 col-end-13 row-start-9 row-end-13
              grid overflow-hidden rounded-3xl
              lg:col-start-4 lg:col-end-7 lg:row-start-12 lg:row-end-17"
                >
                  <ExpandableCard
                    className="grid rounded-3xl bg-primary-500 p-4 text-3xl text-secondary shadow-border-2 shadow-secondary [--lh:unset] data-[is-expanded=true]:rounded-[calc(1.5rem-1px)] data-[is-expanded=true]:bg-primary-500/50 data-[is-expanded=true]:backdrop-blur-2xl
              lg:text-2xl 1.5xl:text-3xl"
                    extra={<AboutUsPage />}
                  >
                    <div className="flex flex-col gap-4">
                      <div className="hidden items-start gap-4 sm:flex">
                        <div className="flex text-sm capitalize lg:hidden xl:flex">
                          We are committed to reshaping the future of screen
                          marketing.
                        </div>
                        <LinkIcon className="ml-auto shrink-0" />
                      </div>
                      <div className="mt-auto whitespace-nowrap font-extrabold tracking-tighter">
                        About Us
                      </div>
                    </div>
                  </ExpandableCard>
                </a>
              </SwitchParent>
            </SwitchParent>
          </div>
          <div
            id="features"
            className="mb-4 flex min-h-svh w-full snap-start items-center justify-center pt-[6.375rem]"
          >
            <FeaturesPage />
          </div>
          <div
            id="pricing"
            className="mx-auto flex min-h-svh w-main-smaller max-w-full snap-start flex-col justify-center px-8 pt-[6.375rem] lg:w-main"
          >
            <PricingPage />
          </div>
        </main>
        <SheetContent className="grid w-fit rounded-l-3xl border-0 bg-transparent p-0 backdrop-blur-lg">
          <FancyCard className="rounded-r-none after:rounded-r-none">
            <div className="flex flex-col gap-5 px-5 py-10">
              <SheetClose>
                <CloseIcon className="mx-auto mb-2" />
              </SheetClose>
              <SheetClose>
                <a href="#home">
                  <div
                    className={`rounded-full border border-white p-4 text-center font-extrabold ${activeSection === "home" ? "bg-white text-secondary" : "text-white"}`}
                  >
                    Home
                  </div>
                </a>
              </SheetClose>
              <SheetClose>
                <a href="#features">
                  <div
                    className={`rounded-full border border-white p-4 text-center font-extrabold ${activeSection === "features" ? "bg-white text-secondary" : "text-white"}`}
                  >
                    Features
                  </div>
                </a>
              </SheetClose>
              <SheetClose>
                <a href="#pricing">
                  <div
                    className={`rounded-full border border-white p-4 text-center font-extrabold ${activeSection === "pricing" ? "bg-white text-secondary" : "text-white"}`}
                  >
                    Pricing
                  </div>
                </a>
              </SheetClose>
              <a href="https://aiscreens.selectedstartups.com/">
                <div className="rounded-full border border-white p-4 text-center font-extrabold text-white">
                  Sign In
                </div>
              </a>
            </div>
          </FancyCard>
        </SheetContent>
      </Sheet>
    </Context.Provider>
  );
};

export default Home;

// TODO list:
// 1. use grid-rows-16 instead?
// 2. fix slider paddings
