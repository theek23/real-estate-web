import React, { useState } from "react";
import { Search, Building, DollarSign, Home, Grid, List } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { Separator } from "../../../../components/ui/separator";

export const SearchSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"all" | "rent" | "sale" | "commercial">("all");
  
  const propertyTypes = [
    { id: "house", label: "House" },
    { id: "apartment", label: "Apartment" },
    { id: "condo", label: "Condo" },
    { id: "townhouse", label: "Townhouse" },
    { id: "land", label: "Land" },
    { id: "office", label: "Office" },
  ];

  const priceRanges = [
    { id: "any", label: "Any" },
    { id: "0-100000", label: "$0 - $100,000" },
    { id: "100000-300000", label: "$100,000 - $300,000" },
    { id: "300000-500000", label: "$300,000 - $500,000" },
    { id: "500000-1000000", label: "$500,000 - $1,000,000" },
    { id: "1000000+", label: "$1,000,000+" },
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 text-center">
            Find Your Perfect Property
          </h2>
          <p className="text-slate-600 text-center max-w-2xl">
            Use our advanced search options to find properties that match your exact requirements,
            from location to amenities and everything in between.
          </p>
        </div>

        {/* Search Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={activeTab === "all" ? "default" : "outline"}
            onClick={() => setActiveTab("all")}
            className={`rounded-full px-6 ${
              activeTab === "all" ? "bg-emerald-600 hover:bg-emerald-700" : ""
            }`}
          >
            All Properties
          </Button>
          <Button
            variant={activeTab === "rent" ? "default" : "outline"}
            onClick={() => setActiveTab("rent")}
            className={`rounded-full px-6 ${
              activeTab === "rent" ? "bg-emerald-600 hover:bg-emerald-700" : ""
            }`}
          >
            For Rent
          </Button>
          <Button
            variant={activeTab === "sale" ? "default" : "outline"}
            onClick={() => setActiveTab("sale")}
            className={`rounded-full px-6 ${
              activeTab === "sale" ? "bg-emerald-600 hover:bg-emerald-700" : ""
            }`}
          >
            For Sale
          </Button>
          <Button
            variant={activeTab === "commercial" ? "default" : "outline"}
            onClick={() => setActiveTab("commercial")}
            className={`rounded-full px-6 ${
              activeTab === "commercial" ? "bg-emerald-600 hover:bg-emerald-700" : ""
            }`}
          >
            Commercial
          </Button>
        </div>

        {/* Advanced Search Form */}
        <div className="bg-slate-50 rounded-xl shadow-md p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="City, neighborhood, or address"
                  className="w-full border border-slate-300 rounded-md py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 text-slate-400 h-5 w-5" />
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Property Type
              </label>
              <div className="relative">
                <select className="w-full border border-slate-300 rounded-md py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none bg-white">
                  <option value="">Any property type</option>
                  {propertyTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <Home className="absolute left-3 top-2.5 text-slate-400 h-5 w-5" />
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Price Range
              </label>
              <div className="relative">
                <select className="w-full border border-slate-300 rounded-md py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none bg-white">
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.label}
                    </option>
                  ))}
                </select>
                <DollarSign className="absolute left-3 top-2.5 text-slate-400 h-5 w-5" />
              </div>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Bedrooms
              </label>
              <div className="relative">
                <select className="w-full border border-slate-300 rounded-md py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none bg-white">
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
                <Building className="absolute left-3 top-2.5 text-slate-400 h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Additional Filters */}
          <div className="mt-6">
            <Separator className="mb-6" />
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="rounded-full px-4 py-1.5 border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer">
                Parking
              </Badge>
              <Badge variant="outline" className="rounded-full px-4 py-1.5 border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer">
                Air Conditioning
              </Badge>
              <Badge variant="outline" className="rounded-full px-4 py-1.5 border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer">
                Swimming Pool
              </Badge>
              <Badge variant="outline" className="rounded-full px-4 py-1.5 border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer">
                Garden
              </Badge>
              <Badge variant="outline" className="rounded-full px-4 py-1.5 border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer">
                Balcony
              </Badge>
              <Badge variant="outline" className="rounded-full px-4 py-1.5 border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer">
                Gym
              </Badge>
              <Badge variant="outline" className="rounded-full px-4 py-1.5 border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer">
                Security
              </Badge>
              <Button variant="outline" className="rounded-full px-4 text-slate-700 border-slate-300">
                More Filters
              </Button>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-8 rounded-md flex items-center justify-center gap-2">
              <Search className="h-5 w-5" />
              <span>Search Properties</span>
            </Button>
            
            <div className="flex items-center gap-3">
              <span className="text-slate-600 text-sm">View:</span>
              <Button variant="outline" size="icon" className="rounded-md border-slate-300">
                <Grid className="h-5 w-5 text-slate-700" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-md border-slate-300">
                <List className="h-5 w-5 text-slate-700" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};