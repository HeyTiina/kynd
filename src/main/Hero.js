import "./Hero.css";
import Bagel from "../img/bagel.png";
import Catering from "./Catering";
import Menu from "./Menu";
import Philosoph from "./Philosoph";

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <img src={Bagel} alt="Bagel" className="bagel" />
        <div className="title">
          <h1>KYND</h1>
          <h2>We serve kyndness</h2>
        </div>
      </div>
      <Philosoph />
      <Catering />
      <Menu />
    </section>
  );
}