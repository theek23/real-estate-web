import React from "react";
import { FeaturedSection } from "./sections/FeaturedSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { LayoutSection } from "./sections/LayoutSection/LayoutSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";

export const CleaningServices = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1440px] overflow-hidden">
        <HeaderSection />
        <FeaturedSection />
        <LayoutSection />
        <MainContentSection />
      </div>
    </div>
  );
};
