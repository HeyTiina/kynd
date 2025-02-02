import React from "react";
import "./UberUnsScreen.css";
import Lokal from "./lokal.js";
import Bike from "./Bike.js";
import Tasks from "./Tasks.js";
import Owner from "./Owner.js";

const UberUnsScreen = () => {
  return (
    <div className="UberUnsScreen">
      <div className="title-uber-uns">
        <h1>ÜBER UNS</h1>
        <h2>Nachhaltige, gesunde und regionale Bagel-Spezialitäten</h2>
      </div>
      <Lokal />
      <Bike />
      <Tasks />
      <Owner />
    </div>
  );
};

export default UberUnsScreen;
