import { Resend } from "resend";
import { NextResponse } from "next/server";
import { Ugyfel } from "@/components/emailTemplates/ugyfel";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, subject, message, company, formLoadTime } = await request.json();

  // 1. Honeypot mező — ha ki van töltve, botnak vesszük
  if (company && company.trim() !== "") {
    console.log("Spam detected (honeypot filled):", { name, email, subject });
    return NextResponse.json({ message: "Spam detected" }, { status: 200 });
  }

  // 2. Túl gyors beküldés — ha az űrlap betöltése óta kevesebb mint 2 másodperc telt el
  const now = Date.now();
  if (!formLoadTime || now - formLoadTime < 2000) {
    console.log("Spam detected (too fast submission):", { name, email, subject });
    return NextResponse.json({ message: "Spam detected" }, { status: 200 });
  }

  // 3. Biztonság kedvéért minimum validáció backend oldalon is
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Minden mező kitöltése kötelező." },
      { status: 400 }
    );
  }

  // 4. Email küldés, ha átment a szűrőkön
  try {
    await resend.emails.send({
      from: "Perlay Éva <hello@evaperlay.com>",
      to: email,
      subject: "Örülök, hogy írtál!",
      react: Ugyfel({ nev: name }),
    });

    await resend.emails.send({
      from: "Kapcsolat űrlap <hello@evaperlay.com>",
      to: "hello@evaperlay.com",
      subject: `Új kapcsolatfelvétel: ${subject}`,
      text: `Név: ${name}\nE-mail: ${email}\nÜzenet: ${message}`,
    });

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
