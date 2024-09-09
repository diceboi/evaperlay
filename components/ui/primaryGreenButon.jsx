"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Primarygreenbuton({ link, text, linkclassname, buttonclassname }) {
  return (
    
      <motion.button
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
        className={`w-fit ${buttonclassname}`}
      >
        <Link href={link} className={`group px-5 py-3 bg-[--aquamarine] hover:bg-[--dukeblue] font-medium transition-all duration-200 ${linkclassname}`}>
        <span className="group-hover:text-white lg:text-md text-sm transition-all">{text}</span>
        </Link>
      </motion.button>
    
  );
}
