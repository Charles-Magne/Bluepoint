import React from "react";
import "../../components/main/detailService/style.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

export default function DetailPersonalisation() {
  return (
    <div>
      <div className="contenerMainDetailService">
        <h3 className="DetailServiceTitleMain" >Personnalisation de l&apos;offre</h3>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faPersonCircleExclamation}
          />
          <div className="DetailServiceTextDev">
            Vos attentes
          </div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faStore}
          />
          <div className="DetailServiceTextDev">Adapter à votre eco-systeme</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faPeopleArrows}
          />
          <div className="DetailServiceTextDev">Collaboration étroite</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faPen}
          />
          <div className="DetailServiceTextDev">Conception sur mesure</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon className="DetailServiceIconeSuper" icon={faHeadphones} />
          <div className="DetailServiceTextDev">A votre écoute</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon className="DetailServiceIconeSuper" icon={faCode} />
          <div className="DetailServiceTextDev">Integration de fonctionnalités spécifiques </div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faShare}
          />
          <div className="DetailServiceTextDev">Flexibilité</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon className="DetailServiceIconeSuper" icon={faPerson} />
          <div className="DetailServiceTextDev">Unique</div>
        </div>
        <div className="DetailServiceContnerButton" >
        <Link href={"/contact"}>
          <button className="DetailServiceButtonContact" >Nous contacter</button>
        </Link>
        </div>
      </div>
     
    </div>
  );
}
