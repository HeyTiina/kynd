import "./App.css";
import Main from "./Main";
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
