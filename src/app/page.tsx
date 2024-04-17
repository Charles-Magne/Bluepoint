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
        <div className="accueilContenerColor" >
<div className="accueiltitreContener">
        <h1 className="accueiPhrasePersona" >Vous êtes à un clic de votre site <span className="accueiPhrasePersonaColor">Personnalisé,</span><span className="accueiPhrasePersonaColor"> Performant et</span> <span className="accueiPhrasePersonaColor"> Responsive.</span> </h1>
        </div>
        <div className="accueilContenerImgSite">
      <Image className="accueilImgChaussure accueilImgCarouselle" src={"https://drive.google.com/uc?id=1by3PzxpMqAotJgW-aWCHoNv8wo4dB1u1"} width={1437} height={883} alt="ImageSiteChaussure"></Image>
      <Image className="accueilImgSushi accueilImgCarouselle" src={"https://drive.google.com/uc?id=1MH5Bp2P92v1e7DsBpKvjIV4LnPrn6PYv"} width={1902} height={937} alt="ImageSiteSushi"></Image>
      <Image className="accueilImgAssurance accueilImgCarouselle" src={"https://drive.google.com/uc?id=1eBtn37Hwid4rfkGYjGJyg7jcvXoWL_fx"} width={1432} height={881} alt="ImageSiteAssurance"></Image>
      <Image className="accueilImgInterface accueilImgCarouselle" src={"https://drive.google.com/uc?id=1C0z-uTOu5SZbr7U61tg1iqwIadkagtcf"} width={1115} height={880} alt="ImageSiteInterface"></Image>
      </div>
      </div>
       <div ref={mainComposant} ></div>
        <Main />
      </div>
      <Footer />
    </main>
  );
}
