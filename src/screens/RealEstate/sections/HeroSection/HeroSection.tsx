import React from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[800px]">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          alt="Modern luxury home exterior"
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Find Your Dream Home Today
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
            Discover the perfect property with our extensive listings of homes, apartments,
            and commercial spaces across prime locations.
          </p>

          {/* Quick Search Form */}
          <div className="bg-white p-4 rounded-lg shadow-lg mb-8 max-w-xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <MapPin className="absolute left-3 top-3 text-slate-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Enter location, zip code or address"
                  className="w-full border border-slate-300 rounded py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded flex items-center gap-2">
                <Search className="h-5 w-5" />
                <span>Search</span>
              </Button>
            </div>
          </div>

          {/* Property Stats */}
          <div className="flex flex-wrap gap-8">
            <div className="text-center">
              <p className="text-emerald-500 font-bold text-3xl">2,500+</p>
              <p className="text-slate-200 text-sm">Property Listings</p>
            </div>
            <div className="text-center">
              <p className="text-emerald-500 font-bold text-3xl">1,800+</p>
              <p className="text-slate-200 text-sm">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-emerald-500 font-bold text-3xl">200+</p>
              <p className="text-slate-200 text-sm">Cities Covered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG Overlay */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L80,112C160,96,320,64,480,64C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};