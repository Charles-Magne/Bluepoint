/*import { Middleware } from "@reduxjs/toolkit";
import axios, { AxiosResponse, AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { EmailTemplate } from "../../app/components/email/email-template";
import { CLICK_SEND_MESSAGE } from "../actions/index";
import { Action } from 'redux';


export default async function sendMailMiddleware(
  req: NextApiRequest,
  res: NextApiResponse, 
  action: Action
) {
  const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);
  switch (action.type) {
    case CLICK_SEND_MESSAGE: {
      console.log('middleware');
      
      // On parametre le switch case action.type
      try {
        console.log("Je declanche la bonne route", req.body);
        const { data, error } = await resend.emails.send({
          from: "Acme <onboarding@resend.dev>",
          to: ["laurent.supplisson@gmail.com"], //   laurent@bluepoint.ovh
          subject: "Hello world",
          react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
          headers: {
            crossDomain: "true",
            accept: "/*",
            "Access-Control-Allow-Methods": "GET, POST",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        });

        if (error) {
          return new Response(JSON.stringify({ error }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        return new Response(JSON.stringify({ data }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        return new Response(JSON.stringify({ error }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
    }
  }
}
*/
