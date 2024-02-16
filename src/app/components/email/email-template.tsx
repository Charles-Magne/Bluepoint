import * as React from 'react';

interface EmailTemplateProps {
  completName: string;
  corpsMail: string,
  contact: string,
  why: string,
  Entreprise: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  completName, corpsMail, contact, why, Entreprise
}) => (
  <div>
    <h1>{why}</h1>
    <h2>Le client: {completName} </h2>
    <h2>Societé: {Entreprise}</h2>
    <span> {corpsMail}</span>
    <p>Recontacter le client sur {contact}</p>
  </div>
);