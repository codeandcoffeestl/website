import "./App.css"
import './assets/custom-theme/tailwind-custom/theme.scss';
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import StyleSamplePage from "./pages/StyleSamplePage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/stylesample" element={<StyleSamplePage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App
