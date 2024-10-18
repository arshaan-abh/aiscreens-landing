import type { FC } from "react";
import { MapComponent } from "./map-component";
import {
  Facebook,
  Instagram,
  Letter,
  MapPoint,
  PhoneCall,
  Twitter,
  Youtube,
} from "./icons";

const ContactUsPage: FC = () => {
  return (
    <div className="mt-4 flex flex-col gap-4 text-white">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="col-span-1 flex flex-col justify-between text-base">
          <div className="flex items-center gap-2">
            <MapPoint className="shrink-0" />
            <p>4 Gordon Mews, Gordon Close, BN41 1HU, Brighton</p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall className="shrink-0" />
            <p>+44 1273 705050</p>
          </div>
          <div className="flex items-center gap-2">
            <Letter className="shrink-0" />
            <p>hello@selectedscreens.com</p>
          </div>
        </div>
        <div className="col-span-1">
          <MapComponent className="h-full min-h-[8rem] w-full rounded-2xl" />
        </div>
      </div>
      <div className="h-px bg-white/50" />
      <div className="grid grow grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="col-span-1 flex flex-col justify-between text-base">
          <p>
            Have inquiries or feedback? Our team at Selected Screens is here to
            assist you. Feel free to get in touch with us for any questions or
            assistance you may require. We strive to provide excellent service
            and support to ensure your satisfaction. Contact us today.
          </p>
          <div className="flex gap-2">
            <Instagram />
            <Twitter />
            <Facebook />
            <Youtube />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <input
            className="rounded-2xl border border-white bg-black/10 px-4 py-2 text-sm placeholder:text-white"
            placeholder="Name"
          />
          <input
            className="rounded-2xl border border-white bg-black/10 px-4 py-2 text-sm placeholder:text-white"
            placeholder="Email"
          />
          <input
            className="rounded-2xl border border-white bg-black/10 px-4 py-2 text-sm placeholder:text-white"
            placeholder="Phone Number"
          />
          <textarea
            className="grow resize-none rounded-2xl border border-white bg-black/10 px-4 py-2 text-sm placeholder:text-white"
            placeholder="Message"
          />
          <button className="rounded-2xl bg-white px-4 py-2 text-center text-sm font-bold text-secondary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
