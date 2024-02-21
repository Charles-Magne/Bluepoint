"use client";

import Header from "./components/header/page";
import Main from "./components/main/page";
import Footer from "./components/footer/page";
import "./styles.scss";
import { useRef } from "react";
import Image from "next/image";
import ville from "./components/main/Bezier.jpg";

export default function Home() {

  // On fait referance à element cible sur le quel il faut arriver
  const mainComposant = useRef<HTMLDivElement>(null);

  const clicArrowDown = () => {
    console.log('ici ca clic', mainComposant);
    mainComposant.current?.scrollIntoView({ behavior:'smooth'});
  };

  return (
    <main>
      <Header/>
      <div className="accueilContenerMain">
        <h2 className="acceuilTitreMain">
          Bluepoint, votre agence de{" "}
          <strong className="accueilTitleStrong">
            développement numérique
          </strong>{" "}
          basé au coeur de l&apos;Occitanie.
        </h2>
        <Image  priority={true}
              className="acceuilContenerBezier"
              width="auto"
              height="auto"
              /*fill={true}*/
              src={ville}
              alt="ImgOccitanie"></Image>
        <div className="acceuilContenerArrow">
          <div onClick={clicArrowDown} className="acceuilPngArrow"></div>
        </div>
        <div ref={mainComposant} ></div>
        <Main />
      </div>
      <Footer />
    </main>
  );
}
