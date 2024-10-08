import React from "react";
import "./CateringScreen.css";

import Video from "./img/Video.webp";
import Bagel from "../main/img/bagel.png";

import LokalesWasser from "./img/LokalesWasser-logo.png";
import Plaza from "./img/Plaza-Logo.png";
import Kantonal from "./img/Zurcher-Kantonalbank-Logo.png";

import Slider from "./Slider";
import Review1 from "./img/review1.png";
import Review2 from "./img/review2.png";
import Review3 from "./img/review3.png";

const CateringScreen = () => {
  const slides = [
    { url: Review1, title: "beach" },
    { url: Review2, title: "boat" },
    { url: Review3, title: "forest" },
  ];

  return (
    <section>
      <div className="title-catering">
        <h1>Caterings & Events</h1>
        <p>
          KYND Events machen dein Event unvergesslich! <br></br>Firmenfeier,
          Hochzeit oder Geburtstag – mit KYND Events werden deine Gäste
          glücklich und satt.
        </p>
        <div class="grid-container-cateringScreen">
          <div class="grid-row-cateringScreen">
            <div class="grid-cell-cateringScreen">
              <img
                src={LokalesWasser}
                alt="LokalesWasser"
                className="special-logo"
              />
            </div>
            <div class="grid-cell-cateringScreen">
              <img src={Plaza} alt="Plaza" />
            </div>
            <div class="grid-cell-cateringScreen">
              <img src={Kantonal} alt="Kantonal" />
            </div>
          </div>
        </div>
      </div>
      <div className="Video">
        <img src={Bagel} alt="Bagel" className="bagel-cateringScreen" />
        <img src={Video} alt="Video" /> <br />
        <button>JETZT RESERVIEREN</button>
      </div>

      <div className="container-slides">
        <h1>Unsere Bewertungen</h1>
        <Slider slides={slides} />
      </div>
    </section>
  );
};

export default CateringScreen;
