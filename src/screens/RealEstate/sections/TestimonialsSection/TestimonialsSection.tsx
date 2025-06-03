import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "../../../../components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

export const TestimonialsSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homebuyer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      text: "EstateVista made finding our dream home an incredible experience. Our agent understood exactly what we were looking for and guided us through every step of the process. We couldn't be happier with our new home!",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Property Seller",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      text: "I was impressed by the professionalism and market knowledge of the EstateVista team. They helped me sell my property above asking price in just two weeks! Their marketing strategy and negotiation skills are exceptional.",
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Real Estate Investor",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4,
      text: "As a real estate investor, I've worked with many agencies, but EstateVista stands out. Their market analysis is thorough, and they consistently find properties with excellent ROI potential. They're my go-to agency for all investment properties.",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-600">
            Don't just take our word for it. Hear from our satisfied clients about their experiences
            working with the EstateVista team.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden relative">
          <div className="flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="md:w-1/3 bg-emerald-600">
              <div className="relative h-full">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  className="w-full h-full object-cover opacity-90 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-700/40 to-emerald-900/80"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="font-bold text-xl">{activeTestimonial.name}</h3>
                  <p className="text-emerald-100">{activeTestimonial.role}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < activeTestimonial.rating ? "text-amber-400" : "text-emerald-200"}`}
                        fill={i < activeTestimonial.rating ? "#F59E0B" : "none"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <Quote className="h-12 w-12 text-emerald-100 mb-6" />
                <p className="text-slate-700 text-lg leading-relaxed italic mb-6">
                  {activeTestimonial.text}
                </p>
              </div>
              
              {/* Navigation Controls */}
              <div className="flex justify-between items-center mt-8">
                <div className="text-slate-500">
                  {activeIndex + 1} of {testimonials.length}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePrev}
                    className="rounded-full border-slate-300 hover:bg-slate-50"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNext}
                    className="rounded-full border-slate-300 hover:bg-slate-50"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 mx-1 rounded-full transition-all ${
                idx === activeIndex ? "w-8 bg-emerald-600" : "w-2.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};