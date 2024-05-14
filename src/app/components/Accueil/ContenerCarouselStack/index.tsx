"use client";
import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Image from "next/image";
import { CarouselStack } from "../carouselStack";



 const ContenerStack: React.FC = () => {

  const imagesStack = [
    "https://drive.google.com/uc?id=1eBtn37Hwid4rfkGYjGJyg7jcvXoWL_fx",
    "https://drive.google.com/uc?id=1by3PzxpMqAotJgW-aWCHoNv8wo4dB1u1",
    "https://drive.google.com/uc?id=1C0z-uTOu5SZbr7U61tg1iqwIadkagtcf",
    "https://drive.google.com/uc?id=1MH5Bp2P92v1e7DsBpKvjIV4LnPrn6PYv",
];

  return (
    <div>
      {" "}
      <div className="ContenerAccueilMain">
        <div className="ContenerAccueilCarouselle">
          <CarouselStack imagesStack={imagesStack} />
        </div>
      </div>
    </div>
  );
};
export default ContenerStack;
