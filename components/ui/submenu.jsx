"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const dropdown = {
  initial: { opacity: 0, y: -10, display: "none" },
  whileInView: { opacity: 1, y: 0, display: "flex" },
  exit: { opacity: 0, y: -10, display: "none" },
  transition: { duration: 0.2 },
};

export default function Submenu({ items }) {
  const itemsWithIcons = items.filter(item => item.icon);
  const itemsWithoutIcons = items.filter(item => !item.icon);

  return (
    <motion.ul
      variants={dropdown}
      className="flex flex-row absolute top-16 -left-1 p-4 bg-[--white] shadow-xl rounded-3xl gap-4 w-max text-sm"
    >
      {itemsWithIcons.map((item, index) => (
        <Link href="/" key={index}>
        <li className="flex flex-col border border-neutral-300 p-2 rounded-2xl h-32 w-32">
          <Image
            src={item.icon}
            width={75}
            height={75}
            alt={item.title}
          />
          <span>{item.title}</span>
        </li>
        </Link>
      ))}
      {itemsWithoutIcons.length > 0 && (
        <div className="flex flex-col gap-4">
          {itemsWithoutIcons.map((item, index) => (
            <Link href="/" key={index}>
                <li>
              <span>{item.title}</span>
            </li>
            </Link>
          ))}
          
        </div>
      )}
    </motion.ul>
  );
}
