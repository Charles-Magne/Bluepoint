import React from "react";
import "../../components/main/detailService/style.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { faRoad } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

export default function DetailLongTerme() {
  return (
    <div>
      <div className="contenerMainDetailService">
        <h3 className="DetailServiceTitleMain" >Service long-terme</h3>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faFaceSmileBeam}
          />
          <div className="DetailServiceTextDev">
          Tranquillité d&apos;esprit
          </div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faRoad}
          />
          <div className="DetailServiceTextDev">Accompagnement</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faThumbsUp}
          />
          <div className="DetailServiceTextDev">Facilité</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faMapLocationDot}
          />
          <div className="DetailServiceTextDev">Suivi</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon className="DetailServiceIconeSuper" icon={faHandshake} />
          <div className="DetailServiceTextDev">Partenariat</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon className="DetailServiceIconeSuper" icon={faDatabase} />
          <div className="DetailServiceTextDev">Hebergement pris en charge</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faScroll}
          />
          <div className="DetailServiceTextDev">Renouvellement des certificats</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon className="DetailServiceIconeSuper" icon={faServer} />
          <div className="DetailServiceTextDev">déploiement</div>
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
