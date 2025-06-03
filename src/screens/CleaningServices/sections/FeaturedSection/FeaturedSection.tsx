import React from "react";
import { Button } from "../../../../components/ui/button";

export const FeaturedSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <img
        className="w-full h-[585px] object-cover"
        alt="Hero image"
        src="/hero-iamge.png"
      />

      <div className="absolute inset-0">
        <div className="flex flex-col items-start gap-10 p-[104px] max-w-[750px]">
          <div className="flex flex-col items-start gap-3">
            <p className="font-['Be_Vietnam_Pro',Helvetica] font-normal text-[#111d15] text-xl leading-[24px]">
              Quality cleaning at a fair price.
            </p>

            <div className="flex flex-col items-start gap-6">
              <h1 className="font-['Be_Vietnam_Pro',Helvetica] font-bold text-[#111c15] text-[52px] leading-[59.8px] max-w-[610px]">
                Specialized, efficient, and thorough cleaning services
              </h1>

              <p className="font-['Be_Vietnam_Pro',Helvetica] text-lg font-normal text-[#666666] leading-[30px] max-w-[543px]">
                We provide Performing cleaning tasks using the least amount of
                time, energy, and money.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-[25px]">
            <Button className="bg-[#36b864] hover:bg-[#2da558] rounded-md px-8 py-[17px] font-['Be_Vietnam_Pro',Helvetica] font-semibold text-white text-base">
              Get&nbsp;&nbsp;Start Now
            </Button>

            <Button
              variant="outline"
              className="rounded-md px-8 py-[17px] border-[#666666] font-['Be_Vietnam_Pro',Helvetica] font-semibold text-[#111c15] text-base"
            >
              View all Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
