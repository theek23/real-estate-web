import React from "react";
import { Home, Building, Key, LineChart, Shield, Search } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const ServicesSection = (): JSX.Element => {
  const services = [
    {
      icon: Home,
      title: "Residential Sales",
      description: "Expert guidance through the entire home selling process, from pricing and marketing to negotiation and closing.",
    },
    {
      icon: Key,
      title: "Property Rentals",
      description: "Comprehensive rental services for landlords and tenants, including tenant screening, property management, and more.",
    },
    {
      icon: Building,
      title: "Commercial Real Estate",
      description: "Specialized services for buying, selling, and leasing commercial properties, with a focus on investment returns.",
    },
    {
      icon: Search,
      title: "Property Finder",
      description: "Personalized property search services to help you find your dream home based on your specific requirements and preferences.",
    },
    {
      icon: LineChart,
      title: "Market Analysis",
      description: "In-depth market research and analysis to help you make informed real estate decisions based on current trends and forecasts.",
    },
    {
      icon: Shield,
      title: "Property Management",
      description: "Comprehensive property management services for landlords, including tenant relations, maintenance, and financial reporting.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-slate-600">
            We offer a wide range of professional real estate services designed to meet all your property needs.
            Our experienced team is ready to assist you at every step of your real estate journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="bg-emerald-50 p-3 rounded-lg w-fit mb-6">
                <service.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 flex-grow">
                {service.description}
              </p>
              <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0 justify-start">
                Learn more
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Find Your Perfect Property?
              </h3>
              <p className="text-emerald-50 mb-6 md:mb-0">
                Contact our expert team today for a personalized consultation. We're here to help you navigate
                the real estate market and find the perfect property for your needs.
              </p>
            </div>
            <div>
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50 font-medium px-8 py-3 text-lg shadow-md">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};