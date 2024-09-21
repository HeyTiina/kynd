import "./App.css";

import Philosoph from "./Philosoph";
import Main from "./Main";
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
    <BrowserRouter>
      <div className="App">
          <Direction />
          <Main />
          <Philosoph />
          <Catering />
          <Menu />
          <Footer />
          <Routes>
            <Route path="/MenuScreen" element={<MenuScreen />} />
            <Route path="/CateringScreen" element={<CateringScreen />} />
            <Route path="/KontaktScreen" element={<KontaktScreen />} />
            <Route path="/UberUnsScreen" element={<UberUnsScreen />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
