import React from "react";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";
import sushi from "./SiteSushi-Tiny (1).webp";
import Bessan from "./Tiny-Mairie_de_bessan_34550 (1).jpg";
import { autoBatchEnhancer } from "@reduxjs/toolkit";

export default function BessanIntro() {
  return (
    <div>
      <div className="BessanIntroMain">
        <div className="ContnerBessanContenerText">
          <h3 className="BessanIntroTextTitre"> Bluepoint est basé à Bessan, dans l&apos;Hérault.</h3>
          <p className="BessanIntroTextFirst">
            
            Nous sommes
            passionnés par notre travail et nous mettons notre expertise au
            service des petites et moyennes entreprises. Nous
            créerons des sites web performants et attractifs, répondant aux besoins
            spécifiques de chaque client.
          </p>
        </div>
        <Image
          priority={true}
          className="BessanIntroImage"
          width={4032}
          height={3024}
          /*fill={true}*/
          src={Bessan}
          alt="ImgBessan"
        />
      </div>
    </div>
  );
}
