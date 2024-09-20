"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import H3 from "./typo/H3";
import Paragraph from "./typo/Paragraph";
import Label from "./typo/Label";

export default function Coachingreferencetile({ image, name, from, comment }) {
  return (
    <motion.div
      className="flex flex-col gap-8 w-full"
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
    >
      <p
        className="relative referencetile flex flex-col gap-3 text-sm bg-white shadow-sm p-8"
        dangerouslySetInnerHTML={{ __html: comment }}
      />
      <div className="flex flex-nowrap items-center gap-8">
        <Image
          src={image}
          height={100}
          width={100}
          alt="Profilkép"
          className="rounded-full border-2 border-[--aquamarine] shadow-xl"
        />
        <div className="flex flex-col gap-4">
        <Paragraph classname={'font-bold'}>{name}</Paragraph>
        <Label classname="italic">{from}</Label>
        </div>
        
      </div>
    </motion.div>
  );
}
