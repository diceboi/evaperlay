"use client";

import React from "react";
import H3 from "./typo/H3";
import Paragraph from "./typo/Paragraph";
import { useForm } from "react-hook-form";
import Secondarybluebutton from "@/components/ui/SecondaryBlueButton";
import { useState } from "react";
import Label from "./typo/Label";
import Link from "next/link";

export default function EmailSub({ type, baselayout }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const response = await fetch("/api/googlesheets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmissionResult("Sikeres feliratkozás!");
      } else {
        setSubmissionResult("Hiba történt az üzenet küldése közben.");
      }
    } catch (error) {
      setSubmissionResult("Hálózati hiba történt.");
    }

    setIsSubmitting(false);
  };

  return (
    <div
      className={`flex ${baselayout === 'row' ? 'lg:flex-row' : 'lg:flex-col'} flex-col w-full h-full ${
        type === "green"
          ? "bg-white bg-opacity-15 shadow-sm"
          : "bg-gradient-to-br from-[--dukeblue] to-[--dukeblue-dark] shadow-lg"
      } p-8 gap-8 `}
    >
      <div className={`${baselayout === 'row' ? 'lg:w-1/2 w-full' : 'w-full'} flex flex-col items-baseline gap-4`}>
        <H3 classname={`${type === "green" ? "" : "text-white"}`}>
          Ne maradj le legfrissebb tartalmaimról.
        </H3>
        <Paragraph classname={`${type === "green" ? "" : "text-white"}`}>
          Ne aggódj, nem spammelek.
        </Paragraph>
      </div>

      <div className={`${baselayout === 'row' ? 'lg:w-[1px] w-full lg:min-h-full min-h-[1px]' : 'lg:w-full w-[1px] min-h-full lg:min-h-[1px]'} bg-white bg-opacity-25`}></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col ${baselayout === 'row' ? 'lg:w-1/2 w-full' : 'w-full'} justify-center gap-4`}
      >
        <div className="flex lg:flex-nowrap flex-col gap-2 w-full">
          <div className="flex flex-col gap-2 w-full">
            <input
              placeholder="Név*"
              name="name"
              {...register("name", { required: true })}
              className="p-2 text-lg bg-[--white] w-full"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                A név megadása kötelező
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <input
              placeholder="E-mail*"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
              className="p-2 text-lg bg-[--white] w-full"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                Valós e-mail cím megadása kötelező. Kérlek ellenőrizd az
                elírásokat.
              </span>
            )}
          </div>
        </div>

        <input
          type="submit"
          className={`w-full px-4 py-2 ${
            type === "green"
              ? "bg-[--dukeblue] hover:bg-[--white] text-white hover:text-black"
              : "bg-[--aquamarine] hover:bg-[--white] text-black"
          } transition-all cursor-pointer self-center`}
          disabled={isSubmitting}
          value={isSubmitting ? "Feliratkozás..." : "Feliratkozás"}
        />

        {submissionResult && (
          <p className={`text-center text-sm mt-4 ${type === 'green' ? 'text-black' : 'text-white'}`}>{submissionResult}</p>
        )}
        <p className={`${type === 'green' ? 'text-black' : 'text-white'} text-xs`}>
        A feliratkozás gomb megnyomásával elfogadod az{" "}
        <Link href="/adatkezelesi-tajekoztato" className="underline">
          adatkezelési tájékoztatóban
        </Link>{" "}
        foglaltakat.
      </p>
      </form>
      
    </div>
  );
}
