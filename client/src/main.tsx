import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimeReactProvider } from "primereact/api";
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import "./global.css"
import BaseLayout from './components/baseLayout/BaseLayout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimeReactProvider >
        <BaseLayout>
          <App />
        </BaseLayout>
      </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>
)
