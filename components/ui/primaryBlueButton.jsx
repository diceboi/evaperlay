"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BtnText from "./typo/BtnText";

export default function Primarygreenbuton({
  link,
  text,
  classname,
  onclick,
}) {
  return (
    <motion.button
      initial={{
        opacity: 0,
        backgroundColor: "var(--dukeblue)",
        borderRadius: "3px",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 5px, rgba(0, 0, 0, 0.1) 0px 7px 13px -3px, var(--dukeblueborder) 0px -3px 0px inset",
      }}
      whileInView={{ opacity: 1 }}
      whileHover={{
        backgroundColor: "var(--white)",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 20px, rgba(0, 0, 0, 0.1) 0px 7px 13px -3px, rgba(0, 0, 0, 0.1) 0px -5px 0px inset",
        borderRadius: "5px",
      }}
      transition={{ duration: 0.2, type: "ease-out"}}
      className={`group w-fit font-medium ${classname}`}
      onClick={onclick}
    >
      {link && (
        <Link href={link}>
          <BtnText classname="px-5 py-3 text-white group-hover:text-black w-full h-full transition-all duration-200">
            {text}
          </BtnText>
        </Link>
      )}
      {!link && (
        <BtnText classname="px-5 py-3 text-white lg:group-hover:text-black w-full h-full transition-all duration-200">
          {text}
        </BtnText>
      )}
    </motion.button>
  );
}
