import "./Catering.css";
import { Link } from "react-router-dom";

export default function Catering() {
  return (
    <section className="catering">
      <div className="catering-title">
        <h1>
          CATERING & <br></br> EVENTS
        </h1>
        <Link to="/cateringScreen">KONTAKTIEREN SIE UNS</Link>
      </div>
    </section>
  );
}
