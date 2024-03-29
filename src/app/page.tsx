"use client";

import Header from "./components/header/page";
import Main from "./components/main/page";
import Footer from "./components/footer/page";
import "./styles.scss";
import { useRef } from "react";
import Image from "next/image";

export default function Home() {

  // On fait referance à element cible sur le quel il faut arriver
  const mainComposant = useRef<HTMLDivElement>(null);

  const clicArrowDown = () => {
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
          basée au coeur de l&apos;Occitanie.
        </h2>
        <Image  priority={true}
              className="acceuilContenerBezier"
              width={1600}
              height={900}
              src={"https://drive.google.com/uc?id=10xJF2rs0YX2CbkyBTQ1DHwWVTPVMHzx9"}
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
