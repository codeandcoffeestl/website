import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimeReactProvider } from "primereact/api";
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { APIProvider } from '@vis.gl/react-google-maps';
import './index.css'
import "./global.css"
import BaseLayout from './components/baseLayout/BaseLayout.tsx';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimeReactProvider >
        <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
          <BaseLayout>
            <App />
          </BaseLayout>
        </APIProvider>
      </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>
)
