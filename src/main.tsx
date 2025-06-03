import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RealEstate } from './screens/RealEstate';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RealEstate />
  </StrictMode>
);