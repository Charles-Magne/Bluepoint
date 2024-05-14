import React from "react";
import "../../components/main/detailService/style.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

export default function DetailPME() {
  return (
    <div>
      <div className="contenerMainDetailService">
        <h3 className="DetailServiceTitleMain" >Développer les P.M.E</h3>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faEnvelopeOpenText}
          />
          <div className="DetailServiceTextDev">
            Nouvelles opportunitées
          </div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faDumbbell}
          />
          <div className="DetailServiceTextDev">Concurrencer</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faArrowUp}
          />
          <div className="DetailServiceTextDev">Grandir</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faPeopleGroup}
          />
          <div className="DetailServiceTextDev">Nouveau public</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon className="DetailServiceIconeSuper" icon={faChartLine} />
          <div className="DetailServiceTextDev">Valoriser votre activité</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon className="DetailServiceIconeSuper" icon={faEarthAmericas} />
          <div className="DetailServiceTextDev">National</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faBullhorn}
          />
          <div className="DetailServiceTextDev">Communiquer</div>
        </div>
        <div className="DetailServiceIconeAndTexte" >
          <FontAwesomeIcon className="DetailServiceIconeSuper" icon={faWifi} />
          <div className="DetailServiceTextDev">S&apos;adapter</div>
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
