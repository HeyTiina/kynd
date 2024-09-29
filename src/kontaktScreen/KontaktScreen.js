import React from 'react'
import "./KontaktScreen.css";
import Formular from './Formular';

const KontaktScreen = () => {
  return (
    <section className="KontaktScreen">
      <div className="title-kontakt">
        <h1>Kontakt aufnehmen</h1>
        <p>
          Wir freuen uns darauf, von dir zu hören! Ob für Anfragen zu unseren
          Bagels, Catering-Optionen oder Veranstaltungen – wir stehen dir gerne
          zur Verfügung. Schreib uns eine Nachricht oder ruf uns an. Gemeinsam
          machen wir dein Event unvergesslich!
        </p>
      </div>
      <Formular />
    </section>
  );
}

export default KontaktScreen