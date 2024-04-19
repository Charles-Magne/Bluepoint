import React from "react";
import "../detailService/style.scss";
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
      <div className="contenerMainDetailService">
        <h3 className="DetailServiceTitleMain">Formation</h3>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon className="DetailServiceIconeSuper" icon={faEye} />
          <div className="DetailServiceTextDev">Veille technologique</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faThumbsUp}
          />
          <div className="DetailServiceTextDev">Les meilleurs outils web</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faScrewdriverWrench}
          />
          <div className="DetailServiceTextDev">
            Adapter à votre échosysteme
          </div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faCalendarDays}
          />
          <div className="DetailServiceTextDev">Votre rythme</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faClipboardQuestion}
          />
          <div className="DetailServiceTextDev">Vos besoins</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faMagnifyingGlass}
          />
          <div className="DetailServiceTextDev">Etude de vos besoins</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faHeadset}
          />
          <div className="DetailServiceTextDev">En visio ou en physique</div>
        </div>
        <div className="DetailServiceIconeAndTexte">
          <FontAwesomeIcon
            className="DetailServiceIconeSuper"
            icon={faFolderTree}
          />
          <div className="DetailServiceTextDev">Optimisée</div>
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
