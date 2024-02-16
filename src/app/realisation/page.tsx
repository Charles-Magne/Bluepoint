import React from "react";
import "./styles.scss";
import Image from "next/image";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import cinetoile from "./Cinétoile24.png";
import Pierre from "./Pierrefauilleciseau.png";

const Réalisation = () => {
  return (
    <div>
      <Header />
      <h1 className="realisationTitleMain">
        Nos réalisations
      </h1>
      <div className="realisationContenerCartouche">
        {/*Site cinétoile24 */}
        <a
          target="_blank"
          href="https://www.cinetoile24.fr/"
          className="realisationLienSite"
        >
          <div className="realisationCartoucheSite">
            <Image
              priority={true}
              className="realisationImageSite"
              width={720}
              height={420}
              src={cinetoile}
              alt="ImgSite"
            />
            <div className="realisationTextContener">
              <h2 className="realisationTitleSite">Cinétoile24</h2>
              <span className="realisationTextSite">
                Ce site à etait creer pour une association de cinéma. Il a pour
                but de mettre en avant les festivals et les évenements organisés
                par l&apos;association
              </span>
            </div>
          </div>
        </a>

        {/*Site Pierrefeuillearnaque */}
        <a
          target="_blank"
          href="https://www.pierrefeuillearnaque.com/"
          className="realisationLienSite"
        >
          <div className="realisationCartoucheSite">
            <Image
              priority={true}
              className="realisationImageSite"
              width={720}
              height={420}
              src={Pierre}
              alt="ImgSite"
            />
            <div className="realisationTextContener">
            <h2 className="realisationTitleSite">PierreFeuillearnaque</h2>
            <span className="realisationTextSite">
              Ce site est un projet personnel. C&apos;est un jeu de sociéte dans le
              méme esprit que le loup garou, mais avec les régles du chifoumi.{" "}
            </span>
            </div>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Réalisation;
