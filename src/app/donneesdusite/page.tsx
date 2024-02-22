import React from 'react';
import './styles.scss';
import Header from "../components/header/page";
import Footer from "../components/footer/page";


const Donneesdusite = () => {
  return (
    <div>
      <Header />
      <div className="donnéesMainContener" >
        <h1 className='donnéeTitreMain' >Données du site</h1>
      <span className="donnéesSpanMain" >Chez bluePoint, on aime : 
      <ul className='donnéeContenerListe'>
        <li>- Les Tielles,</li>
        <li>- Les petits patés de Pézenas,</li>
        <li>- Les huites de l&apos;étange de Thau</li>
        <li>- Les grisettes de Montpellier,</li>
        </ul>   mais pas les cookies. Alors rassurez vous, on ne collecte aucunes données.  </span>
      </div>
      <Footer />
    </div>
  );
};

export default Donneesdusite;


