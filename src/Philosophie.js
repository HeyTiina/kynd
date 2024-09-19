import "./Philosophie.css";
import PhilosophieBagel from "./img/philosophie-bagel.png";


export default function Philosophie() {
  return (
    <section className="Philosophie">
      <div className="container">
        <img src={PhilosophieBagel} alt="Bagel" className=""/>
      </div>
    </section>
  );
}
