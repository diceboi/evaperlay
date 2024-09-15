"use client";

import Image from "next/image";
import Regularcontainer from "./ui/regularcontainer";
import Primarybluebutton from "./ui/primaryBlueButton";
import { motion } from "framer-motion";
import { CalendlyContext } from "@/app/CalendlyContext";
import { useContext } from "react";
import H2 from "./ui/typo/H2";
import Paragraph from "./ui/typo/Paragraph";

export default function Ctaone() {

  const { toggleCalendly } = useContext(CalendlyContext)

  return (
    <Regularcontainer bgcolor={"bg-white"} padding={"pb-20 pt-16"}>
      <div
        className="flex flex-row justify-between bg-[--aquamarine] w-full min-h-[40vh] gap-4"
      >
        <div className="relative flex flex-col gap-4 justify-between lg:w-2/3 lg:p-8 p-4">
          <div className="flex flex-col gap-4 z-10">
            <H2>Foglalj ingyenes, 30 perces konzultációt!</H2>
            <Paragraph className="lg:text-xl">
              Ha felkeltettem az érdeklődésedet és szívesen egyeztetnél a
              témádról, a coaching részleteiről, illetve bármilyen felmerülő
              kérdésedről, foglalj egy ingyenes, 30 perces konzultációt velem!
            </Paragraph>
          </div>
          <Primarybluebutton
            text={"Ingyenes konzultáció igénylés"}
            classname={'z-10'}
            onclick={toggleCalendly}
          />
        </div>
        <div className="lg:block hidden relative w-[30%]">
          <Image
            src="/eva/maincta3.webp"
            width={500}
            height={300}
            alt="Éva ül"
            className="absolute -bottom-0 z-20"
          />
          <div className="lg:block hidden w-full h-full relative overflow-hidden">
            <div className="absolute -bottom-1/2 left-2/3 -translate-x-1/2 bg-[--black] blur-3xl w-1/2 h-full z-10 opacity-30"></div>
          </div>
        </div>
      </div>
    </Regularcontainer>
  );
}
