import "./Hero.css";
import Catering from "./Catering";
import Menu from "./Menu";
import Philosoph from "./Philosoph";

export default function Hero() {
  return (
    <section>
      <div className="hero">
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
