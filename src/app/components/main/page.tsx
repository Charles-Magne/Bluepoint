import React, { useRef } from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import "./styles.scss";
import { Provider } from "react-redux";
import Image from "next/image";

export default function Main() {
  return (
    <div>
      <div className="AccueilContenerInfo">
        {/********************************* */}
        {/* Partie Transformation */}
        <div className="accueilContenerTransformation">
          <h2 className="accueilTitleTransformation">
            Nous vous accompagnons dans votre transformation numérique
          </h2>
          <div className="accueilContenerActivité">
            {/**************La div Site web ***********/}
            <div className="accueilActivitéContner">
              <Image
                priority={true}
                className="acceuilContenerImg acceuilImgSiteweb"
                width={700}
                height={700}
                /*fill={true}*/
                src={
                  "https://drive.google.com/uc?id=1-_DlXlEnrzeI9U09mSHVfcuP9lCqRexd"
                }
                alt="ImgSiteWeb"
              />
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">Site web</span>
                {/*Nous créeons bien plus que des sites web. Nous créeons votre
                  site web. */}
                <p className="acceuilActivitéDescription">
                  Nous créons bien plus que des sites web. Nous créons votre
                  site web.
                </p>
              </div>
            </div>
            {/****************La div Application web ************/}
            <div className="accueilActivitéContner">
              <Image
                priority={true}
                className="acceuilContenerImg acceuilImgAppweb"
                width={700}
                height={700}
                /*fill={true}*/
                src={
                  "https://drive.google.com/uc?id=1alALXupE3-O5PsQYZybZVYz2NR42eDGX"
                }
                alt="ImgSiteWeb"
              />
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">Application web</span>
                <p className="acceuilActivitéDescription">
                  Une application web est un site web optimisé pour les
                  tablettes et les portables, encapsculé dans une application.
                </p>
              </div>
            </div>
            {/**************La div Application Mobile ************/}
            <div className="accueilActivitéContner">
              <Image
                priority={true}
                className="acceuilContenerImg acceuilImgAppmobile"
                width={700}
                height={700}
                /*fill={true}*/
                src={
                  "https://drive.google.com/uc?id=1V1Jqi-NNUh-rFgkywJxKTymCAF2EUm-G"
                }
                alt="ImgSiteWeb"
              />
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">
                  Application mobile
                </span>
                <p className="acceuilActivitéDescription">
                  Un outil optimisé pour les mobiles et les tablettes. Le code
                  s&apos;intègre parfaitement à la logique mobile.
                </p>
              </div>
            </div>
            {/**************La div Formation ******************/}
            <div className="accueilActivitéContner">
              <Image
                priority={true}
                className="acceuilContenerImg acceuilImgFormation"
                width={700}
                height={700}
                src={
                  "https://drive.google.com/uc?id=1wIu_T0jUgRFRgSYG80tL4SGKTJ0DieXM"
                }
                alt="ImgSiteWeb"
              />
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail">Formation</span>
                <p className="acceuilActivitéDescription">
                  Nos formations portent principalement sur des outils web
                  innovants qui vous faciliteront la vie.
                </p>
              </div>
            </div>
            {/************************La div Application Automatisation **************/}
            <div className="accueilActivitéContner">
              <Image
                priority={true}
                className="acceuilContenerImg acceuilImgAutomatisation"
                width={700}
                height={700}
                /*fill={true}*/
                src={
                  "https://drive.google.com/uc?id=1QFFYDwkL_maep6Ye-suXN_6SI7nhu-sn"
                }
                alt="ImgSiteWeb"
              />
              <div className="acceuilTitreDescription">
                <span className="acceuilActivitéDetail ">Automatisation</span>
                <p className="acceuilActivitéDescription">
                  Si vous êtes amené à faire des tâches répétitives, nous
                  pouvons vous aider à mettre en place des automatisations grâce
                  à certains outils web et au code.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Partie sur mesure */}
        <div className="accueilContenerTransformation">
          <h2 className="accueilTitleTransformation">Notre stack technique</h2>
          <div className="accueilContenerStack">
            <div className="accueilContenairewrapperTech accueilContenairewrapperTechToLeft">
              {/**************HTML ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={512}
                  height={512}
                  src={
                    "https://drive.google.com/uc?id=1ol0JKWspLrJnaa0lS4g95oZcM7JCAUmY"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >HTML</span>
              </div>
              {/**************Apache ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={900}
                  height={454}
                  src={
                    "https://drive.google.com/uc?id=1Ycb0K8FiGU153XeOs0fL22dgnFuSEeyB"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Apache</span>
              </div>
              {/**************css ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={951}
                  height={851}
                  src={
                    "https://drive.google.com/uc?id=1zZ5gpb91JKBGcRNBpJZ5AzvwOjnUyzLS"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Css</span>
              </div>
              {/**************scss ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={770}
                  height={400}
                  src={
                    "https://drive.google.com/uc?id=1p0OcSuzKvu_TWyieCWgrDxVbVMkQk6qO"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Scss</span>
              </div>
              {/**************Bootstrap ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={800}
                  height={638}
                  src={
                    "https://drive.google.com/uc?id=1z9SZpN2TZkFYCmnSZcbdD8XsuFPzwFR9"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Bootstrap</span>
              </div>
              {/**************Tailwind ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={920}
                  height={552}
                  src={
                    "https://drive.google.com/uc?id=1C_O7UYYus9U1imjUBK-_iM3VKw2AFghw"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Tailwind</span>
              </div>
              {/**************JavaScript ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech acceuilImgJavascript"
                  width={750}
                  height={750}
                  /*fill={true}*/
                  //src={javascript}
                  src={
                    "https://drive.google.com/uc?id=1ayYcJ7a8KtyW9T5JP9X8jExdepqx7Jf1"
                  }
                  alt="ImgSiteWeb"
                />
                <div className="acceuilTitreDescription">
                  <span className="acceuilActivitéDetailTech">JavaScript</span>
                  {/* <p className="acceuilActivitéDescription">
                  Le language web le plus populaire et le plus moderne.
                </p>*/}
                </div>
              </div>
              {/**************JSX ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={760}
                  height={760}
                  src={
                    "https://drive.google.com/uc?id=1UW7X0AQFFUnQ5HAhxZH7iCqRSZG0wCFa"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Jsx</span>
              </div>
              {/**************Typescript ******************/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech acceuilImgTypescript"
                  width={700}
                  height={700}
                  /*fill={true}*/
                  src={
                    "https://drive.google.com/uc?id=1gDXNlSAznl4v-qjk2Tj8MLErh1-Xzljb"
                  }
                  alt="ImgSiteWeb"
                />
                <div className="acceuilTitreDescription">
                  <span className="acceuilActivitéDetailTech">Typescript</span>
                  {/*<p className="acceuilActivitéDescription">
                  Typescript est une autre façon de créer du code. Le language intègre des tests.
              </p>*/}
                </div>
              </div>
              {/**************Npm ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={512}
                  height={512}
                  src={
                    "https://drive.google.com/uc?id=1hxuAUkdRgJsA5iCk8lvw6g7tKhudd2fs"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Npm</span>
              </div>
              {/**************Yarn ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={335}
                  height={150}
                  src={
                    "https://drive.google.com/uc?id=1tAP_jcAMV_9WLNdET-AdDpHyOyO_R3qE"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Yarn</span>
              </div>
              {/****************React.js ************/}
              <div className=" accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech acceuilImgReact"
                  width={700}
                  height={700}
                  /*fill={true}*/
                  src={
                    "https://drive.google.com/uc?id=1FqY2UuK7XYfnxruTg1Muo4bmhf5UmFcP"
                  }
                  alt="ImgSiteWeb"
                />
                <div className="acceuilTitreDescription">
                  <span className="acceuilActivitéDetailTech">React.js</span>
                  {/*<p className="acceuilActivitéDescription">
                  Un framework front-end sécurisé qui permet de créer un code fiable et évolutif.
            </p>*/}
                </div>
              </div>
            </div>
            <div className="accueilContenairewrapperTech accueilContenairewrapperTechToRight">
              {/**************Redux ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={900}
                  height={500}
                  src={
                    "https://drive.google.com/uc?id=1vrL6xPGqocRJ_hIqNTe3HO0jHqbDuMiM"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Redux</span>
              </div>
              {/**************Eslint ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={1200}
                  height={1056}
                  src={
                    "https://drive.google.com/uc?id=1x1IyU0DHn2Ox0m1hC3vlYkRAyuqQWZy2"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Eslint</span>
              </div>
              {/**************Next.js ************/}
              <div className=" accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech acceuilImgNext"
                  width={700}
                  height={700}
                  /*fill={true}*/
                  src={
                    "https://drive.google.com/uc?id=1flryhed_Km2oqmNozzL1CUG9840gRf16"
                  }
                  alt="ImgSiteWeb"
                />
                <div className="acceuilTitreDescription">
                  <span className="acceuilActivitéDetailTech">Next.js</span>
                  {/*} <p className="acceuilActivitéDescription">
                  Next réutilse la logique de React en optimisant la façon de créer son code.
</p>*/}
                </div>
              </div>
              {/************************Node.js **************/}
              <div className=" accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech acceuilImgNode"
                  width={700}
                  height={700}
                  /*fill={true}*/
                  src={
                    "https://drive.google.com/uc?id=1Ir_aW30Cg5ZvEH_k1gdpEGHLw4MEAqwp"
                  }
                  alt="ImgSiteWeb"
                />
                <div className="acceuilTitreDescription">
                  <span className="acceuilActivitéDetailTech">Node.js</span>
                  {/* <p className="acceuilActivitéDescription">
                  Node.js est un framework back-end qui permet de travailler sur un serveur.
</p>*/}
                </div>
              </div>
              {/**************Json ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={512}
                  height={188}
                  src={
                    "https://drive.google.com/uc?id=1mC_tsx_CJTVbwVnn-zhRC9FAiL9ThEEp"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Json</span>
              </div>
              {/**************Sql ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={900}
                  height={420}
                  src={
                    "https://drive.google.com/uc?id=1u93KGVY61F-6m6SP5KP3eObSGwE9YFP1"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Sql</span>
              </div>
              {/**************MySql ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={1200}
                  height={621}
                  src={
                    "https://drive.google.com/uc?id=1YCeFm5rOn24Z3RIMU-E_NnCSjfc3fVGH"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Mysql</span>
              </div>
              {/**************Vercel ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={586}
                  height={2560}
                  src={
                    "https://drive.google.com/uc?id=1JnRmLjm1lhLUOoSYANHEh477o8bqCyI-"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Vercel</span>
              </div>
              {/**************socket ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={1024}
                  height={1024}
                  src={
                    "https://drive.google.com/uc?id=1_bS_4Bj8paj3jX2ri510QfhXD67jc4gu"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Socket.io</span>
              </div>
              {/**************GitHub ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={512}
                  height={512}
                  src={
                    "https://drive.google.com/uc?id=1mdZutqEPIqUOJUG44akLtBstQ5t1Q3Fi"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >GitHub</span>
              </div>
              {/**************GitLab ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={2048}
                  height={2048}
                  src={
                    "https://drive.google.com/uc?id=1FjNmVc1V32jS8yu50iZ7FdWQ2Ut1wXyn"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Gitlab</span>
              </div>
              {/**************VsCode ***********/}
              <div className="accueilActivitéTech">
                <Image
                  priority={true}
                  className="acceuilContenerImgTech"
                  width={3840}
                  height={2160}
                  src={
                    "https://drive.google.com/uc?id=1RwAszxW9Ix7X78iRFCIgXpgdawRtjcd6"
                  }
                  alt="ImgSiteWeb"
                />
                <span className="acceuilActivitéDetailTech" >Vscode</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
