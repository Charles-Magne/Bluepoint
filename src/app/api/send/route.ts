import { EmailTemplate } from '../../components/email/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';
import { Response, Request } from 'express';

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY); 



export async function POST ( req: NextRequest, res: NextResponse) {
  const body = await req.json();
console.log('ca passe dans la bonne route', body);

//return NextResponse.json(body);

  const { firstName, lastName, mail, reason, message, company } = body;

  try {
    console.log('Je declenche la bonne route', reason );
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['laurent.supplisson@gmail.com'],//   laurent@bluepoint.ovh
      subject: 'Nouveau contrat BluePoint ?',
      react: EmailTemplate({ completName: firstName + lastName, corpsMail: message, contact: mail, why: reason, Entreprise: company  }) as React.ReactElement,
      headers: {  
        crossDomain: "true",
        accept: "/*", 
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'Content-Type' 
      }
    });

    if (error) {
        return new NextResponse(JSON.stringify({ error }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
    return new NextResponse(JSON.stringify({ data }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}