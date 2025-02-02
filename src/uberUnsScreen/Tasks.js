import React from "react";
import "./Tasks.css";

import Bubbles from "./img/bubbles.png";
import buMachine from "./img/buMachine.png";

const Tasks = () => {
  return (
    <div className="tasks">
      <div className="container-tasks">
        <img src={buMachine} alt="bubble machine" className="buMachine"></img>
        <div className="tasks-title">
          <h1>KYND Tasks</h1>
          <p>
            Kynd Tasks fördert positive Aktionen der Freundlichkeit und
            Nachhaltigkeit durch anpassbare Aufgaben bei Veranstaltungen, die
            kostenlos an dem KYND-Automaten erhältlich sind.
          </p>{" "}
        </div>
        <div className="bubbles">
          <img src={Bubbles} alt="bubbles" className="bubbles"></img>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
