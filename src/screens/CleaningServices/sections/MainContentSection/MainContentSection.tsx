import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

// Define pricing plan data for easier mapping
const pricingPlans = [
  {
    name: "BASIC PACKAGE",
    price: "59.00",
    features: [
      "Dusting of all surfaces",
      "Sweeping and mopping floors",
      "Vacuuming carpets and rugs",
      "Cleaning of kitchen surfaces",
      "Cleaning of bathroom surfaces",
      "Emptying trash bins",
    ],
    featured: false,
  },
  {
    name: "ENTERPRISE PACKAGE",
    price: "69.00",
    features: [
      "All services in the Basic Plan",
      "Detailed dusting",
      "Wiping down of kitchen appt",
      "Cleaning inside the microwave",
      "Changing bed linens",
      "Spot cleaning walls and doors",
    ],
    featured: true,
  },
  {
    name: "PREMIUM PACKAGE",
    price: "99.00",
    features: [
      "All services in the Clean Plan",
      "Deep cleaning of kitchen appt",
      "baseboards, door frames, & vents",
      "Organization of closets pantries",
      "Carpet, upholstery spot cleaning",
      "Detailed bathroom cleaning",
    ],
    featured: false,
  },
];

// Define testimonial data
const testimonial = {
  name: "Robert Fox",
  occupation: "Business Man",
  rating: 5,
  comment:
    "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
  image: "/image.png",
};

// Define blog posts data
const blogPosts = [
  {
    image: "/image-1.png",
    author: "JOHN HELTON",
    date: "JAN 6, 2025",
    title: "Eco-Friendly Cleaning: How We Keep Your Home Green",
    excerpt:
      "Learn about our commitment to eco-friendly practices. We share the eco-conscious products...",
    featured: false,
  },
  {
    image: "/image-2.png",
    author: "JOHN HELTON",
    date: "JAN 6, 2025",
    title: "How to Maintain a Clean Home Between Professional Visits",
    excerpt:
      "Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips...",
    featured: true,
  },
  {
    image: "/image-3.png",
    author: "JOHN HELTON",
    date: "JAN 6, 2025",
    title: "The Benefits of Regular Professional Cleaning",
    excerpt:
      "Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air...",
    featured: false,
  },
];

// Define contact info data
const contactInfo = [
  {
    title: "Call Us",
    value: "+(08) 255 201 888",
    icon: "/vector-3.svg",
  },
  {
    title: "Email Now",
    value: "Hello@procleaning.com",
    icon: "/vector-2.svg",
  },
  {
    title: "Address",
    value: "7510, Brand Tower, New York, USA",
    icon: "/vector.svg",
  },
];

