"use client";

import { useForm } from "react-hook-form";
import Secondarybluebutton from "@/components/ui/SecondaryBlueButton";
import { useState } from "react";
import Turnstile from "react-turnstile";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [formLoadTime] = useState(() => Date.now());
  const [turnstileToken, setTurnstileToken] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmissionResult(null);

    if (!turnstileToken) {
      setSubmissionResult(
        "Kérlek erősítsd meg, hogy nem vagy robot (biztonsági ellenőrzés hiányzik)."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          formLoadTime,
          turnstileToken,
        }),
      });

      const resJson = await response.json();

      if (response.ok) {
        setSubmissionResult(resJson.message || "Sikeres üzenetküldés!");
      } else {
        setSubmissionResult(
          resJson.error ||
            "Hiba történt az üzenet küldése közben. Kérlek próbáld újra."
        );
      }
    } catch {
      setSubmissionResult("Hálózati hiba történt.");
    }

    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      {/* Honeypot mező – maradhat plusz védelemnek */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Ne töltsd ki ezt a mezőt</label>
        <input
          id="company"
          type="text"
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <input
        placeholder="Név*"
        {...register("name", { required: true })}
        className="p-4 text-lg bg-[--white]"
      />
      {errors.name && (
        <span className="text-red-500 text-sm">
          A név megadása kötelező
        </span>
      )}

      <input
        placeholder="E-mail*"
        {...register("email", {
          required: true,
          pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        })}
        className="p-4 text-lg bg-[--white]"
      />
      {errors.email && (
        <span className="text-red-500 text-sm">
          Valós e-mail cím megadása kötelező. Kérlek ellenőrizd az elírásokat.
        </span>
      )}

      <input
        placeholder="Tárgy*"
        {...register("subject", { required: true })}
        className="p-4 text-lg bg-[--white]"
      />
      {errors.subject && (
        <span className="text-red-500 text-sm">
          A tárgy megadása kötelező
        </span>
      )}

      <textarea
        placeholder="Üzenet*"
        rows={8}
        {...register("message", { required: true })}
        className="p-4 text-lg bg-[--white]"
      />
      {errors.message && (
        <span className="text-red-500 text-sm">
          Az üzenet megadása kötelező
        </span>
      )}

      <div className="flex flex-nowrap items-start gap-2">
        <input
          type="checkbox"
          id="acceptance"
          {...register("acceptance", { required: true })}
          className="p-4 text-lg bg-[--white] mt-1"
        />
        <label htmlFor="acceptance">
          Elolvastam, megértettem, és elfogadom az{" "}
          <Secondarybluebutton
            text={"adatkezelési tájékoztatóban"}
            link={"/adatkezelesi-tajekoztato"}
          />
          foglaltakat.*
        </label>
      </div>
      {errors.acceptance && (
        <span className="text-red-500 text-sm">
          Az adatkezelési tájékoztató elfogadása kötelező.
        </span>
      )}

      {/* Turnstile widget */}
      {siteKey ? (
        <div className="mt-2 self-center">
          <Turnstile
            sitekey={siteKey}
            onVerify={(token) => {
              setTurnstileToken(token);
            }}
            onError={() => {
              setTurnstileToken(null);
            }}
          />
        </div>
      ) : (
        <p className="text-xs text-red-500 text-center">
          Hiányzik a Turnstile site key (NEXT_PUBLIC_TURNSTILE_SITE_KEY).
        </p>
      )}

      <input
        type="submit"
        className="w-fit px-5 py-3 bg-[--aquamarine] hover:bg-[--dukeblue] transition-all text-black hover:text-white cursor-pointer self-center"
        disabled={isSubmitting}
        value={isSubmitting ? "Küldés..." : "Küldés"}
      />

      {submissionResult && (
        <p className="text-center text-sm mt-4">{submissionResult}</p>
      )}
    </form>
  );
}
