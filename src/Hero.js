import "./Hero.css";
import Kynd from "./img/kynd-logo.png";

export default function Hero() {
  return (
    <section>
      <div className="direction">
        Hardstrasse 243 8005, Zürich | Montag- Freitag 11:00 - 14:00 Uhr
      </div>

      <nav class="navbar">
        <div class="logo">
          <img src={Kynd} alt="Logo de la empresa" />
        </div>
        <ul class="nav-links">
          <li>
            <a href="#pagina1">Pagina 1</a>
          </li>
          <li>
            <a href="#pagina2">Pagina 2</a>
          </li>
          <li>
            <a href="#pagina3">Pagina 3</a>
          </li>
          <li>
            <a href="#pagina4">Pagina 4</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
