import React from "react";
import "./Slider.css"

import img1 from "./img/review1.png"; // Importa la imagen desde la carpeta src/img
import img2 from "./img/review2.png";
import img3 from "./img/review3.png";

const Slider = () => {
  return (
    <section className="slider">
      <h1>Unsere Bewertungen</h1>
      <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..."></img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Slider;
