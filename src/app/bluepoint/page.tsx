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
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import ContenerBessan from "./contenerBessan/page";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import DetailPME from "./detailPME";
import DetailPersonalisation from "./detailPersonalisation";
import DetailLongTerme from "./detailLongTerme";



const Bluepoint = () => {

  //les useRef qui encapsule les componements
  const DetailPMEComponent = useRef<HTMLDivElement>(null);
  const LongTermeComponent = useRef<HTMLDivElement>(null);
  const PersonalisationComponent = useRef<HTMLDivElement>(null);


   useEffect(() => {
// on defini les divs
const DivDevWeb = document.querySelector('.accueilActivitéContnerDevWeb') as HTMLDivElement | null;
const DivForma = document.querySelector('.accueilActivitéContnerForm') as HTMLDivElement | null;
const DivAuto = document.querySelector('.accueilActivitéContnerAuto')as HTMLDivElement | null;

//Quand on survole une div on applique un box sahdow et on affiche la div[i]
DivDevWeb?.addEventListener('mouseover', () => {
  if (DetailPMEComponent.current && LongTermeComponent.current && PersonalisationComponent.current && DivForma && DivAuto) {
    DetailPMEComponent.current.style.display = "flex";
    LongTermeComponent.current.style.display = "none";
    PersonalisationComponent.current.style.display = "none";
    DivDevWeb.classList.add('accueilActivitéContnerFocus');
    DivAuto.classList.remove('accueilActivitéContnerFocus');
    DivForma.classList.remove('accueilActivitéContnerFocus');
  }
});

DivForma?.addEventListener('mouseover', () => {
  if (DetailPMEComponent.current && LongTermeComponent.current && PersonalisationComponent.current && DivDevWeb && DivAuto) {
    DetailPMEComponent.current.style.display = "none";
    LongTermeComponent.current.style.display = "flex";
    PersonalisationComponent.current.style.display = "none";
    DivDevWeb.classList.remove('accueilActivitéContnerFocus');
    DivForma.classList.add('accueilActivitéContnerFocus');
    DivAuto.classList.remove('accueilActivitéContnerFocus'); 
  }
});

DivAuto?.addEventListener('mouseover', () => {
  if (DetailPMEComponent.current && LongTermeComponent.current && PersonalisationComponent.current && DivForma && DivDevWeb) {
    DetailPMEComponent.current.style.display = "none";
    LongTermeComponent.current.style.display = "none";
    PersonalisationComponent.current.style.display = "flex";
    DivDevWeb.classList.remove('accueilActivitéContnerFocus');
    DivForma.classList.remove('accueilActivitéContnerFocus');
    DivAuto.classList.add('accueilActivitéContnerFocus');
  }
});

  },[]);

  /*useEffect(() => {
    const checkScroll = () => {
      const bluepointSati = document.querySelector<HTMLDivElement>(
        ".bluepointSatisfactionMain"
      );
      const bluepointPerso = document.querySelector<HTMLDivElement>(
        ".bluepointPersonaMain"
      );
      const bluepointSav = document.querySelector<HTMLDivElement>(
        ".bluepointSavMain"
      );

      if (bluepointSati && isInView(bluepointSati)) {
        bluepointSati.classList.add("show");
      }
      if (bluepointPerso && isInView(bluepointPerso)) {
        bluepointPerso.classList.add("show");
      }
      if (bluepointSav && isInView(bluepointSav)) {
        bluepointSav.classList.add("show");
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => {
      window.addEventListener("scroll", checkScroll);
    };
  }, []);*/

  /*const isInView = (elem: HTMLDivElement) => {
    const bouding = elem.getBoundingClientRect();
    return (
      bouding.top >= 0 &&
      bouding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };*/

    // On fait referance à element cible sur le quel il faut arriver
    const mainComposant = useRef<HTMLDivElement>(null);

  const clicArrowDown = () => {
    mainComposant.current?.scrollIntoView({ behavior:'smooth'});
  };
  /*    
  Notre mission: notre but est avant tout de propulser les petites et moyenne entitées commerciale sur le web. Car si aujourd'hui 
  la majorité des choix se font avec un telephone dans les mains, il est vitale d'être present sur internet. en effet, le choix d'un restauant, d'un artisant ou
  d'une sortie en general se prends en quelques minutes et donc il est vital d'etre present sur le web pour proposer au chalant numerique votre offre. 
  Nos valeurs: Local, Satisfaction, Accompagnement, Personalisation   */

  return (
    <div>
      <Header />
      <div className="bluepointContenerMain">
      <h1 className="bluepointTitleMain">Notre histoire, Nos valeurs, Nos engagements</h1>
      <ContenerBessan/>     
      <div className="accueilContenerTransformation">
          <h2 className="accueilTitleTransformation">
            Nos valeurs
          </h2>
          <div className="accueilContenerActivité"> {/*Mission faciliter votre transition tech, batir votre img de marque // Valeurs, aider les petites et moyenne entreprises a etre presente sur le web, vous suivre aprés la mission, Vous choissiez la formule qui vous convient  */}
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
                <span className="acceuilActivitéDetail">Développer les P.M.E</span>
                {/*Nous créeons bien plus que des sites web. Nous créeons votre
                  site web. */}
                <p className="acceuilActivitéDescription">
                  Permettre aux P.M.E d&apos;être present sur le web au meme titre que les grandes corporations.
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
                <span className="acceuilActivitéDetail">Service long-terme</span>
                <p className="acceuilActivitéDescription">
                  Pour nous la mission ne s&apos;arrete pas au deployment du site. Nous vous épaulons dans tout le cycle de vie du site.
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
          <div className="accueilUseRefStandard" ref={DetailPMEComponent}  >
          <DetailPME/>
          </div>
          <div className="accueilUseRefStandard"  ref={LongTermeComponent}  >
          <DetailLongTerme/>
          </div>
          <div className="accueilUseRefStandard"  ref={PersonalisationComponent} >
          <DetailPersonalisation/>
          </div>
        </div>
        {/*contener de tous les articles */}
        <div className="bluepointContenerArticles">
          {/* detail Satisfaction */}
          <div className="bluepointSatisfactionMain bluepointAnimD bluepointArticleMain">
            <div className="bluepointSatisfactionLeft">
              <h3 className="bluepointSatisfactionTitle bluepointTitreArticle">
                Votre Satisfaction est notre priorité.
              </h3>
              <div className="bluepointEtoileBlue bluepointArticleImg" />
            </div>
            <div className="bluepointContenertext">
              <span className="bluepointSiteSubtitle bluepointArticleText">
                En tant que développeurs, nous sommes passionnés par les défis
                techniques et nous nous engageons à vous fournir des outils
                optimisés et évolutifs.
              </span>
              <span className="bluepointSiteSubtitle bluepointArticleText">
                Notre objectif est de bâtir une relation commerciale pérenne
                avec vous et de devenir votre partenaire numérique local de
                confiance.
              </span>
              <span className="bluepointSiteSubtitle bluepointArticleText">
                Afin de maintenir des standards élevés de qualité et de service,
                nous vous envoyons une enquête de satisfaction à la fin de
                chaque mission.
              </span>
            </div>
          </div>
          {/* detail Personalisation */}
          <div className="bluepointPersonaMain bluepointAnimG bluepointArticleMain">
            <div className="bluepointPersonaRight">
              <h3 className="bluepointPersonaTitle bluepointTitreArticle">
                Vous etes unique et votre projet l&apos;est tout autant.
              </h3>
              <div className="bluepointPersonaImg bluepointArticleImg" />
            </div>
            <div className="bluepointContenertext">
              {/* *******1er paragraphe******* */}
              <span className="bluepointPersonaArticle bluepointArticleText">
                Notre approche se distingue par une personnalisation attentive,
                ancrée dans nos valeurs fondamentales. Nous écoutons vos
                besoins, pour comprendre les défis de votre marché et surtout,
                appliquer vos choix et vos attentes.
              </span>
              {/* *******3eme paragraphe******* */}
              <span className="bluepointPersonaArticle bluepointArticleText">
                {/* plusieurs languages */}
                Nous sommes à vos côtés tout au long du développement de votre
                outil web, en restant à l&apos;écoute de vos retours et en nous
                adaptant rapidement grâce à la méthode agile.
              </span>
              {/* *******4eme paragraphe******* */}
              <span className="bluepointPersonaArticle bluepointArticleText">
                Notre objectif est de vous offrir une expérience sur mesure, en
                vous donnant la liberté de choisir les services qui répondent le
                mieux à vos besoins et à vos envies.
              </span>

              <span className="bluepointPersonaArticle bluepointArticleText" />
            </div>
          </div>
          {/* detail SAV */}
          <div className="bluepointSavMain bluepointAnimD bluepointArticleMain">
            <div className="bluepointSatisfactionLeft">
              <h3 className="bluepointSavTitle bluepointTitreArticle">
                Nous vous accompagnons aprés la fin de la mission.
              </h3>
              <div className="bluepointSavImg bluepointArticleImg" />
            </div>
            <div className="bluepointContenertext">
              <span className="bluepointSavSubtitle bluepointArticleText">
                Nous croyons fermement que derrière chaque projet se trouve une
                histoire humaine unique. Notre engagement ne s&apos;arrête pas à
                la livraison de votre site web. Nous sommes là pour vous
                accompagner dans aventure numérique.
              </span>
              <span className="bluepointSavSubtitle bluepointArticleText">
                Que vous ayez des questions sur le fonctionnement de votre
                outil, besoin d&apos;aide pour utiliser une fonctionnalité
                spécifique, ou que vous rencontriez des défis techniques, nous
                sommes là pour vous soutenir.
              </span>
              <span className="bluepointSavSubtitle bluepointArticleText">
                Notre objectif principal est de bâtir une relation
                professionnelle solide et durable avec vous. Nous aspirons à
                devenir votre partenaire technique de confiance, toujours là
                pour vous accompagner dans la réussite de vos projets.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bluepoint;
