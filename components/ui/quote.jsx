"use client"

import { motion } from "framer-motion"
import Paragraph from "./typo/Paragraph"

export default function Quote({ text, textcolor, width, textalign, bgcolor }) {
  return (
    <motion.div 
    id="quote"
    className={`relative ${textcolor} ${width} ${textalign} ${bgcolor} bg-opacity-10 backdrop-blur-sm px-2 py-1 after:absolute after:-bottom-16 after:-left-3 after:content-['”'] after:text-8xl after:font-medium after:text-[--aquamarine] after:z-[-1] after:opacity-50 before:absolute before:-top-5 before:-right-3 before:content-['“'] before:text-8xl before:font-medium before:text-[--aquamarine] before:z-[-1] before:opacity-50`}
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
    >
        <Paragraph>{text}</Paragraph>
    </motion.div>
  )
}
