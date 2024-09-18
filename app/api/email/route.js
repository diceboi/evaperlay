import { Resend } from "resend";
import { NextResponse } from "next/server";
import { Ugyfel } from "@/components/emailTemplates/ugyfel";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  try {
    const userEmail = await resend.emails.send({
      from: 'Perlay Éva <hello@evaperlay.com>',
      to: email,
      subject: 'Örülök, hogy írtál!',
      react: Ugyfel({ nev: name }),
    });

    const adminEmail = await resend.emails.send({
      from: 'Kapcsolat űrlap <hello@evaperlay.com>',
      to: 'hello@evaperlay.com',
      subject: `Új kapcsolatfelvétel: ${subject}`,
      text: `Név: ${name}\nE-mail: ${email}\nÜzenet: ${message}`,
    });

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
