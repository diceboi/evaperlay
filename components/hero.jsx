"use client";

import Bgcontainer from "./ui/bgContainer";
import { motion } from "framer-motion";
import Primarygreenbuton from "./ui/primaryGreenButon";
import { CalendlyContext } from "@/app/CalendlyContext";
import { useContext } from "react";
import H1 from "./ui/typo/H1";
import Paragraph from "./ui/typo/Paragraph";
import Image from "next/image";

export default function Hero() {

  const { openPopup, toggleCalendly } = useContext(CalendlyContext);

  return (
    <Bgcontainer
      bgimage={"/eva/beszelgeto.webp"}
      height={"min-h-[100vh]"}
      bgopacity={"bg-opacity-40"}
      bgcolor={"bg-black"}
      blendmode={"mix-blend-darken"}
    >
      <div className="relative flex flex-col justify-end items-center gap-8 h-[80vh] pb-20">
        <div className="flex flex-col lg:w-1/2">
          <H1
            classname="text-center text-white drop-shadow-lg"
            initial={{x: -100, opacity: 0}}
            whileinview={{x: 0, opacity: 1}}
          >
            Üzleti coaching
          </H1>
          <H1
            classname="text-center text-white drop-shadow-lg"
            initial={{x: 100, opacity: 0}}
            whileinview={{x: 0, opacity: 1}}
          >
            az igényeidre szabva
          </H1>
        </div>

        <Paragraph
          classname="text-white lg:w-1/2 text-center lg:block hidden"
        >
          Ha új célokat tűznél ki és ehhez egy bizalmon alapuló szakmai
          partnert keresel, foglalj velem egy ingyenes, 30 perces konzultációt!
        </Paragraph>
        <Paragraph
          classname="text-white lg:w-1/2 text-center lg:hidden block"
        >
          Ha új célokat tűznél ki és ehhez egy bizalmon alapuló szakmai
          partnert keresel, foglalj velem egy ingyenes,<br></br>30 perces konzultációt!
        </Paragraph>
        <Primarygreenbuton text={"Ingyenes konzultáció igénylés"} link={"/idopontfoglalas"} />
      </div>
    </Bgcontainer>
  );
}
