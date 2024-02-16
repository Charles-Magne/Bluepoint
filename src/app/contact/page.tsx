"use client";
import React, { useEffect, useState, FormEvent } from "react";
import "./styles.scss";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import { POST } from "../api/send/route";
import { useDispatch, useSelector } from "react-redux";
import { EmailTemplate } from "../components/email/email-template";
import { Resend } from "resend";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  saveLastName,
  saveFirstName,
  saveMail,
  saveCompagny,
  saveRaison,
  saveMessage,
  cleanForm
} from "../../store/actions";
import { Action } from "redux";
import { RootState } from "@/store/store";
import nodemailer from "nodemailer"; // sert a envoyer un mail
import { stringifyError } from "next/dist/shared/lib/utils";
import { register } from "module";

const Contact: React.FC = () => {
  //
  const { handleSubmit, formState: {errors} } = useForm<FormData>();

  // Un petit state qui gere l'etat du mail.
  const [isLoading, setIsLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);

  const dispatch = useDispatch();

  // On extrait les infos du state
  const CheckFirstName = (state: RootState) => state.form.firstName;
  const trueFirstName = useSelector(CheckFirstName);

  const checkLastName = (state: RootState) => state.form.lastName;
  const trueLastName = useSelector(checkLastName);

  const checkMail = (state: RootState) => state.form.mail;
  const trueMail = useSelector(checkMail);

  const checkCompany = (state: RootState) => state.form.Company;
  const trueCompany = useSelector(checkCompany);

  const checkReason = (state: RootState) => state.form.Reason;
  const trueReason = useSelector(checkReason);

  const checkMessage = (state: RootState) => state.form.message;
  const trueMessage = useSelector(checkMessage);

  // la fonction qui gere le firstName
  const inputnom = (event: React.ChangeEvent<HTMLInputElement>) => {
    const firstNameInput = event.currentTarget.value;
    dispatch<Action>(saveFirstName(firstNameInput));
  };

  // la fonction qui gere le lastName
  const inputPrénom = (event: React.ChangeEvent<HTMLInputElement>) => {
    const lastNameInput = event.currentTarget.value;
    dispatch<Action>(saveLastName(lastNameInput));
  };

  // la fonction qui gere le Mail
  const inputMail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const MailInput = event.currentTarget.value;
    dispatch<Action>(saveMail(MailInput));
  };

  // la fonction qui gere la compagny
  const inputConpany = (event: React.ChangeEvent<HTMLInputElement>) => {
    const CompagnyInput = event.currentTarget.value;
    dispatch<Action>(saveCompagny(CompagnyInput));
  };

  // la fonction qui gere la raison
  const handleProjectTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const RaisonInput = event.target.value;
    dispatch<Action>(saveRaison(RaisonInput));
  };

  // la fonction qui gere le Message
  const inputMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const MessageInput = event.currentTarget.value;
    dispatch<Action>(saveMessage(MessageInput));
  };

  type FormData = {
    firstName: string;
    lastName: string;
    mail: string;
    reason: string;
    message: string;
    company: string;
  };

  const dataSend = {
    firstName: trueFirstName,
    lastName: trueLastName,
    mail: trueMail,
    reason: trueReason,
    message: trueMessage,
    company: trueCompany,
  };

  // Ici on verifie que les informations sont bien rentrés et on envoie uniquement si tout est ok event: React.MouseEvent<HTMLButtonElement>
  const onSubmitHandler: SubmitHandler<FormData> = async () => {
    if (
      trueFirstName != "" &&
      trueLastName != "" &&
      trueMail != "" &&
      trueReason != "" &&
      trueMessage != ""
    ) {
     
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataSend),
      });

      const result = await response.json();

      // On verifie si le mail est bien parti.
      if (!response.ok) {
        console.log("ca passe pas");
      } else {
        dispatch<Action>(cleanForm()); 
        setIsSended(true);
        console.log("le mail est parti");
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="contactContenerMain">
        <div className="contactContenerForm">
          <span className="contacttitleMain">
            Vous avez un projet ? Vous voulez obtenir un devis ou simplement
            vous renseigner ? Contactez nous.
          </span>
          <form onSubmit={handleSubmit(onSubmitHandler)} >
            <div className="contactContenerBackground">
              <div className="contactContenerName">
                {/* Label pour le nom */}
                <div className="ContactFormName formTitle">
                  <label className="contactTitleLabel" htmlFor="name">
                    Nom
                  </label>
                  <input
                    className="contactInputField"
                    placeholder="Leblanc"
                    onChange={inputnom}
                    value={trueFirstName}
                    type="text"
                  />
                </div>
                {/* Label pour le Prénom */}
                <div className="ContactFormPrenom formTitle">
                  <label className="contactTitleLabel" htmlFor="name">
                    Prénom
                  </label>
                  <input
                    className="contactInputField"
                    placeholder="Juste"
                    onChange={inputPrénom}
                    value={trueLastName}
                    type="text"
                  />
                </div>
              </div>
              <div className="contactContenerCorporate">
                {/* Label pour l'adresse de contact */}
                <div className="ContactFormMail formTitle">
                  <label className="contactTitleLabel" htmlFor="name">
                    Mon adresse mail
                  </label>
                  <input
                    className="contactInputField"
                    placeholder="juste.leblanc@bluepoint.ovh"
                    onChange={inputMail}
                    value={trueMail}
                    type="text"
                  />
                </div>
                {/* Label pour l'entreprise */}
                <div className="ContactFormCompany formTitle">
                  <label className="contactTitleLabel" htmlFor="name">
                    Entreprise(facultatif)
                  </label>
                  <input
                    className="contactInputField"
                    placeholder="compagny"
                    onChange={inputConpany}
                    value={trueCompany}
                    type="text"
                  />
                </div>
              </div>
              {/* Label pour la nature du projet */}
              <div className="ContactFormProject formTitle contactMenuDeroulant">
                <label className="contactTitleLabel" htmlFor="name">
                  Nature du projet
                </label>
                <select
                  className="contactOptionMenu"
                  onChange={handleProjectTypeChange}
                >
                  <option value="None"></option>
                  <option
                    className="contactOptionMenu"
                    value="Developpement d'un site web"
                  >
                    Developpement web (site web, application)
                  </option>
                  <option className="contactOptionMenu" value="Formation">
                    Formation
                  </option>
                  <option className="contactOptionMenu" value="Automatisation">
                    Automatisation
                  </option>
                  <option className="contactOptionMenu" value="Autre">
                    Autre
                  </option>
                </select>
              </div>
              {/* Label pour le message */}
              <div className="ContactFormMessage formTitle contactContenerMessage">
                <label
                  className="contactTitleLabel contactLabelMessage"
                  htmlFor="name"
                >
                  Votre message
                </label>
                <textarea
                  placeholder="Ecrivez nous votre message ici"
                  onChange={inputMessage}
                  value={trueMessage}
                  className="contactMessageInput"
                />
              </div>
              <div className="contactContenerButton">
                <button type="submit" className="contactButtonsend">
                  Envoyer
                </button>
              </div>
              {isSended && (
                    <p>
                      Votre message a bien été envoyé avec succès nous vous
                      répondrons rapidement.
                    </p>
                  )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
