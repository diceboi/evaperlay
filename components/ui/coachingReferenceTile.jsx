"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Coachingreferencetile({ image, name, from, comment }) {
  return (
    <motion.div
      className="flex flex-col gap-8 w-full bg-white p-8"
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
    >
      <div className="flex flex-col gap-2">
        <Image
          src={image}
          height={100}
          width={100}
          alt="Profilkép"
          className="rounded-full"
        />
        <h3>{name}</h3>
        <p className="italic text-sm">{from}</p>
      </div>
      <p
        className="flex flex-col gap-3 text-sm"
        dangerouslySetInnerHTML={{ __html: comment }}
      />
    </motion.div>
  );
}
