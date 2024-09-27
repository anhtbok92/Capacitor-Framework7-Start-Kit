import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Framework7 from 'framework7/lite-bundle';
import Framework7React from 'framework7-react';
import 'framework7/css/bundle';

import './css/app.css';
import './css/icons.css';

import AppInit from './App.tsx';

Framework7.use(Framework7React);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppInit />
  </StrictMode>,
);