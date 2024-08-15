"use client";
import React, { useEffect, useRef } from "react";
import "./styles.scss";
//import du scss du contner global
import "../components/main/styles.scss";
import "../components/main/detailAuto/style.scss";

import Image from "next/image";
//import Satisfaction from "./etoilesTrue.png";
import Satisfaction from "./satisfactionClient.jpg";
import Sav from "./sav.jpg";
import Personalisation from "./personalisation.jpg";
import Header from "../components/header";
import Footer from "../components/footer";
import ContenerBessan from "../components/contenerBessan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import DetailPME from "../components/detailPME";
import DetailPersonalisation from "../components/detailPersonalisation";
import DetailLongTerme from "../components/detailLongTerme";
import Engagements from "../components/engagements";
import BessanIntro from "../components/BessanIntro";

const Bluepoint = () => {
  //les useRef qui encapsule les componements
  const DetailPMEComponent = useRef<HTMLDivElement>(null);
  const LongTermeComponent = useRef<HTMLDivElement>(null);
  const PersonalisationComponent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // on defini les divs
    const DivDevWeb = document.querySelector(
      ".accueilActivitéContnerDevWeb"
    ) as HTMLDivElement | null;
    const DivForma = document.querySelector(
      ".accueilActivitéContnerForm"
    ) as HTMLDivElement | null;
    const DivAuto = document.querySelector(
      ".accueilActivitéContnerAuto"
    ) as HTMLDivElement | null;

    //Quand on survole une div on applique un box sahdow et on affiche la div[i]
    DivDevWeb?.addEventListener("mouseover", () => {
      if (
        DetailPMEComponent.current &&
        LongTermeComponent.current &&
        PersonalisationComponent.current &&
        DivForma &&
        DivAuto
      ) {
        DetailPMEComponent.current.style.display = "flex";
        LongTermeComponent.current.style.display = "none";
        PersonalisationComponent.current.style.display = "none";
        DivDevWeb.classList.add("accueilActivitéContnerFocus");
        DivAuto.classList.remove("accueilActivitéContnerFocus");
        DivForma.classList.remove("accueilActivitéContnerFocus");
      }
    });

    DivForma?.addEventListener("mouseover", () => {
      if (
        DetailPMEComponent.current &&
        LongTermeComponent.current &&
        PersonalisationComponent.current &&
        DivDevWeb &&
        DivAuto
      ) {
        DetailPMEComponent.current.style.display = "none";
        LongTermeComponent.current.style.display = "flex";
        PersonalisationComponent.current.style.display = "none";
        DivDevWeb.classList.remove("accueilActivitéContnerFocus");
        DivForma.classList.add("accueilActivitéContnerFocus");
        DivAuto.classList.remove("accueilActivitéContnerFocus");
      }
    });

    DivAuto?.addEventListener("mouseover", () => {
      if (
        DetailPMEComponent.current &&
        LongTermeComponent.current &&
        PersonalisationComponent.current &&
        DivForma &&
        DivDevWeb
      ) {
        DetailPMEComponent.current.style.display = "none";
        LongTermeComponent.current.style.display = "none";
        PersonalisationComponent.current.style.display = "flex";
        DivDevWeb.classList.remove("accueilActivitéContnerFocus");
        DivForma.classList.remove("accueilActivitéContnerFocus");
        DivAuto.classList.add("accueilActivitéContnerFocus");
      }
    });
  }, []);

  // On fait referance à element cible sur le quel il faut arriver
  const mainComposant = useRef<HTMLDivElement>(null);

  const clicArrowDown = () => {
    mainComposant.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <div className="bluepointContenerMain">
        <h1 className="bluepointTitleMain">Votre agence locale</h1>
        <BessanIntro />
        <div className="accueilContenerTransformation">
          <h2 className="accueilTitleTransformation">Nos valeurs</h2>
          <div className="accueilContenerActivité">
            {" "}
            {/*Mission faciliter votre transition tech, batir votre img de marque // Valeurs, aider les petites et moyenne entreprises a etre presente sur le web, vous suivre aprés la mission, Vous choissiez la formule qui vous convient  */}
            {/**************La div Site web ***********/}
            <div className="accueilActivitéContner accueilActivitéContnerDevWeb">
              <Image
                priority={true}
                className="acceuilContenerImg acceuilImgSiteweb"
                width={700}
                height={700}
                /*fill={true}*/
                src={
                  "https://drive.google.com/uc?id=1-_DlXlEnrzeI9U09mSHVfcuP9lCqRexd"
                }
                alt="ImgSiteWeb"
              />
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">
                  Développer les P.M.E
                </span>
                {/*Nous créeons bien plus que des sites web. Nous créeons votre
                  site web. */}
                <p className="acceuilActivitéDescription">
                  Permettre aux P.M.E d&apos;être present sur le web au meme
                  titre que les grandes corporations.
                </p>
              </div>
            </div>
            {/**************La div Formation ******************/}
            <div className="accueilActivitéContner accueilActivitéContnerForm">
              <Image
                priority={true}
                className="acceuilContenerImg acceuilImgFormation"
                width={700}
                height={700}
                src={
                  "https://drive.google.com/uc?id=1wIu_T0jUgRFRgSYG80tL4SGKTJ0DieXM"
                }
                alt="ImgSiteWeb"
              />
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">
                  Service long-terme
                </span>
                <p className="acceuilActivitéDescription">
                  Pour nous la mission ne s&apos;arrete pas au deployment du
                  site. Nous vous épaulons dans tout le cycle de vie du site.
                </p>
              </div>
            </div>
            {/************************La div Application Automatisation **************/}
            <div className="accueilActivitéContner accueilActivitéContnerAuto">
              <Image
                priority={true}
                className="acceuilContenerImg acceuilImgAutomatisation"
                width={700}
                height={700}
                /*fill={true}*/
                src={
                  "https://drive.google.com/uc?id=1QFFYDwkL_maep6Ye-suXN_6SI7nhu-sn"
                }
                alt="ImgSiteWeb"
              />
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail ">Personnalisation</span>
                <p className="acceuilActivitéDescription">
                  Vous êtes unique et votre projet l&apos;est tout autant.
                </p>
              </div>
            </div>
          </div>
          <div className="accueilUseRefStandard" ref={DetailPMEComponent}>
            <DetailPME />
          </div>
          <div className="accueilUseRefStandard" ref={LongTermeComponent}>
            <DetailLongTerme />
          </div>
          <div className="accueilUseRefStandard" ref={PersonalisationComponent}>
            <DetailPersonalisation />
          </div>
        </div>
        <Engagements />
      </div>
      <Footer />
    </div>
  );
};

export default Bluepoint;
