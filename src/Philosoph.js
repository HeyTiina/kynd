import "./Philosoph.css";
import PhilosophieBagel from "./img/PhilosophieBagel.webp";


export default function Philosoph() {
  return (
    <section className="philosoph">
      <div className="container-philosoph">
        <img src={PhilosophieBagel} alt="Bagel" />
        <div className="phisoloph-description">
          <h1>UNSERE PHILOSOPHIE</h1>
          <h2>Be Kynd whenever possible. It is always possible</h2>
          <p>
            Bei Kynd geht es darum, den Menschen durch eine ausgewogene
            Ernährung näherzukommen und ein nachhaltiges Kynd-Erlebnis zu
            schaffen. Für uns steht Kyndness für Menschlichkeit, Nachhaltigkeit,
            Selbstliebe, Lokalität und Gesundheit. Jede Handlung von Kynd
            basiert auf dem Grundsatz: Sei Kynd, wann immer es möglich ist. Es
            ist immer möglich.
          </p>
          <a>ÜBER UNS</a>
        </div>
      </div>
    </section>
  );
}
