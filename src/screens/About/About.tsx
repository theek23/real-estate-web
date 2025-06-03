import React from 'react';
import { Header } from '../RealEstate/components/Header';
import { Footer } from '../RealEstate/components/Footer';
import { AboutSection } from '../RealEstate/sections/AboutSection';
import { ServicesSection } from '../RealEstate/sections/ServicesSection';
import { TestimonialsSection } from '../RealEstate/sections/TestimonialsSection';

export const About = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="w-full overflow-hidden">
        <Header />
        <div className="pt-24">
          <AboutSection />
          <ServicesSection />
          <TestimonialsSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};