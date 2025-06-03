import React from 'react';
import { Header } from '../RealEstate/components/Header';
import { Footer } from '../RealEstate/components/Footer';
import { FeaturedListingsSection } from '../RealEstate/sections/FeaturedListingsSection';
import { SearchSection } from '../RealEstate/sections/SearchSection';
import { MapSection } from '../RealEstate/sections/MapSection';

export const Properties = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="w-full overflow-hidden">
        <Header />
        <div className="pt-24">
          <SearchSection />
          <FeaturedListingsSection />
          <MapSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};