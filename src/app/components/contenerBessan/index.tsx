"use client";
import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Image from "next/image";
import { CarouselBessan } from "../carouselBessan";

const images = [
  "https://drive.google.com/uc?id=17FhQJl7J_cRHsj3360zS4An6UDTcZ_bf", //Tiny
  "https://drive.google.com/uc?id=198sDqVoL0bRwKFip7c-8jxppVZuOGDod",//Tiny
  "https://drive.google.com/uc?id=1iVHfNLejN8HaIDjrCO7JQ06xO6m9Izf3",//Tiny
  "https://drive.google.com/uc?id=179stj3O2pWgtV0EGd9dVPf2JPyjmf2mL", //Tiny
  "https://drive.google.com/uc?id=1AS5CeJ4XwsDTRsZNgp8CwUp6zRjFGlji", //Tiny
];

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
          l&apos;Hérault. Nous sommes passionnés par notre travail et nous
          mettons notre expertise au service des petites et moyennes
          entreprises. Notre objectif est de créer des sites web performants et
          attractifs, répondant aux besoins spécifiques de chaque client
        </p>
      </div>
    </div>
  );
};
export default ContenerBessan;
