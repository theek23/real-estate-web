import React from 'react';
import { Header } from '../RealEstate/components/Header';
import { Footer } from '../RealEstate/components/Footer';
import { ContactSection } from '../RealEstate/sections/ContactSection';
import { MapSection } from '../RealEstate/sections/MapSection';

export const Contact = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="w-full overflow-hidden">
        <Header />
        <div className="pt-24">
          <ContactSection />
          <MapSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};