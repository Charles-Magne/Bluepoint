'use client';
import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import CreationSite from "../components/creationSite";
import CreationAutomatisation from "../components/creationAutomatisation";
import CreationFormation from "../components/creationFormation";

const Services: React.FC = () => {


  return (
    <div>
      <Header />
      <div className="serviceContenerMain">
        {/*Faire une ligne de metro avec des stations qui represente les etape de creations du site */}
        <CreationSite/>
        <CreationAutomatisation/>
        <CreationFormation/>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
