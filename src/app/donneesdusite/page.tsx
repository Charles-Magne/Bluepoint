import React from "react";
import "./styles.scss";
import Header from "../components/header/page";
import Footer from "../components/footer/page";

const Donneesdusite = () => {
  return (
    <div>
      <Header />
      <div className="donnéesMainContener">
        <h1 className="donnéeTitreMain">Données du site</h1>
        <div className="donnéeContenerTexe" >
          <span className="donnéesSpanMain">
            Chez bluePoint, on aime :
            <ul className="donnéeContenerListe">
              <li>- Les Tielles,</li>
              <li>- Les petits pâtés de Pézenas,</li>
              <li>- Les huîtres de l&apos;étange de Thau</li>
              <li>- Les grisettes de Montpellier,</li>
            </ul>{" "}
            mais pas les cookies. Alors rassurez-vous, on ne collecte aucune
            donnée.{" "}
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donneesdusite;
