import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/MenuScreen">MENÜ</Link>
          </li>
          <li>
            <Link to="/CateringScreen">CATERING & EVENTS</Link>
          </li>
          <li>
            <Link to="/KontaktScreen">KONTAKT</Link>
          </li>
          <li>
            <Link to="/UberUnsScreen">ÜBER UNS</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar