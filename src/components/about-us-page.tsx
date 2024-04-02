import type { FC } from "react";
import Image from "next/image";
import image from "/public/about-us.png";
import { Facebook, Instagram, Twitter, Youtube } from "./icons";

const AboutUsPage: FC = () => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="flex flex-col justify-between">
        <div className="text-base">
          <p>
            At <span className="font-bold">AiScreens</span>, we&#39;re not just
            a company; we&#39;re a team of passionate individuals dedicated to
            transforming the way brands connect with their audiences. With a
            focus on innovation and creativity, we&#39;re redefining the
            possibilities of screen marketing.
          </p>
          <p>
            Our goal is simple: to provide businesses with the tools and
            technology they need to stand out in today&#39;s competitive
            landscape. What truly drives us is our commitment to our
            clients&#39; success. We believe in building lasting partnerships
            and going above and beyond to ensure that every campaign achieves
            its goals. Join us as we continue to push the boundaries of
            what&#39;s possible in screen marketing.
          </p>
        </div>
        <div className="mx-auto my-4 flex gap-2 text-white lg:m-0">
          <Instagram />
          <Twitter />
          <Facebook />
          <Youtube />
        </div>
      </div>
      <Image
        src={image}
        alt="About Us"
        className="mx-auto mt-auto translate-y-4"
      />
    </div>
  );
};

export default AboutUsPage;
