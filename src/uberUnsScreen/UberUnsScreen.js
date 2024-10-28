import React from "react";
import "./UberUnsScreen.css";
import Lokal from "./Lokal.js";


const UberUnsScreen = () => {
  return (
    <div>
      <div className="title-uber-uns">
        <h1>ÜBER UNS</h1>
        <h2>Nachhaltige, gesunde und regionale Bagel-Spezialitäten</h2>
      </div>
      <Lokal />
    </div>
  );
};

export default UberUnsScreen;
