import React from "react";
import "./MenuScreen.css";
import HappyFish from "./img/HappyFish.webp";
import HolyCow from "./img/HolyCow.webp";
import AvocadoFiesta from "./img/AvocadoFiesta.webp";
import OliveYourself from "./img/OliveYourself.webp";
import Classic from "./img/Classic.webp";

const MenuScreen = () => {
  return (
    <section>
      <div className="title-menu">
        <h2>UNSERE</h2>
        <h1>Bagels</h1>
      </div>
      <div className="bagels">
        <div class="grid-container-menu">
          <div class="grid-row-menu">
            <div class="grid-cell-menu img-column-menu best-sellers">
              <img src={HappyFish} alt="HappyFish" className="HappyFish" />
            </div>
            <div class="grid-cell-menu text-column-menu">
              <h1>Happy Fish</h1>
              <p>
                Auf einem Bett aus schweizer Frischkäse und Bio Gurken liegt
                unser Bio Rauchlachs, mit einer hausgemachten Honig-Senf-Dill
                Sauce wird er geschmacklich perfektioniert und mit Bio Rucola
                und Bio Sprouts garniert.
              </p>
              <button>BEST SELLER</button>
            </div>
          </div>
          <div class="grid-row-menu">
            <div class="grid-cell-menu img-column-menu best-sellers">
              <img src={HolyCow} alt="HolyCow" className="HolyCow" />
            </div>
            <div class="grid-cell-menu text-column-menu">
              <h1>Holy Cow</h1>
              <p>
                Würzige schweizer Pastrami trifft auf hausgemachte pickeled
                Onions und Dijon Senf serviert auf einem Bett aus schweizer
                Frischkäse und garniert mit Bio Rucola und Bio Sprouts.
              </p>
              <button>BEST SELLER</button>
            </div>
          </div>
          <div class="grid-row-menu">
            <div class="grid-cell-menu img-column-menu">
              <img
                src={AvocadoFiesta}
                alt="AvocadoFiesta"
                className="AvocadoFiesta"
              />
            </div>
            <div class="grid-cell-menu text-column-menu">
              <h1>Avocado Fiesta</h1>
              <p>
                Hier feiert eine Bio homemade Guacamole, mit Tortilla Chips und
                Jalapeños eine geschmackliche Fiesta dekoriert wird das ganze
                mit Bio Rucola und Bio Sprouts.
              </p>
              <button className="vegan">VEGAN</button>
            </div>
          </div>
          <div class="grid-row-menu">
            <div class="grid-cell-menu img-column-menu">
              <img
                src={OliveYourself}
                alt="OliveYourself"
                className="OliveYourself"
              />
            </div>
            <div class="grid-cell-menu text-column-menu">
              <h1>Olive Yourself</h1>
              <p>
                Bio Tomaten und Gurken bilden die Basis für einen Berg an
                Selbstliebe gefolgt von Bio Kalamata Oliven und Bio Feta gipfelt
                das ganze mit einem Topping aus Bio Sprouts und Bio Rucola.
              </p>
              <button className="vegetarisch">VEGETARISCH</button>
            </div>
          </div>
          <div class="grid-row-menu">
            <div class="grid-cell-menu img-column-menu">
              <img src={Classic} alt="Classic" className="Classic" />
            </div>
            <div class="grid-cell-menu text-column-menu">
              <h1>Classic</h1>
              <p>Schweizer Frischkäse, Zürcher Bagel. Einfach gut.</p>
              <button className="vegetarisch">VEGETARISCH</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuScreen;
