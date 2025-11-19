import { Resend } from "resend";
import { NextResponse } from "next/server";
import { Ugyfel } from "@/components/emailTemplates/ugyfel";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const { name, email, subject, message, company, formLoadTime, turnstileToken } =
    body;

  // 0. Turnstile ellenőrzés
  if (!turnstileToken) {
    return NextResponse.json(
      { error: "Biztonsági ellenőrzés sikertelen." },
      { status: 400 }
    );
  }

  try {
    const turnstileRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      }
    );

    const turnstileData = await turnstileRes.json();

    if (!turnstileData.success) {
      console.log("Turnstile verification failed:", turnstileData);
      return NextResponse.json(
        { error: "Nem sikerült ellenőrizni, hogy nem vagy robot." },
        { status: 400 }
      );
    }
  } catch (err) {
    console.error("Turnstile verify error:", err);
    return NextResponse.json(
      { error: "Biztonsági ellenőrzési hiba." },
      { status: 500 }
    );
  }

  // 1. Honeypot
  if (company && company.trim() !== "") {
    console.log("Spam detected (honeypot filled):", { name, email, subject });
    return NextResponse.json({ message: "OK" }, { status: 200 });
  }

  // 2. Túl gyors beküldés
  const now = Date.now();
  if (!formLoadTime || now - formLoadTime < 2000) {
    console.log("Spam detected (too fast submission):", {
      name,
      email,
      subject,
    });
    return NextResponse.json({ message: "OK" }, { status: 200 });
  }

  // 3. Minimum validáció
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Minden mező kitöltése kötelező." },
      { status: 400 }
    );
  }

  // 4. Email küldés, ha átment minden szűrőn
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

    return NextResponse.json(
      { message: "Üzenetedet sikeresen fogadtuk." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Belső hiba történt az email küldésekor." },
      { status: 500 }
    );
  }
}
