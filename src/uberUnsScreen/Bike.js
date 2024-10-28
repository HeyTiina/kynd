import React from 'react'
import "./Bike.css";

import Bike from "./img/bike.png";

const bike = () => {
  return (
    <div className="bike">
      <h1>Unser Bagelfahrrad</h1>
      <img src={Bike} alt="bike"></img>
      <p>
        Das KYND Bagelfahrrad ist nicht nur ein Blickfang, sondern auch eine
        mobile Küche, die vor Ort frische Bagels zubereitet. Seine
        Vielseitigkeit und sein charmantes Erscheinungsbild machen es zur
        perfekten Ergänzung für Events und Caterings, auch das Ambiente wird mit
        seinem einladenden und unverwechselbaren Stil bereichert.
      </p>
    </div>
  );
}

export default bike