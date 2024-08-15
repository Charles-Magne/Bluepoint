import React from "react";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";
import sushi from "./SiteSushi-Tiny (1).webp";
import voyage from "./Capture d’écran 2024-05-22 105134 Tiny.png";
import Chaussure from "./Capture d’écran 2024-06-03 111346 Tiny.png";
import location from "./Capture-d’écran-2024-04-04-154324-Tiny (1).webp";

export default function PhotosMainAccueil() {
  return (
    <div>
      <div className="PhotosMainAccueilContenerMain">
        <div className="PhotosMainAccueilLigne1">
          <Image
            className="PhotosMainAccueilImage PhotosMainAccueilImageSushi"
            priority={false}
            src={sushi}
            alt={"SiteSushi"}
            width={0}
            height={0}
            sizes="90vw"
          />
          <Image
            className="PhotosMainAccueilImage PhotosMainAccueilImageVoyage"
            priority={false}
            src={voyage}
            alt={"SiteVoyage"}
            width={0}
            height={0}
            sizes="90vw"
          />
        </div>
        <div className="PhotosMainAccueilLigne2">
          <Image
            className="PhotosMainAccueilImage PhotosMainAccueilImageChaussure"
            priority={false}
            src={Chaussure}
            alt={"SiteChaussure"}
            width={0}
            height={0}
            sizes="90vw"
          />
          <Image
            className="PhotosMainAccueilImage PhotosMainAccueilImageLocation"
            priority={false}
            src={location}
            alt={"SiteLocation"}
            width={0}
            height={0}
            sizes="90vw"
          />
        </div>
      </div>
    </div>
  );
}
