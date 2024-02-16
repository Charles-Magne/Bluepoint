import React from "react";
import "./style.scss";
import Header from "../components/header/page";
import Footer from "../components/footer/page";

const Plandusite = () => {
  return (
    <div>
      <Header />
      <div className="planMainContener">
        <h1 className="plandusiteTitreMain">
          Vous etes perdu ? suivez le plan
        </h1>
        <ul>
          <a href="/">
            <li>Acceuil</li>
          </a>
          <a href="/bluepoint">
            <li>Bluepoint</li>
          </a>
          <a href="/services">
            <li>Services</li>
          </a>
          <a href="/realisation">
            <li>Realisation</li>
          </a>
          <a href="/contact">
            <li>Contact</li>
          </a>
          <a href="/donneesdusite">
            <li>Données du site</li>
          </a>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Plandusite;
