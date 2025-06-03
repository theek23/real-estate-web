import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RealEstate } from './screens/RealEstate';
import { Properties } from './screens/Properties';
import { About } from './screens/About';
import { Contact } from './screens/Contact';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<RealEstate />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;