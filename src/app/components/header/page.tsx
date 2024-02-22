'use client';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import "./styles.scss";
import Image from 'next/image';
import Logo from "./bluepoint_logo.png";
import LogoSmall from "./Blue Point Small.png";
import { Action } from "redux";
import { checkRouteHeader } from '../../../store/actions';
import { selectPage } from '../../../store/reducer/pageReducer'; 
import Link from "next/link";




const Header: React.FC = () => {

  const dispatch = useDispatch();
  const goodRoute = usePathname();
  const currentPage = useSelector(selectPage);

  // Le use Effect qui nous sert a mettre à jour le state lorsqu'on change de page
  useEffect (() => {
    // On fait un dispatch avec le nom de la page
    dispatch<Action>(checkRouteHeader(goodRoute));
  }, [dispatch, goodRoute]);


  // On check le state pour savoir sur quelle page on est et on adapte le scss en fonction
 useEffect (() => {

    // Un objet qui mappe les chemins de page avec les class correspondants
    const pageSelectors = {
        "/": ".headerLinkacceuil",
        "/bluepoint": ".headerLinkbluepoint",
        "/services": ".headerLinkservices",
        "/realisation": ".headerLinkrealisation",
    };



    interface pageSelectors {
      "/": string,
      "/bluepoint": string,
      "/services": string,
      "/realisation": string,
  };

    // Obtenir le chemin de la page actuelle

    // Supprimer la classe 'headerPageActive' de tous les éléments de la barre de navigation
    Object.values(pageSelectors).forEach(selector => {
        const element = document.querySelector(selector);
        // Vérifier si l'élément existe avant de lui retirer la classe
        element?.classList.remove('headerPageActive');
        
    });

    // Ajouter la classe 'headerPageActive' à l'élément correspondant au chemin de page actuel
    const currentSelector = pageSelectors[currentPage as keyof typeof pageSelectors];

    //const currentSelector = pageSelectors[currentPage];
    const currentElement = document.querySelector(currentSelector);

    // Vérifier si l'élément existe avant de lui ajouter la classe
    currentElement?.classList.add('headerPageActive');
    console.log('page scelector =>', pageSelectors, "currentpage", currentPage);

  }, [currentPage]);

  return (
    <div>
      <div className="headerMain">
        <div  className="headerContenerLogo">
          <Link href="/" >
          <Image className="headerLogoMain"  sizes="(max-width: 3000px) 15vw, (max-width: 2000px) 10vw 33vw, (max-width: 1520px) 2vw" priority={true} src={Logo} alt="logoBluepoint" />
          <Image className="headerLogoSmall"  sizes="(max-width: 900px) 5vw" priority={true} src={LogoSmall} alt="logoBluepoint" />
          </Link>
        </div>
        <div className="headerListLink">
          <a className="headerLink headerLinkacceuil" href="/">
            Acceuil
          </a>
          <a className="headerLink headerLinkbluepoint" href="/bluepoint">
            BluePoint
          </a>
          <a className="headerLink headerLinkservices" href="/services">
            Services
          </a>
          <a className="headerLink headerLinkrealisation" href="/realisation">
            Nos réalisations
          </a>
        </div>
        <div className="headerContenerDevis" >
          <a className="headerButtonDevis" href="/contact" >Contact</a>
        </div>
      </div>
      <div className="headerSecondeContener" >
        <div className="headerContenerIcone">
          <div className="headericonediv"></div>
          <div className="headericonediv"></div>
          <div className="headericonediv"></div>
        </div>
         
      </div>
    </div>
  );
};

export default Header;
