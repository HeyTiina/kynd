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
        <BrowserRouter>
          <Direction />
          <Hero />
          <Philosoph />
          <Catering />
          <Menu />
          <Footer />

          <Routes>
            <Route path="/MenuScreen" component={MenuScreen} />
            <Route path="/CateringScreen" component={CateringScreen} />
            <Route path="/KontaktScreen" component={KontaktScreen} />
            <Route path="/UberUnsScreen" component={UberUnsScreen} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
