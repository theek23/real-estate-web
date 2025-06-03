import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { PropertyCard } from "../../components/PropertyCard";
import type { PropertyCardProps } from "../../components/PropertyCard";

export const FeaturedListingsSection = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState<"all" | "sale" | "rent">("all");

  // Featured properties data
  const properties: PropertyCardProps[] = [
    {
      id: 1,
      title: "Modern Luxury Villa with Ocean View",
      address: "123 Coastal Drive, Malibu, CA 90210",
      price: 2850000,
      type: "sale",
      beds: 5,
      baths: 4.5,
      area: 4200,
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: true,
    },
    {
      id: 2,
      title: "Downtown Penthouse Apartment",
      address: "456 Urban Ave, New York, NY 10001",
      price: 6500,
      type: "rent",
      beds: 3,
      baths: 2,
      area: 1800,
      image: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: true,
    },
    {
      id: 3,
      title: "Charming Suburban Family Home",
      address: "789 Maple Street, Portland, OR 97035",
      price: 850000,
      type: "sale",
      beds: 4,
      baths: 3,
      area: 2600,
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Renovated Historic Townhouse",
      address: "101 Heritage Lane, Boston, MA 02108",
      price: 1250000,
      type: "sale",
      beds: 3,
      baths: 2.5,
      area: 2200,
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Cozy City Center Studio",
      address: "202 Main Street, Chicago, IL 60611",
      price: 1800,
      type: "rent",
      beds: 1,
      baths: 1,
      area: 750,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title: "Lakefront Contemporary Home",
      address: "303 Lakeview Road, Seattle, WA 98101",
      price: 1750000,
      type: "sale",
      beds: 4,
      baths: 3.5,
      area: 3200,
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  // Filter properties based on active filter
  const filteredProperties = properties.filter((property) => {
    if (activeFilter === "all") return true;
    return property.type === activeFilter;
  });

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Featured Properties
            </h2>
            <p className="text-slate-600 max-w-2xl">
              Discover our handpicked selection of premium properties. Each listing is chosen for its exceptional 
              quality, location, and value.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex gap-2">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              onClick={() => setActiveFilter("all")}
              className={activeFilter === "all" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              All
            </Button>
            <Button
              variant={activeFilter === "sale" ? "default" : "outline"}
              onClick={() => setActiveFilter("sale")}
              className={activeFilter === "sale" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              For Sale
            </Button>
            <Button
              variant={activeFilter === "rent" ? "default" : "outline"}
              onClick={() => setActiveFilter("rent")}
              className={activeFilter === "rent" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              For Rent
            </Button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center">
          <Button 
            variant="outline" 
            className="mb-4 sm:mb-0 border-emerald-500 text-emerald-600 hover:bg-emerald-50"
          >
            <span>View All Properties</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-slate-300 hover:bg-slate-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="text-slate-600 px-2">
              <span className="font-medium">1</span> / 4
            </div>
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full border-slate-300 hover:bg-slate-100"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};