import "./Menu.css";
import MenuBagel from "./img/MenuBagel.webp";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <section className="menu">
      <img src={MenuBagel} alt="Bagel" className="Menu-Bagel" />
      <div className="menu-description">
        <h1>UNSER MENÜ</h1>
        <h2>Für jeden Geschmack etwas dabei</h2>
        <p>
          Von süss bis herzhaft, bei uns findet ihr eine große Auswahl an
          Bagel-Spezialitäten. Wir bieten auch vegetarische & vegane Optionen
          und spezielle Angebote für Tiere.
        </p>
        <Link to="/menuScreen">MENÜ</Link>
      </div>
    </section>
  );
}
