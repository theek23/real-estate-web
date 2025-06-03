import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const AboutSection = (): JSX.Element => {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "2,500+", label: "Properties Sold" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "20+", label: "Industry Awards" },
  ];

  const benefits = [
    "Expert local market knowledge",
    "Personalized service for every client",
    "Transparent communication throughout the process",
    "Negotiation expertise to get you the best deal",
    "Comprehensive marketing for sellers",
    "Exclusive access to off-market properties",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Real estate team meeting"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 max-w-[250px]">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-emerald-600 font-bold text-2xl">{stat.value}</p>
                    <p className="text-slate-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              About EstateVista
            </h2>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              Founded in 2010, EstateVista has established itself as a premier real estate agency, 
              committed to helping clients find their dream properties and make informed real estate decisions.
            </p>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our team of experienced professionals combines in-depth market knowledge with personalized service 
              to deliver exceptional results. Whether you're buying, selling, or renting, we're dedicated to 
              making your real estate journey smooth and successful.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Why Choose Us?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-slate-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-6">
                Meet Our Team
              </Button>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 font-medium py-2.5 px-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};