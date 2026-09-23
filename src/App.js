import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/*Dein Code unter dieser Zeile  */}

      <h1>Leica RTC700</h1>

      <div className="container">
        <div className="text">
          <p>
            Die neue <strong>Leica RTC-Serie</strong> umfasst moderne{" "}
            <a href="https://de.wikipedia.org/wiki/Terrestrisches_Laserscanning"
               target="_blank"
               rel="noopener noreferrer">
              <strong>terrestrische Laserscanner</strong>
            </a>, die für schnelle, präzise und effiziente 3D-Datenerfassung
            entwickelt wurden. Sie kombiniert hohe Messgeschwindigkeit mit
            verbesserter Punktgenauigkeit und eignet sich sowohl für technische
            Vermessungen als auch für komplexe Dokumentationsprojekte. Die
            Geräte der Serie verfügen über optimierte Sensorik, leistungsfähige
            On-Board-Verarbeitung und robuste Hardware für den Einsatz unter
            verschiedensten Bedingungen. Besonders hervorzuheben ist die
            deutlich verkürzte Scan- und Registrierzeit, was Arbeitsabläufe im
            Feld spürbar beschleunigt. Die RTC-Modelle lassen sich nahtlos in
            die Leica-Softwareumgebung integrieren und unterstützen
            automatisierte Workflows von der Aufnahme bis zur Auswertung.
            Insgesamt bietet die Serie einen kompakten, leistungsstarken
            Einstieg in die moderne <strong>3D-Reality-Capture-Technologie</strong>{" "}
            und setzt neue Standards in Bedienkomfort und Effizienz.
          </p>
        </div>

        <div className="infobox">
          <h2 className="infobox-titel">Leica Geosystems AG</h2>
          <img
            src="https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Leica_Geosystems_Logo.svg/1920px-Leica_Geosystems_Logo.svg.png"
            alt="Leica Geosystems AG"
            width="100%"
          />

          <div className="reihe">
            <div className="spalte1">Gründung:</div>
            <div className="spalte2">1921 / 1997</div>
          </div>

          <div className="reihe">
            <div className="spalte1">Sitz:</div>
            <div className="spalte2">Heerbrugg, Schweiz</div>
          </div>

          <div className="reihe">
            <div className="spalte1">Website:</div>
            <div className="spalte2">
              <a href="https://leica-geosystems.com/products/laser-scanners/scanners/leica-rtc-series"
                 target="_blank"
                 rel="noopener noreferrer">
                Leica Geosystems AG
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*Dein Code über dieser Zeile  */}
    </div>
  );
}