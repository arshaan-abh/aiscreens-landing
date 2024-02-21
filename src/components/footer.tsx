import type { FC } from "react";
import FancyCard from "./fancy-card";
import { Logo } from "./icons";
import {
  AtSign,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import ButtonBase from "@mui/material/ButtonBase";

const Footer: FC = () => {
  return (
    <div
      className="z-10 w-main max-w-full p-8 pt-0 text-center xs:text-start"
      id="footer"
    >
      <FancyCard>
        <div className="p-8 pb-4">
          <Logo className="mx-auto mb-8 xs:mx-0" />
          <div className="mb-4 grid grid-cols-[repeat(1,1fr)] gap-x-4 gap-y-8 border-b border-white/20 pb-4 sm:grid-cols-[repeat(2,1fr)]">
            <div className="flex flex-col gap-4 font-monda text-sm">
              <div className="mb-2 font-bold">Features</div>
              <ButtonBase className="w-fit rounded-full px-2">
                Cloud Control Panel
              </ButtonBase>
              <ButtonBase className="w-fit rounded-full px-2">
                Notice Board and Media Editor
              </ButtonBase>
              <ButtonBase className="w-fit rounded-full px-2">
                Media Player
              </ButtonBase>
              <ButtonBase className="w-fit rounded-full px-2">
                Tailored App Integration
              </ButtonBase>
              <ButtonBase className="w-fit rounded-full px-2">
                Real-Time Web Page Streaming
              </ButtonBase>
              <ButtonBase className="w-fit rounded-full px-2">
                Scheduling Innovation
              </ButtonBase>
              <ButtonBase className="w-fit rounded-full px-2">
                Customised Screen Layouts
              </ButtonBase>
            </div>
            <div className="flex flex-col gap-4 font-monda text-sm">
              <div className="font-bold">Follow Us On Social Media</div>
              <div className="flex justify-center gap-4 xs:justify-normal">
                <ButtonBase className="rounded-full p-2">
                  <Facebook />
                </ButtonBase>
                <ButtonBase className="rounded-full p-2">
                  <Twitter />
                </ButtonBase>
                <ButtonBase className="rounded-full p-2">
                  <Youtube />
                </ButtonBase>
                <ButtonBase className="rounded-full p-2">
                  <Linkedin />
                </ButtonBase>
                <ButtonBase className="rounded-full p-2">
                  <Instagram />
                </ButtonBase>
              </div>
              <div className="font-bold">About Us</div>
              <div>
                <p className="mb-2">
                  At AiScreens, we&#39;re not just a company; we&#39;re a team
                  of passionate individuals dedicated to transforming the way
                  brands connect with their audiences. With a focus on
                  innovation and creativity, we&#39;re redefining the
                  possibilities of screen marketing.
                </p>
                <p>
                  Our goal is simple: to provide businesses with the tools and
                  technology they need to stand out in today&#39;s competitive
                  landscape. What truly drives us is our commitment to our
                  clients&#39; success. We believe in building lasting
                  partnerships and going above and beyond to ensure that every
                  campaign achieves its goals.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4 grid grid-cols-[repeat(1,1fr)] gap-4 border-b border-white/20 pb-4 sm:grid-cols-[repeat(2,1fr)]">
            <div className="flex items-center font-monda text-sm text-zinc-50">
              Unlock Marketing Freedom with AiScreens: Manage screen marketing
              anytime, anywhere. Craft unforgettable experiences for your
              audience without constraints of time or location.
            </div>
            <div className="flex flex-col items-center justify-center gap-2 font-monda text-sm xs:items-end">
              <div className="flex items-center gap-2">
                <ButtonBase className="rounded-full px-2 text-end">
                  +44 1273 705050
                </ButtonBase>
                <Phone className="shrink-0" />
              </div>
              <div className="flex items-center gap-2">
                <ButtonBase className="rounded-full px-2 text-end">
                  hello@selectedgeeks.com
                </ButtonBase>
                <AtSign className="shrink-0" />
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2 text-end">
                  Head Office: 4 Gordon Mews, Gordon Close, BN41 1HU, Brighton
                </div>
                <MapPin className="shrink-0" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(1,1fr)] grid-rows-[repeat(1,1fr)] gap-4 sm:grid-cols-[repeat(2,1fr)]">
            <div className="flex items-center font-monda text-xs text-neutral-400">
              Copyright © 2024 Powered by&nbsp;
              <ButtonBase className="rounded-full px-2 font-bold text-white">
                AiScreens
              </ButtonBase>
            </div>
            <div className="flex items-center justify-center font-monda text-xs font-bold xs:justify-end">
              <ButtonBase className="rounded-full px-2">
                Privacy Policy
              </ButtonBase>
              &nbsp;|&nbsp;
              <ButtonBase className="rounded-full px-2">
                Terms of Use
              </ButtonBase>
            </div>
          </div>
        </div>
      </FancyCard>
    </div>
  );
};

export default Footer;
