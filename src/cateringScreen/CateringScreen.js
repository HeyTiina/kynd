import React from "react";
import "./CateringScreen.css";
import Video from "./img/Video.webp";
import LokalesWasser from "./img/LokalesWasser-logo.png";
import Plaza from "./img/Plaza-Logo.png";
import Kantonal from "./img/Zurcher-Kantonalbank-Logo.png";

const CateringScreen = () => {
  return (
    <section>
      <div className="title-catering">
        <h1>Events & Caterings</h1>
        <p>
          KYND Events machen dein Event unvergesslich! Unsere handgemachten
          Bagels, frisch gebrühter Drip Coffee und erfrischende Kaltgetränke
          sorgen für Geschmack und Freude. Ob Firmenfeier, Hochzeit oder
          Geburtstag – mit KYND Events werden deine Gäste glücklich und satt.
        </p>
        <div class="grid-container">
          <div class="grid-row">
            <div class="grid-cell">
              <img
                src={LokalesWasser}
                alt="LokalesWasser"
                className="special-logo"
              />
            </div>
            <div class="grid-cell">
              <img src={Plaza} alt="Plaza" />
            </div>
            <div class="grid-cell">
              <img src={Kantonal} alt="Kantonal" />
            </div>
          </div>
        </div>
      </div>
      <div className="Video">
        <img src={Video} alt="Video" /> <br />
        <button>JETZT RESERVIEREN</button>
      </div>
      <div class="carrusel-container">
        <div class="carrusel">
          <div class="carrusel-item">
            <img src="image1.jpg" alt="Imagen 1" />
          </div>
          <div class="carrusel-item">
            <img src="image2.jpg" alt="Imagen 2" />
          </div>
          <div class="carrusel-item">
            <img src="image3.jpg" alt="Imagen 3" />
          </div>
        </div>
        <div class="carrusel-controls">
          <button class="carrusel-prev">Anterior</button>
          <button class="carrusel-next">Siguiente</button>
        </div>
      </div>
    </section>
  );
};

export default CateringScreen;
