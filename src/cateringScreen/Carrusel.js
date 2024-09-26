import React, { useState } from "react";
import Review1 from "./img/review1.png";
import Review2 from "./img/review2.png";
import Review3 from "./img/review3.png";
import "./Carrusel.css";
import useInterval from "use-interval";

export const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Review1, Review2, Review3];

  useInterval(() => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }, 2000); // cambiar cada 5 segundos

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div>
      <div className="carrusel-container">
        <div className="carrusel">
          <div className="carrusel-item.active">
            <img
              src={images[currentIndex]}
              alt={`Review ${currentIndex + 1}`}
            />
          </div>
        </div>
        <div className="carrusel-controls">
          <button className="carrusel-prev" onClick={handlePrevClick}>
            Anterior
          </button>
          <button className="carrusel-next" onClick={handleNextClick}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};
