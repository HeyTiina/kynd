import "./Main.css";
import Bagel from "./img/bagel.png";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section className="hero">
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
      <div>
        <img src={Bagel} alt="Bagel" className="bagel" />
        <div className="title">
          <h1>KYND</h1>
          <h2>We serve kyndness</h2>
        </div>
      </div>
    </section>
  );
}
