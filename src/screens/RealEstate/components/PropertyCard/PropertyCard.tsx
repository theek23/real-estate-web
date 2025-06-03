import React from "react";
import { Heart, MapPin, Maximize2, Bath, Bed } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export interface PropertyCardProps {
  id: number;
  title: string;
  address: string;
  price: number;
  type: "sale" | "rent";
  beds: number;
  baths: number;
  area: number;
  image: string;
  featured?: boolean;
}

export const PropertyCard = ({
  title,
  address,
  price,
  type,
  beds,
  baths,
  area,
  image,
  featured = false,
}: PropertyCardProps): JSX.Element => {
  return (
    <div 
      className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${
        featured ? "ring-2 ring-emerald-500" : ""
      }`}
    >
      {/* Property Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className={`${type === "sale" ? "bg-emerald-500" : "bg-amber-500"} text-white font-medium px-3 py-1`}>
            {type === "sale" ? "For Sale" : "For Rent"}
          </Badge>
          {featured && <Badge className="bg-slate-800 text-white font-medium px-3 py-1">Featured</Badge>}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-3 right-3 text-white hover:text-emerald-500 bg-slate-800/50 hover:bg-white/90 rounded-full"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Property Details */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-800 mb-1 line-clamp-1">{title}</h3>
        <div className="flex items-center text-slate-500 mb-3">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="text-sm line-clamp-1">{address}</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <p className="text-emerald-600 font-bold text-xl">
            ${price.toLocaleString()}
            {type === "rent" && <span className="text-sm font-normal text-slate-500">/month</span>}
          </p>
        </div>
        
        {/* Property Features */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <div className="flex items-center text-slate-600">
            <Bed className="h-4 w-4 mr-1" />
            <span className="text-sm">{beds} Beds</span>
          </div>
          <div className="flex items-center text-slate-600">
            <Bath className="h-4 w-4 mr-1" />
            <span className="text-sm">{baths} Baths</span>
          </div>
          <div className="flex items-center text-slate-600">
            <Maximize2 className="h-4 w-4 mr-1" />
            <span className="text-sm">{area} sq ft</span>
          </div>
        </div>
      </div>
    </div>
  );
};