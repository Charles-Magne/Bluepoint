"use client";
import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Image from "next/image";



 const Engagements = () => {
  return (
    <div>
     <div className="bluepointContenerArticles">
     <h2 className="bluepointTitreEngagements" >Nos engagements</h2>
          {/* detail Satisfaction */}
          <div className="bluepointSatisfactionMain bluepointAnimD bluepointArticleMain">
            <div className="bluepointSatisfactionLeft">
              <h3 className="bluepointSatisfactionTitle bluepointTitreArticle">
                Votre satisfaction, notre priorité.
              </h3>
              <div className="bluepointContnerImgSatisfaction" >
              <Image className="bluepointImgSatisfaction" loading="lazy" width={1000} height={570} alt="ImgSatisfaction"  src={"https://drive.google.com/uc?id=17lbQJF-4EQfZC30dNuP8Sf5mQr4KQQmw"} /> 
              </div>
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
                Vous êtes unique et votre projet l&apos;est tout autant.
              </h3>
              <div className="bluepointContnerImgSatisfaction" >
              <Image className="bluepointImgPersonalisation" loading="lazy" width={7356} height={3678} alt="ImgPersonalisation" src={"https://drive.google.com/uc?id=1AfJ6XB4VzIdhAyyYljqKba39GiS8A_72"} />
              </div>
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
              <div className="bluepointContnerImgSatisfaction" >
              <Image className="bluepointImgSatisfaction" loading="lazy" width={1254} height={837} alt="ImgSatisfaction"  src={"https://drive.google.com/uc?id=1kx5O4nXr8rAl92qQ2SZFytdhG0ZzvPVS"} />
              </div>
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
  );
};
export default Engagements;
