// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// PrimeReact CSS imports — yahan sabse upar ya App import se pehle bhi ho sakte hain
import 'primereact/resources/themes/lara-light-blue/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';               // Core CSS
import 'primeicons/primeicons.css';                             // Icons
import { DarkModeContextProvider } from './core/shared/context/darkModeContext';
import { PrimeReactProvider } from 'primereact/api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimeReactProvider value={{ cssLayer: true }}>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
