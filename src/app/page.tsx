"use client";

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import "./styles.scss";
import { useRef } from "react";
import Image from "next/image";
import ContenerAccueil from "./components/Accueil/ContenerCarouselAccueil";
import PhotosMainAccueil from "./components/Accueil/PhotoMainAccueil";


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
        <PhotosMainAccueil/>
          
      </div>
       <div ref={mainComposant} ></div>
        <Main />
      </div>
      <Footer />
    </main>
  );
}