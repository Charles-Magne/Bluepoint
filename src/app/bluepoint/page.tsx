"use client";
import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Image from "next/image";
//import Satisfaction from "./etoilesTrue.png";
import Satisfaction from "./satisfactionClient.jpg";
import Sav from "./sav.jpg";
import Personalisation from "./personalisation.jpg";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import scroll from "./scroll.png";

const Bluepoint = () => {
  useEffect(() => {
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
  }, []);

  const isInView = (elem: HTMLDivElement) => {
    const bouding = elem.getBoundingClientRect();
    return (
      bouding.top >= 0 &&
      bouding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };

    // On fait referance à element cible sur le quel il faut arriver
    const mainComposant = useRef<HTMLDivElement>(null);

  const clicArrowDown = () => {
    mainComposant.current?.scrollIntoView({ behavior:'smooth'});
  };

  return (
    <div>
      <Header />
      <div className="bluepointContenerMain">
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
        <h1 className="bluepointTitleMain">Nos engagements pour vous</h1>
        <div className="bluepointContenerResume">
          {/*Satisfaction*/}
          <div className="bluepointcartoucheSatisfaction bluepointCartoucheResume">
            <Image className="bluepointImgCartoucheGenrique" alt="logo_Qualité" width={1000} height={570} src={Satisfaction} />
            <h2 className="bluepointTitleCartouche">Votre satisfaction est notre priorité</h2>
            <span className="bluepointTextCartouche">
              Votre satisfaction est notre priorité.
            </span>
          </div>
          {/*Personalisation*/}
          <div className="bluepointcartouchePerson bluepointCartoucheResume">
              <Image className="bluepointImgCartoucheGenrique"
                alt="logo_Personalisation"
                width={7356} height={3678}
                src={Personalisation}
              />
            <h2 className="bluepointTitleCartouche">Vous etes unique et vos projets le sont tout autant
</h2>
            <span className="bluepointTextCartouche">
              Vous etes unique et vos projets le sont tout autant.
            </span>
          </div>
          {/*SAV*/}
          <div className="bluepointcartoucheSav bluepointCartoucheResume">
            <Image className="bluepointImgCartoucheGenrique" alt="logo_SAV" width={1254} height={836} src={Sav} />
            <h2 className="bluepointTitleCartouche">Nous vous accompagnons après la fin de la mission.
</h2>
            <span className="bluepointTextCartouche">
              Nous vous accompagnons apres la fin de la mission.
            </span>
          </div>
        </div>
        <div className="bluepointContenerScroll">
        <Image
          alt="logo_Scroll"
          width={100}
          className="bluepointIconeScroll"
          src={scroll}
        />
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
