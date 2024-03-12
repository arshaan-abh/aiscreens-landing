import type { FC } from "react";
import MapComponent from "./map";

const TestimonialPage: FC = () => {
  return (
    <div className="grid-cols-[repeat(16,1fr)] grid-rows-5">
      <MapComponent className="h-full w-full" />
    </div>
  );
};

export default TestimonialPage;
