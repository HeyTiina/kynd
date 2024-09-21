import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="container-footer">
        <div className="location">
          <h1>STANDORT</h1>
          <a>Zürich Altstetten Bahnhof, 8048 Zürich</a>
        </div>

        <div className="Contact">
          <h1>KONTAKT</h1>
          <a>
            info@kyndzh.ch <br></br>Tel.: +41 76 58 133 58{" "}
          </a>
        </div>

        <div className="location">
          <h1>ÖFFNUNGSZEITEN</h1>
          <a>
            Montag bis Freitag <br></br>11:00 - 14:30 Uhr
          </a>
        </div>
      </div>
      <div className="container-documents">
        <a>Impressum</a>
        <a>Datenschutz</a>
        <a>AGB</a>
      </div>
    </section>
  );
}
