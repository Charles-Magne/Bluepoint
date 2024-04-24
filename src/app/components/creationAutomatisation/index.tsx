import React from "react";
import "./style.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";

export default function CreationAutomatisation() {
  return (
    <div>
      <div className="serviceContenerCreationSite">
        <h1 className="serviceTitleAutomatisation">Mise en place d&apos;automatisation</h1>
        <div className="serviceExplicationSiteWeb" >Nous créeons pour vous des automatisations. Elles vous permettront de gagner du temps et de vous concentrer sur d&apos;autres aspects de votre métier.  </div>
<Image className="serviceImgAutomatisationExplication" src={"https://drive.google.com/uc?id=1Wl_03PZqNQiwJuE7mknPvo0Jz2Y0eJN_"} width={2232} height={1248} alt="ImgAuto" />
      </div>
    </div>
  );
}
