import React from "react";
import "../detailService/style.scss";
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
      <div className="contenerMainDetailService">
        <h3 className="DetailServiceTitleMain">Automatisation</h3>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faHourglassHalf}
          />
          <div className="DetailServiceTextDev">Gagner du temps</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faChartLine}
          />
          <div className="DetailServiceTextDev">Gagner en efficacité</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faFaceSmileBeam}
          />
          <div className="DetailServiceTextDev">En finir avec le stress</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon className="DetailServiceIconeSuper" icon={faRobot} />
          <div className="DetailServiceTextDev">Automatique</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faLaptopCode}
          />
          <div className="DetailServiceTextDev">Programmation ou outils web</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faJetFighterUp}
          />
          <div className="DetailServiceTextDev">Rapidité des processus</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon className="DetailServiceIconeSuper" icon={faIndustry} />
          <div className="DetailServiceTextDev">
            Se recentrer sur d&apos;autres tâches
          </div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faShieldHalved}
          />
          <div className="DetailServiceTextDev">Sécurisé</div>
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
