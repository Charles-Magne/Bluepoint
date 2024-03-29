"use client";
import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import Image from "next/image";
import { log } from "console";

const Donneesdusite = () => {
  // On utilse un hook ref pour identifier le contenaire
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    //const specialité = container?.querySelectorAll("donnéesLiSpecialité li") as NodeListOf<HTMLElement>; // Pourquoi pas besoin de as ?
    const specialité = container.querySelectorAll(
      ".donnéesLiSpecialité"
    ) as NodeListOf<HTMLElement>;

    let currentIndex = 0;

    // Masquer toutes les spans sauf la première
    for (let i = 1; i < specialité.length; i++) {
      specialité[i].style.display = "none";
    }

    const handleScroll = (event: WheelEvent) => {
      console.log("coucou", event.deltaY, "currentindex", currentIndex);

      // Calculer la nouvelle position du scroll
      const newIndex = currentIndex + (event.deltaY > 0 ? 1 : -1);

      // Vérifier que la nouvelle position est valide
      if (newIndex < 0) {
        return;
      }
      if (newIndex >= specialité.length) {
        return;
      }

      // Masquer la span actuelle
      const currentLi = specialité[currentIndex];
      currentLi.style.display = "none";

      // Afficher la nouvelle span
      const newLi = specialité[newIndex];
      newLi.style.display = "flex";

      // Mettre à jour le compteur
      currentIndex = newIndex;
    };

    container.addEventListener("wheel", handleScroll);

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="donnéesMainContener" ref={containerRef}>
        <h1 className="donnéeTitreMain">Données du site</h1>
        <div className="donnéeContenaireMain">
          <div className="donnéeContenerTexe">
            <span className="donnéesSpanMain">
              Chez bluePoint, on aime :
              <ul className="donnéeContenerListe">
                <li className="donnéesLiTielle donnéesLiSpecialité">
                  {" "}
                  Les Tielles,
                </li>
                <li className="donnéesLiPaté donnéesLiSpecialité">
                  Les petits pâtés de Pézenas,
                </li>
                <li className="donnéesLiHuitre donnéesLiSpecialité">
                  Les huîtres de l&apos;étange de Thau
                </li>
                <li className="donnéesLiGrisette donnéesLiSpecialité">
                  Les grisettes de Montpellier,
                </li>
                <li className="donnéesLiCookie donnéesLiSpecialité">
                  mais pas les cookies. Alors rassurez-vous, on ne collecte
                  aucune donnée.
                </li>
              </ul>
            </span>
          </div>
          <div>
            <Image
              className="donnéeImgTielle"
              priority={true}
              width={660}
              height={563}
              src={
                "https://drive.google.com/uc?id=1MsjbeBfyRXO81HPFxq5kIiA6cez7voE5"
              }
              alt="Img Tielle"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donneesdusite;
