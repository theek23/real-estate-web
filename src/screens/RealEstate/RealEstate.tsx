import React from "react";
import { HeroSection } from "./sections/HeroSection";
import { SearchSection } from "./sections/SearchSection";
import { FeaturedListingsSection } from "./sections/FeaturedListingsSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { MapSection } from "./sections/MapSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { ContactSection } from "./sections/ContactSection";
import { BlogSection } from "./sections/BlogSection";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const RealEstate = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="w-full overflow-hidden">
        <Header />
        <HeroSection />
        <SearchSection />
        <FeaturedListingsSection />
        <AboutSection />
        <ServicesSection />
        <MapSection />
        <TestimonialsSection />
        <ContactSection />
        <BlogSection />
        <Footer />
      </div>
    </div>
  );
};