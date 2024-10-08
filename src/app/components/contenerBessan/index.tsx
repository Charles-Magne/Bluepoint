"use client";
import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Image from "next/image";
import { CarouselBessan } from "../carouselBessan";
import mairie from "./Tiny-Mairie_de_bessan_34550 (1).jpg";
import vue from "./Tiny-bessan-retaillee_PLD4695_22x8.jpg";
import marché from "./Tiny-marche-bessan-1200x675.jpg";
import fleuve from "./Tiny-ouverture-bessan-770x430.jpg";
import ane from ".//tiny-ane-de-bessan-5-960x640.jpg";

/*const images = [
  "https://drive.google.com/uc?id=17FhQJl7J_cRHsj3360zS4An6UDTcZ_bf", //Tiny
  "https://drive.google.com/uc?id=198sDqVoL0bRwKFip7c-8jxppVZuOGDod",//Tiny
  "https://drive.google.com/uc?id=1iVHfNLejN8HaIDjrCO7JQ06xO6m9Izf3",//Tiny
  "https://drive.google.com/uc?id=179stj3O2pWgtV0EGd9dVPf2JPyjmf2mL", //Tiny
  "https://drive.google.com/uc?id=1AS5CeJ4XwsDTRsZNgp8CwUp6zRjFGlji", //Tiny
];*/

const images = [mairie, vue, marché, fleuve, ane].map((image) => image.src);

const ContenerBessan: React.FC = () => {
  return (
    <div>
      {" "}
      <div className="ContenerBessanMain">
        <div className="ContenerBessanCarouselle">
          <CarouselBessan images={images} />
        </div>
        <p className="ContnerBessanTitre">
          Bluepoint est une agence de développement web située à Bessan, dans
          l&apos;Hérault. Nous
          mettons notre expertise au service des petites et moyennes
          entreprises. Nous créerons des sites web performants et
          attractifs, répondant aux besoins spécifiques de chaque client
        </p>
      </div>
    </div>
  );
};
export default ContenerBessan;
