import React from 'react'
import "./Lokal.css";

import Bio from "./img/bio.png";
import EatLocal from "./img/local.png";


const lokal = () => {
  return (
    <div className="lokal">
      <div className="container-lokal">
        <div className="title-lokal">
          <h1>Lokal</h1>
          <p>
            {" "}
            Bei Kynd glauben wir an nachhaltige, gesunde und regionale
            Lebensmittel. Wir sind stolz darauf, unseren Kunden die besten
            Bagel-Spezialitäten mit frischen, hochwertigen Zutaten anzubieten.
            Der Großteil unserer Produkte stammt aus biologischem Anbau und wir
            kooperieren nahezu ausschließlich mit lokalen Partnern.
          </p>
        </div>
        <div className="stickers">
          <img src={Bio} alt="bio"></img>
          <img src={EatLocal} alt="bio"></img>
        </div>
      </div>
    </div>
  );
}

export default lokal