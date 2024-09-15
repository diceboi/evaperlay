"use client";

import { motion } from "framer-motion";

export default function H1({ classname, initial, whileinview, transition, animation, children }) {
  return (
    <motion.h1
      className={`text-[42px] leading-[48px] sm:text-[48px] sm:leading-[56px] md:text-[50px] md:leading-[58px] lg:text-[56px] lg:leading-[64px] font-normal tracking-tighter ${classname}`}
      initial={initial || {y: -20, opacity: 0}}
      whileInView={whileinview || {y: 0, opacity: 1}}
      transition={transition || {duration: 0.8, type: "spring", bounce: 0.4}}
      animation={animation}
    >
      {children}
    </motion.h1>
  );
}