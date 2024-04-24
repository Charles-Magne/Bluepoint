import React from "react";
import "./style.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faStripe } from "@fortawesome/free-brands-svg-icons";
import { faCloudflare } from "@fortawesome/free-brands-svg-icons";
import { faIntercom } from "@fortawesome/free-brands-svg-icons";
import { faOpenid } from "@fortawesome/free-brands-svg-icons";
import { faSalesforce } from "@fortawesome/free-brands-svg-icons";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faLinux } from "@fortawesome/free-brands-svg-icons";
import { faGitlab } from "@fortawesome/free-brands-svg-icons";
import { faAtlassian } from "@fortawesome/free-brands-svg-icons";
import { faSuse } from "@fortawesome/free-brands-svg-icons";
import { faStaylinked } from "@fortawesome/free-brands-svg-icons";
import { faMailchimp } from "@fortawesome/free-brands-svg-icons";


export default function CreationFormation() {
  return (
    <div>
      <div className="serviceContenerCreationSite">
        <h1 className="serviceTitleAutomatisation">Formation</h1>
        <div className="serviceExplicationSiteWeb" >Aujourd&apos;hui, il existe une multitude d&apos;outils web presque infinie.</div>
        <div className="serviceContenerIconeExemple" >
        <FontAwesomeIcon className="serviceIconeFormation" icon={faStaylinked} />
        <FontAwesomeIcon className="serviceIconeFormation" icon={faMailchimp} />
        <FontAwesomeIcon className="serviceIconeFormation" icon={faSuse} />
        <FontAwesomeIcon className="serviceIconeFormation" icon={faAtlassian} />
        <FontAwesomeIcon className="serviceIconeFormation" icon={faGitlab} />
        </div>
        <div className="serviceExplicationSiteWeb" >Dans un premier temps, nous identifions les aspects de votre métier qui peut être assisté ou totalement pris en charge par un outil web</div>
        <div className="serviceContenerIconeExemple" >
        <FontAwesomeIcon className="serviceIconeFormation" icon={faLinux} />
        <FontAwesomeIcon className="serviceIconeFormation" icon={faSoundcloud} />
        <FontAwesomeIcon className="serviceIconeFormation" icon={faSalesforce} />
        <FontAwesomeIcon className="serviceIconeFormation" icon={faOpenid} />
        <FontAwesomeIcon className="serviceIconeFormation" icon={faIntercom} />
        </div>
        <div className="serviceExplicationSiteWeb" >De plus, il est rare que l&apos;on exploite nos outils numérique à 100% de leurs capacités. Trop souvent, nous nous contentons des fonctionalités de base. Bluepoint est la pour vous aidez à revlerer le plein potentiel de vos outils.</div>
        <div className="serviceContenerIconeExemple" >
        <FontAwesomeIcon className="serviceIconeFormation" icon={faCloudflare} />
        <FontAwesomeIcon className="serviceIconeFormation" icon={faStripe} />
        <FontAwesomeIcon className="serviceIconeFormation" icon={faFigma} />
        <FontAwesomeIcon className="serviceIconeFormation" icon={faSlack} />
        <FontAwesomeIcon className="serviceIconeFormation" icon={faTrello} />
        </div>
      </div>
    </div>
  );
}
