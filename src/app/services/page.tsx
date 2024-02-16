'use client';
import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Image from "next/image";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import code from "./code-informatique.png";
import codePhoto from "./site.jpg";
import formation from "./education.png";
import FormPhoto from "./formation.jpeg";
import auto from "./automatisation.png";
import autoPhoto from "./images.jpeg";

const Services: React.FC = () => {


  useEffect(() => {

    const handleScroll = () => {
      const serviceSite = document.querySelector<HTMLDivElement>('.serviceSiteMain');
      const serviceAuto = document.querySelector<HTMLDivElement>('.serviceAutoMain');
      const serviceForm = document.querySelector<HTMLDivElement>('.serviceFormMain');

      if ( serviceSite && isInViewport(serviceSite)) {
        serviceSite.classList.add('show');
      }
      if ( serviceAuto && isInViewport(serviceAuto)) {
        serviceAuto.classList.add('show');
      }
      if ( serviceForm && isInViewport(serviceForm)) {
        serviceForm.classList.add('show');
      }
    }
 window.addEventListener('scroll', handleScroll);
 return () => {
   window.removeEventListener('scroll', handleScroll);
 }

  }, []);

const isInViewport = (elem: HTMLDivElement) => {
  const bouding = elem.getBoundingClientRect();
  return (
    bouding.top >= 0 &&
    bouding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  )
}


  return (
    <div>
      <Header />
      <div className="serviceContenerMain">
        <h1 className="serviceTitleMain">Nos solutions</h1>
        <div className="serviceContenerResume">
          {/* Creation de site */}
          <div className="serviceContenerSite serviceCartoucheResume">
            <Image alt="Logo_code" width={100} src={code} />
            <h2 className="serviceSiteTitre serviceCartoucheTitle">
              Création et mise à jour de vos sites / Applications Web
            </h2>
            <span className="serviceSiteDescript serviceCartouchedescript">
              Un programme sur mesure pour realiser le site dont vous révez.
            </span>
          </div>
          {/* Creation d'automatisation */}
          <div className="serviceContenerAuto serviceCartoucheResume">
            <Image alt="Logo_Automatisation" width={100} src={auto} />
            <h2 className="serviceAutoTitre serviceCartoucheTitle">
              Automatisation de vos process
            </h2>
            <span className="serviceAutoDescript serviceCartouchedescript">
              Liberez vous du temps et de la charge mental grace aux
              automatisations.
            </span>
          </div>
          {/* Creation de Formations */}
          <div className="serviceContenerForm serviceCartoucheResume">
            <Image alt="Logo_Formation" width={100} src={formation} />
            <h2 className="serviceFormTitre serviceCartoucheTitle">
              Formation sur les outils webs
            </h2>
            <span className="serviceFormDescript serviceCartouchedescript">
              Decouvrez des outils web specialement optimisés pour vous épauler
              dans votre activité.
            </span>
          </div>
        </div>
        <div className="serviceContenerArticles">
          {/* detail de creation de site */}
          <div className="serviceSiteMain animatedD serviceArticleMain">
            <div className="serviceSiteContener serviceTitleImg" >
            <h3 className="serviceSiteTitle serviceTitreArticle">
              Création et mise à jour de vos sites / Applications Web
            </h3>
            <div className="serviceImgSite"></div>
            </div>
            <div className="serviceContenertext">
              <span className="serviceSiteSubtitle serviceArticleText">
              Bluepoint développe des sites Web vitrines pour mettre en valeur votre activité, des plateformes e-commerce pour la vente de vos produits, ainsi que des applications Web et mobiles.
              </span>
              <span className="serviceSiteArticle serviceArticleText">
              En utilisant des technologies de pointe telles que React.js (utilisée par Facebook), Next.js (adoptée par TikTok et Twitch) et Node.js (préférée par Netflix et Amazon), nous assurons des solutions performantes et évolutives.
              </span>
              <span className="serviceSiteArticle serviceArticleText">
              Selon votre niveau de familiarité avec ces technologies et l&apos;état d&apos;avancement de votre projet, nous intervenons à toutes les étapes de sa création :
              </span>
              <ul>
                <li className="serviceSiteArticle serviceArticleText">
                Définition des objectifs et sélection de la technologie adaptée.
                </li>
                <li className="serviceSiteArticle serviceArticleText">
                Développement d&apos;un prototype en mettant l&apos;accent sur l&apos;expérience utilisateur.
                </li>
                <li className="serviceSiteArticle serviceArticleText">
                Validation du prototype avec vos retours et suggestions.
                </li>
                <li className="serviceSiteArticle serviceArticleText">
                Développement progressif de l&apos;outil en suivant des étapes de validation.
                </li>
                <li className="serviceSiteArticle serviceArticleText">
                Présentation de l&apos;outil final avec possibilité de modifications selon vos besoins.
                </li>
                <li className="serviceSiteArticle serviceArticleText">
                Déploiement de l&apos;outil et gestion de l&apos;hébergement pour une mise en ligne efficace et sécurisée
                </li>
              </ul>
            </div>
          </div>
          {/* detail d'automatisation' */}
          <div className="serviceAutoMain animatedG serviceArticleMain">
          <div className="serviceAutoContener serviceTitleImg" >
            <h3 className="serviceAutoTitle serviceTitreArticle">
              Automatisation de vos taches
            </h3>
            <div className="serviceImgAuto"></div>
          </div>
            <div className="serviceContenertext">
              {/*  */}
              <span className="serviceAutoArticle serviceArticleText">
              Certaines tâches prennent beaucoup de temps à effectuer, ce qui nous empêche de nous concentrer sur le cœur de notre métier.
              </span>
              <span className="serviceAutoArticle serviceArticleText">
              Grâce à des outils ou du code, il est possible de mettre en place des automatisations.
              </span>
              <span className="serviceAutoArticle serviceArticleText">
              Elles vous permettent de lier des sites ou des services Web entre eux et de les faire interagir.
              </span>
              <span className="serviceAutoArticle serviceArticleText">
              Par exemple, lorsque vous déposez une facture dans votre Google Drive, un outil peut automatiquement l&apos;analyser et l&apos;envoyer à votre client avec un message personnalisé.
              </span>
            </div>
          </div>
          {/* detail de Formation */}
          <div className="serviceFormMain animatedD serviceArticleMain">
          <div className="serviceFormContener serviceTitleImg" >
            <h3 className="serviceFormTitle serviceTitreArticle">
              Formation sur les outils webs
            </h3>
            <div className="serviceImgForm"></div>
            </div>
            <div className="serviceContenertext">
              <span className="serviceFormArticle serviceArticleText">
                Le spectre des outils numérique est si vaste qu&apos;il existe
                toujours un outil pertinant pour vous aider dans votre activité.
              </span>
              <span className="serviceFormArticle serviceArticleText">
                Bluepoint vous propose de vous aidez a decouvrir les nouveaux
                outils web qui répondent le mieux a vos besoins.
              </span>
              <span className="serviceFormArticle serviceArticleText">
                De plus, il est rare que l&apos;on exploite un outil a 100% de ses
                capacités; l&apos;on se contente souvent de ses fonctions de base,
                sans chercher a en savoir plus par manque de temps. Or nous vous aidons a reveler le plein potentiel de vos outils.
              </span>
              <span className="serviceFormArticle serviceArticleText">
                Bluepoint peut donc intervenir sur un trés large panel d&apos;outils
                et vous aidez a l&apos;exploiter a son plein potentiel.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