// Define footer links
const footerLinks = {
  company: ["About Us", "Services", "Our Team"],
  knowMore: ["Support", "Privacy Policy", "Terms & conditions"],
};

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full">
      {/* Pricing Section */}
      <div className="relative w-full pb-[75px]">
        <img
          className="w-full h-[693px] object-cover"
          alt="Background"
          src="/background.svg"
        />

        <div className="flex flex-col items-center gap-10 mt-[-600px] relative z-10">
          <div className="flex flex-col items-center gap-9">
            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-col items-center justify-center gap-3">
                <p className="font-medium text-white text-xl leading-6 tracking-normal">
                  Our Pricing
                </p>
                <h2 className="w-[551px] font-semibold text-white text-[44px] text-center leading-[52.8px]">
                  Choose From Our Lowest Plans and Prices
                </h2>
              </div>
            </div>

            <div className="bg-[#f4f5f8] rounded-[200px] p-1.5">
              <ToggleGroup
                type="single"
                defaultValue="monthly"
                className="flex items-center justify-center gap-4"
              >
                <ToggleGroupItem
                  value="monthly"
                  className="px-[22px] py-[7px] bg-[#36b864] rounded-[200px] text-white font-medium text-xl shadow-[0px_0px_10px_#0000001a]"
                >
                  Monthly
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="yearly"
                  className="px-[22px] py-[7px] bg-white rounded-[200px] text-[#111c15] font-medium text-xl shadow-[0px_0px_5px_#0000001a]"
                >
                  Yearly
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          <div className="flex items-start gap-[30px]">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`px-[35px] py-[30px] rounded-[20px] ${plan.featured ? "shadow-[0px_5px_20px_#0000000d]" : ""}`}
              >
                <CardContent className="p-0 flex flex-col items-center gap-9">
                  <div className="flex flex-col items-center gap-9">
                    <div className="flex flex-col items-center gap-6">
                      <p className="font-medium text-[#111c15] text-xl leading-6">
                        {plan.name}
                      </p>
                      <div className="flex items-center justify-center px-10 py-5 bg-[#36b864] rounded-[10px] w-full">
                        <div className="w-[200px] font-normal text-white text-base">
                          <span className="font-normal text-white text-base">
                            ${" "}
                          </span>
                          <span className="font-bold text-[32px] leading-[38.4px]">
                            {plan.price}/
                          </span>
                          <span className="font-normal text-white text-base">
                            Monthly
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[300px] font-normal text-[#666666] text-base leading-[48px]">
                      {plan.features.map((feature, idx) => (
                        <React.Fragment key={idx}>
                          {feature}
                          {idx < plan.features.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-0 mt-9">
                  <Button
                    variant={plan.featured ? "default" : "outline"}
                    className={`w-full py-5 rounded-md ${plan.featured ? "bg-[#36b864] text-white font-semibold" : "border-[#666666] text-[#111c15] font-normal"}`}
                  >
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="flex w-full items-center justify-between px-[135px] py-[75px]">
        <div className="flex flex-col items-start gap-9">
          <div className="flex flex-col items-start gap-6">
            <h2 className="w-[500px] font-semibold text-[#111c15] text-[44px] leading-[52.8px]">
              Feedback About Their Experience With Us
            </h2>
            <p className="w-[419px] font-normal text-[#666666] text-base leading-[25.6px]">
              Read testimonials from our satisfied clients. See how our cleaning
              services have made a difference in their lives and homes
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Button
              variant="outline"
              className="p-4 rounded-[9.47px] border-[#36b864] rotate-180"
            >
              <div className="relative w-6 h-6 rotate-90">
                <div className="relative w-4 h-5 top-1 left-[5px]">
                  <img
                    className="absolute w-[19px] h-0.5 top-2.5 -left-0.5 rotate-[-270deg]"
                    alt="Line"
                    src="/line-6.svg"
                  />
                  <img
                    className="absolute w-[9px] h-[9px] top-px left-[7px] rotate-[-270deg]"
                    alt="Line"
                    src="/line-7-1.svg"
                  />
                  <img
                    className="absolute w-[9px] h-[9px] top-0 left-0 rotate-[-270deg]"
                    alt="Line"
                    src="/line-8.svg"
                  />
                </div>
              </div>
            </Button>
            <Button className="p-4 rounded-[9.47px] bg-[#36b864]">
              <div className="relative w-6 h-6 rotate-90">
                <div className="relative w-4 h-5 top-1 left-[3px]">
                  <img
                    className="absolute w-[19px] h-0.5 top-2.5 -left-px -rotate-90"
                    alt="Line"
                    src="/line-6-1.svg"
                  />
                  <img
                    className="absolute w-[9px] h-[9px] top-px left-0 -rotate-90"
                    alt="Line"
                    src="/line-7.svg"
                  />
                  <img
                    className="absolute w-[9px] h-[9px] top-0 left-[7px] -rotate-90"
                    alt="Line"
                    src="/line-8-1.svg"
                  />
                </div>
              </div>
            </Button>
          </div>
        </div>

        <Card className="p-5 bg-white rounded-[20px] border-t-[10px] border-r-[10px] border-[#36b864] shadow-[0px_4px_10px_#0000000d] flex items-center gap-6">
          <CardContent className="p-0 flex items-center gap-6">
            <img
              className="w-[170px] h-[244px]"
              alt="Testimonial person"
              src={testimonial.image}
            />
            <div className="flex flex-col items-start gap-4 relative">
              <img
                className="absolute w-[78px] h-[67px] top-0 left-[247px]"
                alt="Quotation"
                src="/quotation.svg"
              />
              <div className="flex flex-col items-start gap-3">
                <div className="flex flex-col items-start gap-3">
                  <h3 className="font-medium text-xl leading-5 text-[#111c15]">
                    {testimonial.name}
                  </h3>
                  <p className="font-normal text-[#666666] text-base leading-4">
                    {testimonial.occupation}
                  </p>
                </div>
                <div className="flex items-start gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <img
                      key={i}
                      className="w-6 h-6"
                      alt="Star"
                      src="/star.svg"
                    />
                  ))}
                </div>
              </div>
              <p className="w-[366px] font-normal text-[#666666] text-base tracking-[0.16px] leading-6">
                {testimonial.comment}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Blog Section */}
      <div className="flex flex-col items-start gap-10 px-[135px] py-[75px]">
        <div className="flex w-full items-center justify-between">
          <h2 className="w-[570px] font-semibold text-[#111c15] text-[44px] leading-[52.8px]">
            Stay Updated with Our <br />
            Tips &amp; Service News!
          </h2>
          <div className="flex flex-col items-start justify-center gap-3">
            <h3 className="font-semibold text-[#111d15] text-xl">Our Blog</h3>
            <p className="w-[474px] font-normal text-[#666666] text-base leading-6">
              Stay informed with our latest cleaning tips, service updates,
              expert advice on maintaining an immaculate home
            </p>
          </div>
        </div>

        <img
          className="w-full h-px object-cover"
          alt="Divider"
          src="/line-.svg"
        />

        <div className="flex items-start gap-[30px]">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className={`flex flex-col items-center gap-9 ${post.featured ? "border border-solid border-[#83a790] rounded-[30px] pb-5" : ""}`}
            >
              <CardContent className="p-0">
                <img
                  className="w-[370px] h-[270px] object-cover"
                  alt={post.title}
                  src={post.image}
                />
                <div className="flex flex-col items-center justify-center gap-6 mt-9">
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-col items-center gap-3">
                      <p className="font-normal text-[#666666] text-sm">
                        {post.author}&nbsp;&nbsp;{post.date}
                      </p>
                      <h3 className="w-[318px] font-bold text-[#111d15] text-xl text-center leading-6">
                        {post.title}
                      </h3>
                    </div>
                    <p className="w-80 font-light text-[#666666] text-base text-center leading-6">
                      {post.excerpt}
                    </p>
                  </div>

                  {post.featured ? (
                    <Button className="w-full px-10 py-5 bg-[#36b864] rounded-[15px] font-semibold text-white text-base">
                      Read More
                    </Button>
                  ) : (
                    <>
                      <img
                        className="w-80 h-px object-cover"
                        alt="Divider"
                        src="/line--4.svg"
                      />
                      <p className="font-medium text-[#666666] text-base leading-[33px] underline">
                        Read More
                      </p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex w-full items-end justify-between px-[135px] py-[75px]">
        <div className="flex flex-col items-start gap-10">
          <h2 className="font-medium text-[#111c15] text-[40px]">Find us</h2>

          <div className="flex flex-col items-start gap-[30px]">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="flex w-[600px] items-start gap-3 p-5 bg-[#fbfbfb] rounded-xl border border-solid border-[#f3f3f3]"
              >
                <CardContent className="p-0 flex items-start gap-3">
                  <div className="relative flex items-center justify-center shadow-[0px_0px_10px_#0000000d]">
                    <div className="w-[54px] h-[54px] bg-[#36b864] rounded-[27px]" />
                    <img
                      className="absolute w-6 h-6 top-[15px] left-[15px]"
                      alt={info.title}
                      src={info.icon}
                    />
                  </div>
                  <div className="flex flex-col w-full items-start gap-2">
                    <h3 className="font-semibold text-[#111c15] text-xl tracking-[0.60px]">
                      {info.title}
                    </h3>
                    <p className="font-normal text-[#666666] text-base leading-[19.2px]">
                      {info.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="font-normal text-[#111c15] text-base leading-[19.2px]">
                Contact info
              </p>
              <h2 className="font-semibold text-[#111c15] text-4xl leading-[43.2px]">
                Keep In Touch
              </h2>
            </div>
            <p className="w-[500px] font-normal text-[#666666] text-base tracking-[-0.16px] leading-6">
              We prioritize responding to your inquiries promptly to ensure you
              <br />
              receive the assistance you need in a timely manner
            </p>
          </div>

          <div className="flex flex-col items-start gap-[30px] w-full">
            <div className="flex flex-col items-start gap-[30px] w-full">
              <input
                className="w-full pl-5 pr-[306px] py-[18px] bg-white rounded border border-solid border-[#f3f3f3] shadow-[0px_4px_5px_#00000008] text-[#666666] text-base"
                placeholder="Name"
              />
              <input
                className="w-full pl-5 pr-[306px] py-[18px] bg-white rounded border border-solid border-[#f3f3f3] text-[#666666] text-base"
                placeholder="Email"
              />
              <textarea
                className="w-full pl-5 pr-[294px] pt-4 pb-[60px] bg-white rounded border border-solid border-[#f3f3f3] text-[#666666] text-base"
                placeholder="Message"
              />
            </div>
            <Button className="px-6 py-3 bg-[#36b864] rounded-md font-medium text-white text-base">
              Sent Massage
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="flex flex-col items-center justify-center gap-16 pt-[100px] pb-5 px-[135px] bg-[#111c15]">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-start gap-6">
            <div className="relative w-[203.82px] h-[50.28px]">
              <img
                className="absolute w-[29px] h-12 top-0.5 left-0"
                alt="Logo icon"
                src="/vector-1.svg"
              />
              <div className="absolute w-[170px] h-[50px] top-0 left-[38px]">
                <div className="absolute w-[162px] top-0 left-0 font-normal text-[25px]">
                  <span className="font-bold text-[#36b864]">Pro</span>
                  <span className="font-bold text-white">Cleaning</span>
                </div>
                <div className="absolute w-[166px] top-[35px] left-0 font-bold text-white text-xs">
                  Cleaning Services company
                </div>
              </div>
            </div>
            <p className="w-[356px] font-light text-white text-base leading-[25.6px]">
              Stay updated with our latest cleaning tips, service updates, and
              helpful articles on maintaining a spotless home.
            </p>
          </div>

          <div className="flex flex-col items-start gap-9">
            <h3 className="font-bold text-white text-xl">Company</h3>
            <div className="flex flex-col items-start gap-6">
              {footerLinks.company.map((link, index) => (
                <a
                  key={index}
                  className="font-medium text-white text-base"
                  href="#"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-9">
            <h3 className="font-bold text-white text-xl">Know More</h3>
            <div className="flex flex-col items-start gap-6">
              {footerLinks.knowMore.map((link, index) => (
                <a
                  key={index}
                  className="font-medium text-white text-base"
                  href="#"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-[26px]">
            <h3 className="font-bold text-white text-xl">Newsletter</h3>
            <div className="flex w-[291px] items-center gap-2.5 px-4 py-2.5 rounded-md border border-solid border-[#808080]">
              <input
                className="w-full bg-transparent font-normal text-[#9e9e9e] text-base"
                placeholder="Email Goes here"
              />
            </div>
            <Button className="px-7 py-4 bg-[#36b864] rounded-md font-bold text-white text-base">
              Send
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <img
            className="w-full h-px mt-[-1.00px] object-cover"
            alt="Divider"
            src="/line-.svg"
          />
          <div className="flex items-start justify-between w-full">
            <p className="font-normal text-white text-base text-center leading-[19.2px]">
              2024 &quot;Procleaning&quot; All Rights Received
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
