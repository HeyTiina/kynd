import React from "react";
import "./CateringScreen.css";

import Video from "./img/Video.webp";

import LokalesWasser from "./img/LokalesWasser-logo.png";
import Plaza from "./img/Plaza-Logo.png";
import Kantonal from "./img/Zurcher-Kantonalbank-Logo.png";

import Slider from "./Slider";

const CateringScreen = () => {
  return (
    <section>
      <div className="title-catering">
        <h1>Caterings & Events</h1>
        <p>
          KYND Events machen dein Event unvergesslich! <br></br>Firmenfeier,
          Hochzeit oder Geburtstag mit KYND Events werden deine Gäste glücklich
          und satt.
        </p>

        <div className="companies-logos">
          <img src={Plaza} alt="Plaza" className="companies-logo" />
          <img
            src={LokalesWasser}
            alt="LokalesWasser"
            className="companies-logo special"
          />

          <img src={Kantonal} alt="Kantonal" className="companies-logo" />
        </div>
      </div>

      <div className="Video">
        <img src={Video} alt="Video" /> <br />
        <button>JETZT RESERVIEREN</button>
      </div>

      <Slider />
    </section>
  );
};

export default CateringScreen;
