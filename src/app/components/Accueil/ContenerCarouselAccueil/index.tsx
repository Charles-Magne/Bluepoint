"use client";
import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Image from "next/image";
import { CarouselAccueil } from "../carouselAccueil";

const images = [
  "https://drive.google.com/uc?id=1bgI8V7wQW__AvOh9NBDjMTf_j1pHrDuy", //webp
 "https://drive.google.com/uc?id=1i17i-gYupkPgfl8NuYTxuveywyrzU8AO", //webp
 "https://drive.google.com/uc?id=1TJazaWb7I49A9l9_mNmr2D1csv0b3VlD", //webp
 "https://drive.google.com/uc?id=1IPFYdlFt30Wa7RU_rY3XKeZ-mBa8FNzY", //webp
];

const imagesCdl = [
  "https://res.cloudinary.com/dfrslvr04/image/upload/v1718352336/SiteSushi-Tiny_gvcgfp.webp", //Tiny
  "https://res.cloudinary.com/dfrslvr04/image/upload/v1718352335/Capture-d_%C3%A9cran-2024-05-22-105134-Tiny_tdvt5h.webp", //Tiny
  "https://res.cloudinary.com/dfrslvr04/image/upload/v1718352334/Capture-d_%C3%A9cran-2024-06-03-111346_kriru1.webp",//Tiny
  "https://res.cloudinary.com/dfrslvr04/image/upload/v1718352334/Capture-d_%C3%A9cran-2024-04-04-154324-Tiny_vegxun.webp", //Tiny
];

 const ContenerAccueil: React.FC = () => {
  return (
    <div>
      {" "}
      <div className="ContenerAccueilMain">
        <div className="ContenerAccueilCarouselle">
          <CarouselAccueil images={images} />
        </div>
      </div>
    </div>
  );
};
export default ContenerAccueil;
