import React from "react";
import "./style.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faJetFighterUp } from "@fortawesome/free-solid-svg-icons";
import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";


export default function DetailAuto() {
  return (
    <div>
      <div className="contenerMainDetailAuto">
      <h3 className="DetailServiceTitleMain" >Automatisation</h3>
        <div className="DetailAutoIconeAndTexte">
          <FontAwesomeIcon
            className="DetailAutoIconeSuper"
            icon={faHourglassHalf}
          />
          <div className="DetailAutoTextDev">
            Gagner du temps
          </div>
        </div>
        <div className="DetailAutoIconeAndTexte">
          <FontAwesomeIcon
            className="DetailAutoIconeSuper"
            icon={faChartLine}
          />
          <div className="DetailAutoTextDev">Gagner en efficacité</div>
        </div>
        <div className="DetailAutoIconeAndTexte">
          <FontAwesomeIcon
            className="DetailAutoIconeSuper"
            icon={faFaceSmileBeam}
          />
          <div className="DetailAutoTextDev">En finir avec le stress</div>
        </div>
        <div className="DetailAutoIconeAndTexte">
          <FontAwesomeIcon
            className="DetailAutoIconeSuper"
            icon={faRobot}
          />
          <div className="DetailAutoTextDev">Automatique</div>
        </div>
        <div className="DetailAutoIconeAndTexte">
          <FontAwesomeIcon className="DetailAutoIconeSuper" icon={faLaptopCode} />
          <div className="DetailAutoTextDev">Programmation ou outils web</div>
        </div>
        <div className="DetailAutoIconeAndTexte">
          <FontAwesomeIcon className="DetailAutoIconeSuper" icon={faJetFighterUp} />
          <div className="DetailAutoTextDev">Rapidité des processus</div>
        </div>
        <div className="DetailAutoIconeAndTexte">
          <FontAwesomeIcon
            className="DetailAutoIconeSuper"
            icon={faIndustry}
          />
          <div className="DetailAutoTextDev">Se recentrer sur d&apos;autres taches</div>
        </div>
        <div className="DetailAutoIconeAndTexte">
          <FontAwesomeIcon className="DetailAutoIconeSuper" icon={faShieldHalved} />
          <div className="DetailAutoTextDev">Sécurisé</div>
        </div>
        <div className="DetailServiceContnerButton">
          <Link href={"/contact"}>
            <button className="DetailServiceButtonContact">
              Nous contacter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
