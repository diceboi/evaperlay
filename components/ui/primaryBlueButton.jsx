"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Context, useContext } from "react"
import { CalendlyContext } from "@/app/CalendlyContext";

export default function Primarybluebutton({ link, text, linkclassname, buttonclassname, onclick }) {

  const {toggleCalendly, openPopup} = useContext(CalendlyContext)

  return (
    
      <motion.button
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
        className={`w-fit ${buttonclassname}`}
        onClick={onclick}
      >
        {link && (
          <Link href={link} className={`group px-5 py-3 bg-[--dukeblue] hover:bg-white font-medium transition-all duration-200 ${linkclassname}`}>
          <span className="group-hover:text-white lg:text-md text-sm transition-all">{text}</span>
          </Link>
        )}
        {!link && (
          <div className={`group px-5 py-3 bg-[--dukeblue] hover:bg-white font-medium transition-all duration-200 ${linkclassname}`}>
          <span className="text-white group-hover:text-black transition-all">{text}</span>
          </div>
        )}
        
      </motion.button>
    
  );
}

