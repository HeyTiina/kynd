import "./App.css";
import Main from "./main/Hero";
import Footer from "./components/Footer";
import Direction from "./components/Direction";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.js";

import MenuScreen from "./menuScreen/MenuScreen";
import CateringScreen from "./cateringScreen/CateringScreen";
import KontaktScreen from "./kontaktScreen/KontaktScreen";
import UberUnsScreen from "./uberUnsScreen/UberUnsScreen";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Direction />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/MenuScreen" element={<MenuScreen />} />
          <Route path="/CateringScreen" element={<CateringScreen />} />
          <Route path="/KontaktScreen" element={<KontaktScreen />} />
          <Route path="/UberUnsScreen" element={<UberUnsScreen />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
