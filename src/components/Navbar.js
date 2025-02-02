import React from "react";
import "./Navbar.css"; 

import { Link } from "react-router-dom";
import Logo from "./kynd-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo en el navbar */}
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>

        {/* Botón de colapsado para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces del navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/MenuScreen">
                MENÜ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CateringScreen">
                CATERING & EVENTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/UberUnsScreen">
                ÜBER UNS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/KontaktScreen">
                KONTAKT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
