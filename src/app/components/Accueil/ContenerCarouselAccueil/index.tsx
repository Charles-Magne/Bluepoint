"use client";
import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Image from "next/image";
import { CarouselAccueil } from "../carouselAccueil";

const images = [
    "https://drive.google.com/uc?id=1_DDoJ_JH4FTR1OwpvRXvoZ9I3DGzvKp0",
    "https://drive.google.com/uc?id=1by3PzxpMqAotJgW-aWCHoNv8wo4dB1u1",
    "https://drive.google.com/uc?id=1C0z-uTOu5SZbr7U61tg1iqwIadkagtcf",
    "https://drive.google.com/uc?id=1MH5Bp2P92v1e7DsBpKvjIV4LnPrn6PYv",
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
