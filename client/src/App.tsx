import "./App.css"
import './assets/custom-theme/tailwind-custom/theme.scss';
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ScrollToTopButton from "./components/utilComponents/ScrollToTopButton.tsx";

function App() {

  return (
    <><Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes><ScrollToTopButton /></>
  );
}

export default App
