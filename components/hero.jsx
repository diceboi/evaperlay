"use client";

import Bgcontainer from "./ui/bgContainer";
import { motion } from "framer-motion";
import Primarygreenbuton from "./ui/primaryGreenButon";
import { CalendlyContext } from "@/app/CalendlyContext";
import { useContext } from "react";

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
      <div className="relative flex flex-col justify-end items-center gap-8 h-[80vh]">
        <div className="flex flex-col lg:w-1/2">
          <motion.h1
            className="text-center text-white drop-shadow-lg "
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            Üzleti coaching
          </motion.h1>
          <motion.h1
            className="text-center text-white drop-shadow-lg "
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            az igényeidre szabva.
          </motion.h1>
        </div>

        <div className="absolute top-[10%] lg:right-1/2 -right-8">
          <motion.p
            className="relative text-sm text-white font-semibold w-48 bg-[#ffffff49] p-2 shadow-xl bubble-left-transparent lg:bubble-right-transparent"
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.4,
              delay: 0.4,
            }}
          >
            Hogy helyedre kerülj a munkádban, a munka pedig az életedben.
          </motion.p>
        </div>

        <motion.p
          className="text-white lg:w-1/2 text-center lg:text-lg"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          Ha új célokat tűznél ki, és ehhez egy bizalmon alapuló szakmai
          partnert keresel, foglalj velem egy ingyenes, 30 perces konzultációt!
        </motion.p>
        <Primarygreenbuton text={"Ingyenes konzultáció igénylés"} link={"/"} onclick={toggleCalendly} />
      </div>
    </Bgcontainer>
  );
}
