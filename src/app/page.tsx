import type { FC } from "react";
import { Logo } from "@src/components/icons";

const Home: FC = () => {
  return (
    <>
      <div className="flex w-main max-w-full items-center justify-between p-6">
        <Logo />
        <div className="flex gap-8 font-rubik text-sm">
          <div>Home</div>
          <div>Features</div>
          <div>Services</div>
        </div>
        <button className="rounded-full bg-cyan-500 px-4 py-2 text-xs font-medium">
          View plans
        </button>
      </div>
      <div className="grid aspect-video w-main max-w-full grid-cols-8 gap-4 p-6">
        <div className="col-span-2 row-span-7 bg-white">s</div>
        <div className="col-span-6 row-span-7 bg-white">s</div>
        <div className="col-span-2 row-span-4 bg-white">s</div>
        <div className="col-span-6 row-span-9 bg-white">s</div>
        <div className="col-span-1 row-span-5 bg-white">s</div>
        <div className="col-span-1 row-span-5 bg-white">s</div>
      </div>
    </>
  );
};

export default Home;
