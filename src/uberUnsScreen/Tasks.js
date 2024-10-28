import React from "react";
import "./Tasks.css";

import Bubble from "./img/bubble.png";

const Tasks = () => {
  return (
    <div className="tasks">
      <img src={Bubble} alt="bubble" className="bubble1"></img>
      <img src={Bubble} alt="bubble" className="bubble2"></img>
      <img src={Bubble} alt="bubble" className="bubble3"></img>
      <div className="tasks-title">
        <h1>KYND Tasks</h1>
        <p>
          Kynd Tasks fördert positive Aktionen der Freundlichkeit und
          Nachhaltigkeit durch anpassbare Aufgaben bei Veranstaltungen, die
          kostenlos an dem KYND-Automaten erhältlich sind.
        </p>{" "}
      </div>
    </div>
  );
};

export default Tasks;
