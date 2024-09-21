import "./App.css";

import Philosoph from "./Philosoph";
import Hero from "./Hero";
import Catering from "./Catering";
import Menu from "./Menu";
import Footer from "./Footer";
import Direction from "./Direction";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuScreen from "./Screens/MenuScreen";
import CateringScreen from "./Screens/CateringScreen";
import KontaktScreen from "./Screens/KontaktScreen";
import UberUnsScreen from "./Screens/UberUnsScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Direction />
        <BrowserRouter>
          <Hero />
          <Routes>
            <Route path="/MenuScreen" element={<MenuScreen />} />
            <Route path="/CateringScreen" element={<CateringScreen />} />
            <Route path="/KontaktScreen" element={<KontaktScreen />} />
            <Route path="/UberUnsScreen" element={<UberUnsScreen />} />
          </Routes>

          <Philosoph />
          <Catering />
          <Menu />
          <Footer />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
