"use client"

import { motion } from "framer-motion";
import { MdOutlineHorizontalRule } from "react-icons/md"
import Paragraph from "./Paragraph";

export default function SubTitle({ children, classname }) {
  return (
    <motion.div
      className={`flex flex-nowrap items-center gap-2 ${classname}`}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
    >
      <MdOutlineHorizontalRule className="min-w-8 min-h-8 text-[--vistablue]" />
      <Paragraph classname={'tracking-widest uppercase font-semibold'}>{children}</Paragraph>
    </motion.div>
  );
}
