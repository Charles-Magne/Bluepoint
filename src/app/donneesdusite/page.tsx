import React from 'react';
import './styles.scss';
import Header from "../components/header/page";
import Footer from "../components/footer/page";


const Donneesdusite = () => {
  return (
    <div>
      <Header />
      <div className="donnéesMainContener" >
      <span className="donnéesSpanMain" >Chez bluePoint, on aime les Tielles, les petits patés de Pézenas, les huites de l&apos;Sétange de Thau et les grisettes de Montpellier, mais pas les cookies. Alors rassurez vous, on ne collecte aucunes données.  </span>
      </div>
      <Footer />
    </div>
  );
};

export default Donneesdusite;


