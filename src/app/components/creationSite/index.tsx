import React from "react";
import "./style.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";

export default function CreationSite() {
  return (
    <div>
      <div className="serviceContenerCreationSite">
        <h1 className="serviceTitleMain">Création de sites Web</h1>
        <div className="serviceExplicationSiteWeb" >Nous créeons pour vous des sites web personnalisés. Voici les étapes types de la creation d&apos;un outil Web. Toutes ces étapes sont modulables en fonction de votre budget, de votre temps et de vos attentes.   </div>
        <div className="serviceContenerLignMetroEtArret">
          <div className="serviceContenerLigneMetro" >
          <div className="serviceRondArretMetro" />
          <div className="serviceRondArretMetro" />
          <div className="serviceRondArretMetro" />
          <div className="serviceRondArretMetro" />
          <div className="serviceRondArretMetro" />
          <div className="serviceRondArretMetro" />
          <div className="serviceRondArretMetro" />
          <div className="serviceRondArretMetro" />
          <div className="serviceRondArretMetro" />
          <div className="serviceRondArretMetro" />
          <div className="serviceLigneMetro">
            </div>
          </div>
          <div className="serviceArretMetro">
            <span className="serviceEtapeNameSite">Définition des besoins</span>
            <span className="serviceEtapeNameSite">
              Présentation d&apos;une solution technique
            </span>
            <span className="serviceEtapeNameSite">
              Sélection de la technologie adaptée
            </span>
            <span className="serviceEtapeNameSite">
              Définition de votre charte graphique
            </span>
            <span className="serviceEtapeNameSite">
              Développement d&apos;une version test
            </span>
            <span className="serviceEtapeNameSite">
              Validation du prototype
            </span>
            <span className="serviceEtapeNameSite">
              Modification éventuelle du prototype
            </span>
            <span className="serviceEtapeNameSite">
              Présentation de l&apos;outil Web final
            </span>
            <span className="serviceEtapeNameSite">
              Déploiement de votre site web
            </span>
            <span className="serviceEtapeNameSite">
              Optimisation du référencement
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
