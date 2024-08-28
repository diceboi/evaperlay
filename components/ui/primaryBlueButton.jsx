"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Primarybluebutton({ link, text, classname }) {
  return (
    
      <motion.button
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 0.2 }}
        className={`group w-fit px-5 py-3 bg-[--dukeblue] hover:bg-white font-medium transition-all duration-200 ${classname}`}
      >
        <Link href={link} className={``}>
        <span className="text-white group-hover:text-black transition-all">{text}</span>
        </Link>
      </motion.button>
    
  );
}
