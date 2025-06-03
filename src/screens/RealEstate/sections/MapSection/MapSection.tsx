import React, { useState } from "react";
import { MapPin, Search, Home, Building, Warehouse } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";

export const MapSection = (): JSX.Element => {
  const [activeProperty, setActiveProperty] = useState<number | null>(1);
  
  const mapProperties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      price: "$2,850,000",
      type: "sale",
      category: "residential",
      position: { top: "30%", left: "25%" },
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      price: "$6,500/month",
      type: "rent",
      category: "residential",
      position: { top: "40%", left: "55%" },
    },
    {
      id: 3,
      title: "Commercial Office Space",
      price: "$1,200,000",
      type: "sale",
      category: "commercial",
      position: { top: "65%", left: "40%" },
    },
    {
      id: 4,
      title: "Retail Store Location",
      price: "$8,000/month",
      type: "rent",
      category: "commercial",
      position: { top: "50%", left: "70%" },
    },
    {
      id: 5,
      title: "Suburban Family Home",
      price: "$850,000",
      type: "sale",
      category: "residential",
      position: { top: "25%", left: "75%" },
    },
  ];

  const getMarkerColor = (type: string, isActive: boolean) => {
    if (isActive) return "bg-amber-500";
    return type === "sale" ? "bg-emerald-600" : "bg-blue-500";
  };

  const getMarkerIcon = (category: string) => {
    return category === "residential" ? Home : Building;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Find Properties by Location
            </h2>
            <p className="text-slate-600 max-w-2xl">
              Explore our interactive map to discover available properties in your desired locations.
              Click on the markers to view property details.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by location"
                className="border border-slate-300 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent min-w-[240px]"
              />
              <Search className="absolute left-3 top-2.5 text-slate-400 h-5 w-5" />
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Search
            </Button>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative w-full h-[500px] bg-slate-100 rounded-xl overflow-hidden shadow-md">
          {/* Map Image (in a real application, this would be an interactive map) */}
          <img
            src="https://images.pexels.com/photos/2674062/pexels-photo-2674062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="City map"
            className="w-full h-full object-cover opacity-90"
          />
          
          {/* Property Markers */}
          {mapProperties.map((property) => {
            const isActive = activeProperty === property.id;
            const MarkerIcon = getMarkerIcon(property.category);
            
            return (
              <div 
                key={property.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ top: property.position.top, left: property.position.left }}
                onClick={() => setActiveProperty(property.id)}
              >
                <div className={`relative group ${isActive ? "scale-110" : ""}`}>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${getMarkerColor(property.type, isActive)} shadow-lg transition-all duration-300`}>
                    <MarkerIcon className="h-5 w-5 text-white" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-lg shadow-lg p-3 min-w-[200px] transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 pointer-events-none"}`}>
                    <div className="font-medium text-slate-800 mb-1">{property.title}</div>
                    <div className="text-emerald-600 font-bold">{property.price}</div>
                    <Badge className={`mt-2 ${property.type === "sale" ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"}`}>
                      For {property.type === "sale" ? "Sale" : "Rent"}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Map Legend */}
          <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md p-3">
            <div className="text-sm font-medium text-slate-800 mb-2">Map Legend</div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
                <span className="text-xs text-slate-600">For Sale</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-xs text-slate-600">For Rent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-xs text-slate-600">Selected</span>
              </div>
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Button variant="outline" size="icon" className="bg-white rounded-md h-10 w-10 shadow-md border-slate-200">
              <span className="text-xl font-bold">+</span>
            </Button>
            <Button variant="outline" size="icon" className="bg-white rounded-md h-10 w-10 shadow-md border-slate-200">
              <span className="text-xl font-bold">−</span>
            </Button>
          </div>
        </div>

        {/* Map Categories */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Button variant="outline" className="rounded-full px-6 border-slate-300">
            All Areas
          </Button>
          <Button variant="outline" className="rounded-full px-6 border-slate-300">
            <MapPin className="h-4 w-4 mr-2" />
            Downtown
          </Button>
          <Button variant="outline" className="rounded-full px-6 border-slate-300">
            <MapPin className="h-4 w-4 mr-2" />
            Suburbs
          </Button>
          <Button variant="outline" className="rounded-full px-6 border-slate-300">
            <MapPin className="h-4 w-4 mr-2" />
            Waterfront
          </Button>
          <Button variant="outline" className="rounded-full px-6 border-slate-300">
            <MapPin className="h-4 w-4 mr-2" />
            Historic District
          </Button>
          <Button variant="outline" className="rounded-full px-6 border-slate-300">
            <Warehouse className="h-4 w-4 mr-2" />
            Commercial Areas
          </Button>
        </div>
      </div>
    </section>
  );
};