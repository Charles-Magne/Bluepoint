'use client';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import "./styles.scss";
import Image from 'next/image';
import Logo from "./bluepoint_logo.png";
import LogoSmall from "./Blue Point Small.png";
import LogoSend from "./enveloppe.png";
import { Action } from "redux";
import { checkRouteHeader } from '../../../store/actions';
import { PageState, selectPage } from '../../../store/reducer/pageReducer'; 
import Link from "next/link";
import { log } from "console";
import { current } from "@reduxjs/toolkit";
import { pages } from "next/dist/build/templates/app-page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";





const Header: React.FC = () => {

  type currentPage = {
    page: string;
  }
  const dispatch = useDispatch();
  const goodRoute = usePathname();
 const currentPage = useSelector(selectPage);


  // Le use Effect qui nous sert a mettre à jour le state lorsqu'on change de page
  useEffect (() => {

    const accueiltRoute = document.querySelector('.headerLinkacceuil');
    const bluepointRoute = document.querySelector('.headerLinkbluepoint');
    const serviceRoute = document.querySelector('.headerLinkservices');

// On verifie si on est sur la page contact
if (goodRoute == '/contact') {
// Si on est sur la page contact On modifie le style
const buttonContact = document.querySelector('.headerButtonDevis');
buttonContact?.classList.add('ButtonContactNonColor');
}

if (goodRoute == '/') {
  accueiltRoute?.classList.add('headerLinkSelct');
bluepointRoute?.classList.remove('headerLinkSelct');
serviceRoute?.classList.remove('headerLinkSelct');
}

if (goodRoute == '/bluepoint') {
  accueiltRoute?.classList.remove('headerLinkSelct');
bluepointRoute?.classList.add('headerLinkSelct');
serviceRoute?.classList.remove('headerLinkSelct');
}

if (goodRoute == '/services') {
  accueiltRoute?.classList.remove('headerLinkSelct');
bluepointRoute?.classList.remove('headerLinkSelct');
serviceRoute?.classList.add('headerLinkSelct');
}


    // On fait un dispatch avec le nom de la page
    dispatch<Action>(checkRouteHeader(goodRoute));
  }, [dispatch, goodRoute]);


  // On check le state pour savoir sur quelle page on est et on adapte le scss en fonction
 useEffect (() => {

  
  

/*  const currentPage: currentPage = { page: "/services" };
const pageValue = currentPage.page; // Accéder à la valeur de la propriété page
console.log(pageValue); // Cela affichera "/services"*/


  interface PageSelectors {
    "/": string,
    "/bluepoint": string,
    "/services": string,
    "/realisation": string,
};


    // Un objet qui mappe les chemins de page avec les class correspondants
    const pageSelectors: PageSelectors = {
        "/": ".headerLinkacceuil",
        "/bluepoint": ".headerLinkbluepoint",
        "/services": ".headerLinkservices",
        "/realisation": ".headerLinkrealisation",
    };

console.log('la bonne page', currentPage);
    // Obtenir le chemin de la page actuelle

    // Supprimer la classe 'headerPageActive' de tous les éléments de la barre de navigation
    Object.values(pageSelectors).forEach(selector => {
        const element = document.querySelector(pageSelectors[selector as keyof PageSelectors]);
        // Vérifier si l'élément existe avant de lui retirer la classe
        element?.classList.remove('headerPageActive');
    });

    //j'ai un objet dans lequel j'ai toutes les routes
    // j'ai une variable dans laquelle j'ai le nom de la route.
    console.log('check de pageSelector', pageSelectors['/']);

    // Fonction pour ajouter une classe de style à la classe de pageSelector correspondante
function addStyleClassToCurrentPage(currentPage: string, pageSelectors: PageSelectors) {
    // Vérifier si la page actuelle est une clé valide dans pageSelectors
    if (currentPage in pageSelectors) {
        const pageSelector = pageSelectors[currentPage as keyof PageSelectors];
        console.log('la pageSelector', pageSelector);
        const element = document.querySelector(pageSelector);
        // Vérifier si l'élément existe avant de lui ajouter la classe de style
        if (element) {
            element.classList.add("style-class");
        }
    }
}
  }, [currentPage]);

  return (
    <div>
      <div className="headerMain">
        <div  className="headerContenerLogo">
          <Link href="/" >
          <Image className="headerLogoMain"  width={4922} height={1760} priority={true} src={"https://drive.google.com/uc?id=1sqI4H8IwEiJXFrDzGnrPVys2cMvz_LiW"} alt="logoBluepoint" />
          <Image className="headerLogoSmall"  width={231} height={256} priority={true} src={"https://drive.google.com/uc?id=1gGC0NYE43kKqymz9RsgOpZKtqDjPXV9_"} alt="logoBluepoint" />
          </Link>
        </div>
        <div className="headerListLink">
          <a className="headerLink headerLinkacceuil" href="/">
            Accueil
          </a>
          <a className="headerLink headerLinkbluepoint" href="/bluepoint">
            BluePoint
          </a>
          <a className="headerLink headerLinkservices" href="/services">
            Services
          </a>
          {/*<a className="headerLink headerLinkrealisation" href="/realisation">
            Nos réalisations
  </a>*/}
        </div>
        <div className="headerContenerDevis" >
          <a className="headerButtonA" href="/contact" >
            <div className="headerButtonDevis" >Contact</div> 
            <FontAwesomeIcon className="HeaderIconeLetter" icon={faEnvelope} />
          </a>
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
