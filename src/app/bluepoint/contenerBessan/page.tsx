"use client";
import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Image from "next/image";
import CarouselBessan from "./CarouselleBessan/page";

const images = [
  "https://drive.google.com/uc?id=1hz4rQiEugj1vmpJZ357kpP-c-mVS9bCX",
  "https://drive.google.com/uc?id=1o94Ui0Od9-DN0TUmA9DYmG_IBvznwS0k",
  "https://drive.google.com/uc?id=1DysxWnuv4GXTEBPU_g9JncMvD8qnnaf1",
  "https://drive.google.com/uc?id=1sWaKILdfzGsAsHQaLhqOfOeILqrA3NUV",
  "https://drive.google.com/uc?id=1fmjQ1ySZkQWjixaXHwTjtHK0X-rHq07E",
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
