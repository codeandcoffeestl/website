import { PrimeReactProvider } from "primereact/api";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css"
import './assets/custom-theme/tailwind-custom/theme.scss';

function App() {

  return (
    <PrimeReactProvider >
      <LandingPage />
    </PrimeReactProvider>
  );
}

export default App
