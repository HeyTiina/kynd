import React from "react";
import "./Owner.css";

import Raphael from "./img/Raphael.jpg";

const Owner = () => {
  return (
    <div className="owner">
      <div className="container-owner">
        <div className="title-owner">
          <h1>Lerne Raphael kennen</h1>
          <p>
            Wir präsentieren Raphael, das Herz und die Seele hinter unseren
            exquisiten Bagels. Getrieben von seiner Leidenschaft für gutes Essen
            und einen gesunden Lebensstil beschloss er, ein Unternehmen zu
            gründen, das beide Welten vereint. Jeder Bagel, den wir anbieten,
            wird aus frischen, hochwertigen Zutaten hergestellt und spiegelt
            sein Engagement wider. Komm und genieße einen einzigartigen
            Geschmack, den nur Raphael bieten kann!
          </p>
        </div>
        <img src={Raphael} alt="Raphael" className="Raphael"></img>
      </div>
    </div>
  );
};

export default Owner;
