import "./Hero.css";
import Bagel from "./img/bagel.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="direction">
        Hardstrasse 243 8005, Zürich | Montag- Freitag 11:00 - 14:00 Uhr
      </div>

      <nav class="navbar">
        <ul class="nav-links">
          <li>
            <a href="#pagina1">MENÜ</a>
          </li>
          <li>
            <a href="#pagina2">CATERING & EVENTS</a>
          </li>
          <li>
            <a href="#pagina3">KONTAK</a>
          </li>
          <li>
            <a href="#pagina4">ÜBER UNS</a>
          </li>
        </ul>
      </nav>
        <img src={Bagel} alt="Bagel" className="bagel" />
      <div className="title">
        <h1>KYND</h1>
        <h2>We serve kyndness</h2>
      </div>
    </section>
  );
}
