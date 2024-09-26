import React from "react";
import Review1 from "./img/review1.png";
import Review2 from "./img/review2.png";
import Review3 from "./img/review3.png";

export const Carrusel = () => {
  return (
    <div>
      <div class="carrusel-container">
        <div class="carrusel">
          <div class="carrusel-item">
            <img src={Review1} alt="Review1" className="Review1" />{" "}
          </div>
          <div class="carrusel-item">
            <img src={Review2} alt="Review2" className="Review2" />{" "}
          </div>
          <div class="carrusel-item">
            <img src={Review3} alt="Review3" className="Review3" />{" "}
          </div>
        </div>
        <div class="carrusel-controls">
          <button class="carrusel-prev">Anterior</button>
          <button class="carrusel-next">Siguiente</button>
        </div>
      </div>
    </div>
  );
};
