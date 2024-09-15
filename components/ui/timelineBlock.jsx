"use client"

import { motion } from "framer-motion";
import Paragraph from "./typo/Paragraph";
import H3 from "./typo/H3"

export default function TimelineBlock({ title, text, type }) {
  return (
    <div 
    className="relative flex flex-col gap-4 pl-12 lg:pl-28 py-8 "    
    >
        {type === 'start' &&(
            <div className="absolute w-1 h-full left-4 top-0 bg-gradient-to-b from-transparent to-[--dukeblue]"></div>
        )}
        {type === 'middle' &&(
            <div className="absolute w-1 h-full left-4 top-0 bg-[--dukeblue]"></div>
        )}
        {type === 'end' &&(
            <div className="absolute w-1 h-full left-4 top-0 bg-gradient-to-t from-transparent to-[--dukeblue]"></div>
        )}
      <H3 
      classname="bg-[--aquamarine] w-fit p-2 text-center shadow-md"
      initial={{y: -20, opacity: 0}}
      whileinview={{y: 0, opacity: 1}}
      transition={{duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2}}
      >
        {title}
      </H3>
      <Paragraph
      initial={{y: -20, opacity: 0}}
      whileinview={{y: 0, opacity: 1}}
      transition={{duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2}}
      >
        {text}
      </Paragraph>
      <motion.div 
      className="absolute w-8 h-8 bg-[--aquamarine] left-[2px] lg:top-[40px] top-[36px] -translate-y-1/2 rounded-full"
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2}}
      ></motion.div>
    </div>
  );
}
