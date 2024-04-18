import React from "react";
import "./style.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faClipboardQuestion } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faFolderTree } from "@fortawesome/free-solid-svg-icons";


export default function DetailFormation() {
  return (
    <div>
      <div className="contenerMainDetailFormation">
      <h3 className="DetailServiceTitleMain" >Formation</h3>
        <div className="DetailFormationIconeAndTexte">
          <FontAwesomeIcon className="DetailFormationIconeSuper" icon={faEye} />
          <div className="DetailFormationTextDev">Veille technologique</div>
        </div>
        <div className="DetailFormationIconeAndTexte">
          <FontAwesomeIcon
            className="DetailFormationIconeSuper"
            icon={faThumbsUp}
          />
          <div className="DetailFormationTextDev">Les meilleurs outils web</div>
        </div>
        <div className="DetailFormationIconeAndTexte">
          <FontAwesomeIcon
            className="DetailFormationIconeSuper"
            icon={faScrewdriverWrench}
          />
          <div className="DetailFormationTextDev">
            Adapter à votre echosysteme
          </div>
        </div>
        <div className="DetailFormationIconeAndTexte">
          <FontAwesomeIcon
            className="DetailFormationIconeSuper"
            icon={faCalendarDays}
          />
          <div className="DetailFormationTextDev">Votre rythme</div>
        </div>
        <div className="DetailFormationIconeAndTexte">
          <FontAwesomeIcon className="DetailFormationIconeSuper" icon={faClipboardQuestion} />
          <div className="DetailFormationTextDev">Vos besoins</div>
        </div>
        <div className="DetailFormationIconeAndTexte">
          <FontAwesomeIcon
            className="DetailFormationIconeSuper"
            icon={faMagnifyingGlass}
          />
          <div className="DetailFormationTextDev">Etude de vos besoins</div>
        </div>
        <div className="DetailFormationIconeAndTexte">
          <FontAwesomeIcon
            className="DetailFormationIconeSuper"
            icon={faHeadset}
          />
          <div className="DetailFormationTextDev">En viso ou en physique</div>
        </div>
        <div className="DetailFormationIconeAndTexte">
          <FontAwesomeIcon
            className="DetailFormationIconeSuper"
            icon={faFolderTree}
          />
          <div className="DetailFormationTextDev">Optimisé</div>
        </div>
        <div className="DetailFormationContnerButton">
          <Link href={"/contact"}>
            <button className="DetailFormationButtonContact">
              Nous contacter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
