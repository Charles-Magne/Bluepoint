import React, { useRef } from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import "./styles.scss";
import { Provider } from "react-redux";
import Image from "next/image";
import Logo from "./bluepoint_logo.png";

export default function Main() {
  return (
    <div>
      <div className="AccueilContenerInfo">
        {/********************************* */}
        {/* Partie Transformation */}
        <div className="accueilContenerTransformation">
          <h2 className="accueilTitleTransformation">
            Nous vous accompagnons dans votre transformation numérique
          </h2>
          <div className="accueilContenerActivité">
            {/**************La div Site web ***********/}
            <div className="accueilActivitéContner">
              <div className="acceuilContenerImg acceuilImgSiteweb"></div>
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">Site web</span>
                {/*Nous créeons bien plus que des sites web. Nous créeons votre
                  site web. */}
                <p className="acceuilActivitéDescription">
                  Nous créeons bien plus que des sites web. Nous créeons votre
                  site web.
                </p>
              </div>
            </div>
            {/****************La div Application web ************/}
            <div className="accueilActivitéContner">
              <div className="acceuilContenerImg acceuilImgAppweb"></div>
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">Application web</span>
                <p className="acceuilActivitéDescription">
                  Une application web est un site web optimisé pour les
                  tablettes et les portables, encapscule dans une application.
                </p>
              </div>
            </div>
            {/**************La div Application Mobile ************/}
            <div className="accueilActivitéContner">
              <div className="acceuilContenerImg acceuilImgAppmobile"></div>
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">
                  Application mobile
                </span>
                <p className="acceuilActivitéDescription">
                  Un outil optimisé pour les mobiles et les tablettes. Le code
                  s&apos;integre parfaitement à la logique mobile.
                </p>
              </div>
            </div>
            {/**************La div Formation ******************/}
            <div className="accueilActivitéContner">
              <div className="acceuilContenerImg acceuilImgFormation"></div>
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">Formation</span>
                <p className="acceuilActivitéDescription">
                  Nos formations portent principalements sur les outils web
                  innovants qui vous facilite la vie.
                </p>
              </div>
            </div>
            {/************************La div Application Automatisation **************/}
            <div className="accueilActivitéContner">
              <div className="acceuilContenerImg acceuilImgAutomatisation"></div>
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail ">Automatisation</span>
                <p className="acceuilActivitéDescription">
                  Si vous etes amenez a faire des taches repetitives, nous
                  pouvons vous aidez a mettre en place des automatisations grace
                  a certains outils web et au code.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*********************************** */}
        {/* Partie sur mesure */}
        <div className="accueilContenerTransformation">
          <h2 className="accueilTitleTransformation">Quelques termes techniques</h2>
          <div className="accueilContenerActivité">
            {/**************La div Site Language ***********/}
            <div className="accueilActivitéContner accueilActivitéTech">
              <div className="acceuilContenerImg acceuilImgSitevitrine"></div>
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">Language</span>
                <p className="acceuilActivitéDescription">
                  C&apos;est une maniére d&apos;ecrire du code. Les languages repondent tous à un besoin specifique.
                </p>
              </div>
            </div>
            {/****************La div site Framework ************/}
            <div className="accueilActivitéContner accueilActivitéTech">
              <div className="acceuilContenerImg acceuilImgSiteecommerce"></div>
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">Framework</span>
                <p className="acceuilActivitéDescription">
                  Plus complexe qu&apos;un language, il permet de produire un code de meilleur qualité.
                </p>
              </div>
            </div>
            {/**************La div front end ************/}
            <div className="accueilActivitéContner accueilActivitéTech">
              <div className="acceuilContenerImg acceuilImgFrontend"></div>
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">Front end</span>
                <p className="acceuilActivitéDescription">
                  En programation, le front end est la partie visible par
                  l&apos;utilisateur.
                </p>
              </div>
            </div>
            {/**************La div Back end ******************/}
            <div className="accueilActivitéContner accueilActivitéTech">
              <div className="acceuilContenerImg acceuilImgBackend"></div>
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">Back end</span>
                <p className="acceuilActivitéDescription">
                  Le back-end est composé de la base de données, et de la
                  gestion des requete.
                </p>
              </div>
            </div>
            {/************************La div responsive **************/}
            <div className="accueilActivitéContner accueilActivitéTech">
              <div className="acceuilContenerImg acceuilImgResponsive"></div>
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail ">Responsive</span>
                <p className="acceuilActivitéDescription">
                  Un site responsive est un site qui s&apos;adapte automatiquement a
                  la taille de votre ecran.
                </p>
              </div>
            </div>
          </div>
        </div>
{/*********************************** */}
         {/* Partie sur mesure */}
         <div className="accueilContenerTransformation">
          <h2 className="accueilTitleTransformation">Notre stack technique</h2>
          <div className="accueilContenerActivité">
            {/**************JavaScript ***********/}
            <div className="accueilActivitéContner accueilActivitéTech">
              <div className="acceuilContenerImg acceuilImgJavascript"></div>
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">JavaScript</span>
                <p className="acceuilActivitéDescription">
                  Le language web le plus populaire et le plus moderne.
                </p>
              </div>
            </div>
             {/**************Typescript ******************/}
             <div className="accueilActivitéContner accueilActivitéTech">
              <div className="acceuilContenerImg acceuilImgTypescript"></div>
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">Typescript</span>
                <p className="acceuilActivitéDescription">
                  Typescript est une autre façon de creer du code. le language integre des tests.
                </p>
              </div>
            </div>
            {/****************React.js ************/}
            <div className="accueilActivitéContner accueilActivitéTech">
              <div className="acceuilContenerImg acceuilImgReact"></div>
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">React.js</span>
                <p className="acceuilActivitéDescription">
                  Un framework front-end securisé qui peremt de creer un code fiable et evolutif.
                </p>
              </div>
            </div>
            {/**************Next.js ************/}
            <div className="accueilActivitéContner accueilActivitéTech">
              <div className="acceuilContenerImg acceuilImgNext"></div>
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">Next.js</span>
                <p className="acceuilActivitéDescription">
                  Next reutilse la logique react en optimisant la façon de creer son code.
                </p>
              </div>
            </div>
           
            {/************************Node.js **************/}
            <div className="accueilActivitéContner accueilActivitéTech">
              <div className="acceuilContenerImg acceuilImgNode"></div>
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail ">Node.js</span>
                <p className="acceuilActivitéDescription">
                  Node.js est un framework back-end qui permet de travailler sur un serveur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
