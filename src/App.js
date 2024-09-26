import "./App.css";
import Main from "./Hero";
import Footer from "./Footer";
import Direction from "./Direction";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuScreen from "./screens/MenuScreen";
import CateringScreen from "./screens/CateringScreen";
import KontaktScreen from "./screens/KontaktScreen";
import UberUnsScreen from "./screens/UberUnsScreen";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Direction />
        <Navbar />
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
