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
              <div>Cloud Control Panel</div>
              <div>Notice Board and Media Editor</div>
              <div>Media Player</div>
              <div>Tailored App Integration</div>
              <div>Real-Time Web Page Streaming</div>
              <div>Scheduling Innovation</div>
              <div>Customised Screen Layouts</div>
            </div>
            <div className="flex flex-col gap-4 font-monda text-sm">
              <div className="font-bold">Follow Us On Social Media</div>
              <div className="flex justify-center gap-4 xs:justify-normal">
                <Facebook />
                <Twitter />
                <Youtube />
                <Linkedin />
                <Instagram />
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
                <div className="text-end">+44 1273 705050</div>
                <Phone className="shrink-0" />
              </div>
              <div className="flex items-center gap-2">
                <div className="text-end">hello@selectedgeeks.com</div>
                <AtSign className="shrink-0" />
              </div>
              <div className="flex items-center gap-2">
                <div className="text-end">
                  Head Office: 4 Gordon Mews, Gordon Close, BN41 1HU, Brighton
                </div>
                <MapPin className="shrink-0" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(1,1fr)] grid-rows-[repeat(1,1fr)] gap-4 sm:grid-cols-[repeat(2,1fr)]">
            <div className="font-monda text-xs text-neutral-400">
              Copyright © 2024 Powered by{" "}
              <span className="font-bold text-white">AiScreens</span>
            </div>
            <div className="flex justify-center font-monda text-xs font-bold xs:justify-end">
              Privacy Policy | Terms of Use
            </div>
          </div>
        </div>
      </FancyCard>
    </div>
  );
};

export default Footer;
