import React from "react";
import "./styles.scss";

const Footer = () => {
  return (
    <div>
      <div className="footerContenerMain">
        <span>Bluepoint - 2024</span>
        <a className="footerLink" href="/plandusite" >Plan du site</a>
        <a className="footerLink" href="/donneesdusite" >Données du site</a>
        <a className="footerLink" href="/contact" >Nous contactez</a>
          {/*resaux*/}
      </div>
    </div>
  );
};

export default Footer;
