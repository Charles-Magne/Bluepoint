import React from "react";
import "./style.scss";
import Header from "../components/header";
import Footer from "../components/footer";

const Plandusite = () => {
  return (
    <div>
      <Header />
      <div className="planMainContener">
        <h1 className="plandusiteTitreMain">
          Vous êtes perdu ? Suivez le plan
        </h1>
        <ul className="plandusiteListePage">
          <a href="/">
            <li className="plandusiteLiAcceuil plandusiteLiLien" >Acceuil</li>
          </a>
          <a href="/bluepoint">
            <li className="plandusiteLiBluepoint plandusiteLiLien" >Bluepoint</li>
          </a>
          <a href="/services">
            <li className="plandusiteLiServices plandusiteLiLien" >Services</li>
          </a>
          <a href="/realisation">
            <li className="plandusiteLiRealisation plandusiteLiLien" >Realisation</li>
          </a>
          <a href="/contact">
            <li className="plandusiteLiContact plandusiteLiLien" >Contact</li>
          </a>
          <a href="/donneesdusite">
            <li className="plandusiteLiDonnées plandusiteLiLien" >Données du site</li>
          </a>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Plandusite;
