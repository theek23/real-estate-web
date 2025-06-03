import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const LayoutSection = (): JSX.Element => {
  // Service cards data
  const serviceCards = [
    {
      id: 1,
      image: "/image-4.png",
      title: "Office Cleaning",
      description:
        "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
      buttonVariant: "outline" as const,
    },
    {
      id: 2,
      image: "/image-5.png",
      title: "Spring Cleaning",
      description:
        "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
      buttonVariant: "default" as const,
    },
    {
      id: 3,
      image: "/image-6.png",
      title: "House Cleaning",
      description:
        "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
      buttonVariant: "outline" as const,
    },
  ];

  // Team members data
  const teamMembers = [
    {
      id: 1,
      image: "/image-9.png",
      name: "Erick Reynolds",
      description:
        "He is an expert cleaning staff member who provides thorough cleaning with precision,",
      highlighted: false,
    },
    {
      id: 2,
      image: "/image-10.png",
      name: "Erick Reynolds",
      description:
        "He is an expert cleaning staff member who provides thorough cleaning with precision,",
      highlighted: true,
    },
    {
      id: 3,
      image: "/image-11.png",
      name: "Erick Reynolds",
      description:
        "He is an expert cleaning staff member who provides thorough cleaning with precision,",
      highlighted: false,
    },
  ];

  // Company benefits data
  const benefits = [
    { id: 1, text: "Vetted professionals" },
    { id: 2, text: "Next day availability" },
    { id: 3, text: "Standard cleaning tasks" },
    { id: 4, text: "Affordable Prices" },
    { id: 5, text: "Best Quality" },
    { id: 6, text: "Affordable Prices" },
  ];

  return (
    <section className="flex flex-col w-full">
      {/* Services Section */}
      <div className="flex flex-col items-end gap-10 pt-[150px] pb-[75px] px-[135px]">
        <div className="flex w-full max-w-[1170px] items-start justify-between">
          <h2 className="w-full max-w-[536px] [font-family:'Be_Vietnam_Pro',Helvetica] font-semibold text-[#111d15] text-[44px] leading-[52.8px]">
            We Always Provide The Best Service
          </h2>

          <div className="flex flex-col items-start gap-3">
            <h3 className="[font-family:'Be_Vietnam_Pro',Helvetica] font-semibold text-[#111d15] text-xl">
              Services
            </h3>

            <p className="max-w-[433px] [font-family:'Be_Vietnam_Pro',Helvetica] font-normal text-[#666666] text-base leading-6">
              While we can customize your cleaning plan to suit your needs, most
              clients schedule regular cleaning services:
            </p>
          </div>
        </div>

        <Separator className="w-full max-w-[1170px]" />

        <div className="relative flex items-start gap-[30px]">
          {serviceCards.map((service) => (
            <Card
              key={service.id}
              className="w-[370px] border-none shadow-none"
            >
              <CardContent className="flex flex-col items-start gap-4 p-0 pb-[30px]">
                <img
                  className="w-full h-[262px] object-cover"
                  alt={service.title}
                  src={service.image}
                />

                <div className="flex flex-col items-start gap-6">
                  <div className="flex flex-col items-start gap-4">
                    <h4 className="[font-family:'Be_Vietnam_Pro',Helvetica] font-semibold text-[#111c15] text-2xl leading-[28.8px]">
                      {service.title}
                    </h4>

                    <p className="w-full max-w-[370px] [font-family:'Be_Vietnam_Pro',Helvetica] font-normal text-[#666666] text-base leading-6">
                      {service.description}
                    </p>
                  </div>

                  <Button
                    variant={service.buttonVariant}
                    className={`flex items-center gap-2.5 ${service.buttonVariant === "default" ? "bg-[#36b864] hover:bg-[#2ea058]" : "border-[#666666]"}`}
                  >
                    <span
                      className={`[font-family:'Be_Vietnam_Pro',Helvetica] font-normal text-base ${service.buttonVariant === "default" ? "text-white" : "text-[#111c15]"}`}
                    >
                      Book Now
                    </span>
                    <img className="w-5 h-5" alt="Arrow" src="/arrow-1.svg" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex items-center justify-center absolute top-[106px] right-0">
            <Button className="w-[52px] h-[52px] p-0 rounded-full bg-[#36b864] hover:bg-[#2ea058]">
              <img className="w-10 h-10" alt="Arrow" src="/arrow.svg" />
            </Button>
          </div>
        </div>
      </div>

      {/* Affordable Solutions Section */}
      <div className="flex w-full items-center justify-between px-[135px] py-[75px]">
        <div className="flex flex-col items-start gap-[52px]">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-6">
              <p className="[font-family:'Lato',Helvetica] font-normal text-[#111c15] text-base text-center leading-[19.2px]">
                Affordable cleaning solutions
              </p>

              <h2 className="max-w-[527px] [font-family:'Outfit',Helvetica] font-semibold text-[#111c15] text-[44px] leading-[52.8px]">
                High-Quality and Friendly
                <br />
                Services at Fair Prices
              </h2>
            </div>

            <p className="max-w-[516px] [font-family:'Lato',Helvetica] font-normal text-[#666666] text-xl leading-[30px]">
              We provide comprehensive cleaning services tailored to your needs.
              From residential cleaning&nbsp;&nbsp;services
            </p>
          </div>

          <Button className="px-9 py-4 bg-[#36b864] hover:bg-[#2ea058] rounded-md">
            <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base">
              Get a quote
            </span>
          </Button>
        </div>

        <div className="relative w-[478px] h-[421px]">
          <div className="relative w-[488px] h-[431px] -left-2.5">
            <img
              className="absolute w-[378px] h-[379px] top-0 left-[110px] object-cover"
              alt="Cleaning service"
              src="/image-7.png"
            />

            <img
              className="absolute w-[251px] h-[285px] top-[146px] left-0"
              alt="Cleaning service"
              src="/image-8.png"
            />
          </div>
        </div>
      </div>

      {/* Expert Team Section */}
      <div className="flex flex-col items-start gap-10 px-[135px] py-[75px]">
        <div className="flex w-full max-w-[1170px] items-start justify-between">
          <h2 className="max-w-[610px] [font-family:'Be_Vietnam_Pro',Helvetica] font-semibold text-[#111d15] text-[44px] leading-[52.8px]">
            Effective Cleaning Requires an Expert Cleaning Team
          </h2>

          <div className="flex flex-col items-start gap-3">
            <h3 className="[font-family:'Be_Vietnam_Pro',Helvetica] font-semibold text-[#111d15] text-xl">
              Expert Team
            </h3>

            <p className="max-w-[448px] [font-family:'Be_Vietnam_Pro',Helvetica] font-normal text-[#666666] text-base leading-6">
              We have professional expert cleaning staff ensuring top-notch
              cleanliness and hygiene for your space.
            </p>
          </div>
        </div>

        <Separator className="w-full max-w-[1170px]" />

        <div className="flex items-end gap-[30px]">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className={`w-[370px] shadow-none ${member.highlighted ? "border border-solid border-[#83a68f] rounded-[20px]" : "border-none"}`}
            >
              <CardContent className="flex flex-col items-start gap-6 p-0 pb-5">
                <img
                  className="w-full h-[300px]"
                  alt={member.name}
                  src={member.image}
                />

                <div className="flex flex-col items-start gap-5 px-5">
                  <div className="flex flex-col items-start gap-4">
                    <h4 className="[font-family:'Be_Vietnam_Pro',Helvetica] font-semibold text-[#111c15] text-2xl leading-[28.8px]">
                      {member.name}
                    </h4>

                    <div className="flex items-start gap-[2.67px]">
                      {[...Array(5)].map((_, index) => (
                        <img
                          key={index}
                          className="w-[18px] h-4"
                          alt="Rating star"
                          src="/frame.svg"
                        />
                      ))}
                    </div>

                    <p className="max-w-[299px] [font-family:'Be_Vietnam_Pro',Helvetica] font-normal text-[#666666] text-base leading-6">
                      {member.description}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="relative w-8 h-8">
                      <img
                        className="absolute w-[9px] h-4 top-2 left-[11px]"
                        alt="Social media"
                        src="/vector-6.svg"
                      />
                    </div>
                    <div className="relative w-8 h-8">
                      <img
                        className="absolute w-4 h-4 top-2 left-[9px]"
                        alt="Social media"
                        src="/vector-4.svg"
                      />
                    </div>
                    <div className="relative w-8 h-8">
                      <img
                        className="absolute w-[17px] h-[17px] top-2 left-2"
                        alt="Instagram"
                        src="/instagram.svg"
                      />
                    </div>
                    <div className="relative w-8 h-8">
                      <div
                        className={`relative w-[18px] h-[17px] top-2 left-2 bg-[url(/group${member.id === 1 ? "" : member.id === 2 ? "-1" : "-2"}.png)] bg-[100%_100%]`}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <div className="flex items-center gap-[110px] px-[135px] py-[75px]">
        <div className="relative w-[535px] h-[442px]">
          <div className="relative w-[545px] h-[452px]">
            <img
              className="absolute w-[366px] h-[394px] top-0 left-0 object-cover"
              alt="Cleaning service"
              src="/image-12.png"
            />

            <img
              className="absolute w-[251px] h-[285px] top-[167px] left-[294px] object-cover"
              alt="Cleaning service"
              src="/image-13.png"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-12">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-10">
              <div className="flex flex-col items-start gap-4">
                <h2 className="[font-family:'Be_Vietnam_Pro',Helvetica] font-semibold text-[44px] leading-[52.8px]">
                  <span className="text-[#111c15]">
                    Welcome To Our
                    <br />
                  </span>
                  <span className="text-[#36b864]">Pro-cleaning</span>
                  <span className="text-[#111c15]"> Company!</span>
                </h2>

                <p className="[font-family:'Be_Vietnam_Pro',Helvetica] font-normal text-[#666666] text-base leading-[25.6px]">
                  We make your space shine! Professional and reliable cleaning
                  service company providing top-notch solutions for homes and
                  businesses. Satisfaction guaranteed!&#34;
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
              {benefits.map((benefit, index) => (
                <Badge
                  key={benefit.id}
                  variant="secondary"
                  className="flex items-center gap-2 p-2.5 bg-[#f5f4f4] rounded justify-start h-auto"
                >
                  <div className="relative w-4 h-4 bg-[#36b864] rounded-lg">
                    <img
                      className="absolute w-2 h-1.5 top-[5px] left-1"
                      alt="Checkmark"
                      src="/vector-5.svg"
                    />
                  </div>
                  <span className="[font-family:'Lato',Helvetica] font-semibold text-[#111d15] text-base leading-[19.2px]">
                    {benefit.text}
                  </span>
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-6">
            <Button className="px-8 py-3 bg-[#36b864] hover:bg-[#2ea058] rounded-md">
              <span className="[font-family:'Lato',Helvetica] font-medium text-white text-xl">
                Book Now
              </span>
            </Button>

            <Button
              variant="outline"
              className="px-8 py-3 bg-white border-[#666666] rounded-md"
            >
              <span className="[font-family:'Lato',Helvetica] font-medium text-[#111d15] text-xl">
                Know More
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
