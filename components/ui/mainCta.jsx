"use client"

import Image from "next/image";
import Regularcontainer from "./regularcontainer";
import Primarybluebutton from "./primaryBlueButton";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CalendlyContext } from "@/app/CalendlyContext";
import H2 from "./typo/H2";
import Paragraph from "./typo/Paragraph";

export default function MainCta() {

  const { toggleCalendly } = useContext(CalendlyContext)

  return (
    <Regularcontainer bgcolor={'bg-white'} padding={'pb-20 pt-16'}>
        <motion.div 
        className="flex flex-row justify-between bg-[--aquamarine] w-full min-h-[40vh] gap-4"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
        >
          <div className="flex flex-col gap-4 justify-between w-2/3  p-8">
            <div className="flex flex-col gap-4">
                <H2>Foglalj ingyenes 30 perces konzultációt!</H2>
                <Paragraph className="text-xl">Ha felkeltettem az érdeklődésedet és szívesen egyeztetnél a témádról, a coaching részleteiről, illetve bármilyen felmerülő kérdésedről, foglalj egy ingyenes, 30 perces konzultációt velem!</Paragraph>
            </div>
            <Primarybluebutton text={'Ingyenes konzultáció igénylés'} link={'/idopontfoglalo'}/>
          </div>
          <div className="relative w-1/3">
          <Image
            src="/eva/maincta3.webp"
            width={500}
            height={300}
            alt="Éva ül"
            className="absolute -bottom-0 z-20"
          />
          <div className="w-full h-full relative overflow-hidden">
            <div className="absolute -bottom-1/2 left-2/3 -translate-x-1/2 bg-[--black] blur-3xl w-1/2 h-full z-10 opacity-30"></div>
          </div>
          </div>
          
        </motion.div>
    </Regularcontainer>
  )
}
