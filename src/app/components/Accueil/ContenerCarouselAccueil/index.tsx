"use client";
import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Image from "next/image";
import { CarouselAccueil } from "../carouselAccueil";

const images = [
  "https://drive.google.com/uc?id=1HYQiJOUKMyzVEzhDvENnNOXDV1BfmA9Z", // Tiny
  "https://drive.google.com/uc?id=1Az4jJOfquGWzYi3GX43xWQMCPCVVzlEf", // Tiny
  "https://drive.google.com/uc?id=1hE1PWg97IsO9GvQIsHA2IgDZInQj9sjr", // tiny
  "https://drive.google.com/uc?id=1V4Jg7x1IvK8nC-GC6PkwZ-Q_I2g6UT1y", // Tiny
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
