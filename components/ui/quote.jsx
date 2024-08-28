"use client"

import { motion } from "framer-motion"

export default function Quote({ text, textcolor, width, textalign }) {
  return (
    <motion.p 
    id="quote"
    className={`relative ${textcolor} ${width} ${textalign} text-xl bg-white bg-opacity-10 backdrop-blur-sm px-2 py-1 after:absolute after:-top-5 after:-left-3 after:content-['”'] after:text-8xl after:font-medium after:text-[--aquamarine] after:z-[-1] after:opacity-50`}
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
    >
        {text}
    </motion.p>
  )
}
