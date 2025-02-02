import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="container-footer">
        <div className="location">
          <h1>STANDORT</h1>
          <a href="https://www.google.com/maps/place/Z%C3%BCrich+Altstetten,+Bahnhof/@47.3911096,8.4858041,17z/data=!4m15!1m8!3m7!1s0x47900bb7e9c83357:0xc71a76766dfb789b!2sZ%C3%BCrich+Altstetten,+Bahnhof!8m2!3d47.391106!4d8.488379!10e1!16s%2Fg%2F11j_90p_qx!3m5!1s0x47900bb7e9c83357:0xc71a76766dfb789b!8m2!3d47.391106!4d8.488379!16s%2Fg%2F11j_90p_qx?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D">
            Zürich Altstetten Bahnhof, 8048 Zürich
          </a>
        </div>

        <div className="Contact">
          <h1>KONTAKT</h1>
          <a href="/kontaktScreen">
            info@kyndzh.ch <br></br>Tel.: +41 76 58 133 58{" "}
          </a>
        </div>

        <div className="opening">
          <h1>ÖFFNUNGSZEITEN</h1>
          <p>
            Montag bis Freitag <br></br>11:00 - 14:30 Uhr
          </p>
        </div>
      </div>
      <div className="container-documents">
        <p>Impressum</p>
        <p>Datenschutz</p>
        <p>AGB</p>
      </div>
    </section>
  );
}
