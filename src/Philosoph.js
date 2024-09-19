import "./Philosoph.css";
import PhilosophieBagel from "./img/PhilosophieBagel.webp";


export default function Philosoph() {
  return (
    <section className="Philosoph">
      <div className="container">
        <img src={PhilosophieBagel} alt="Bagel" className=""/>
      </div>
    </section>
  );
}
