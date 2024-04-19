import React from "react";
import "./style.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDna } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function DetailService() {
  return (
    <div>
      <div className="contenerMainDetailService">
        <h3 className="DetailServiceTitleMain">Développement Web</h3>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faFileCode}
          />
          <div className="DetailServiceTextDev">
            Experts dans le développement web
          </div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faLightbulb}
          />
          <div className="DetailServiceTextDev">Solutions innovantes</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faComments}
          />
          <div className="DetailServiceTextDev">Force de propositions</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faSliders}
          />
          <div className="DetailServiceTextDev">Des offres personnalisées</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon className="DetailServiceIconeSuper" icon={faDna} />
          <div className="DetailServiceTextDev">Code évolutif</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon className="DetailServiceIconeSuper" icon={faLock} />
          <div className="DetailServiceTextDev"> Solutions sécurisés</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faLocationDot}
          />
          <div className="DetailServiceTextDev">Proche de chez vous</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon className="DetailServiceIconeSuper" icon={faHeart} />
          <div className="DetailServiceTextDev">Passionnés</div>
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
