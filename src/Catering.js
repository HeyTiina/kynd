import "./Catering.css";
import Bagel from "./img/bagel.png";

export default function Catering() {
  return (
    <section className="Catering">
      <div className="container-catering">
        <img src={Bagel} alt="Bagel" className="catering-bagel" />
        <div className="catering-title">
          <h1>CATERING & EVENTS</h1>
          <a>KONTAKTIEREN SIE UNS</a>
        </div>
      </div>
    </section>
  );
}
