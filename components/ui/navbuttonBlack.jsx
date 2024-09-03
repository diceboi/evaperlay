"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import Submenu from "./submenu";

export default function NavButtonBlack({ title, items, link, scrolled }) {

  return (
    <motion.li
      initial="initial"
      animate="initial"
      whileHover={"whileInView"}
      className="group flex flex-col relative justify-center h-16"
    >
        {link ? (
            <Link href={link}>
                <span className={`flex flex-nowrap items-center gap-2 py-2 group-hover:border-b-2 border-[--aquamarine] text-[--black]'}`}>
                {title}
                {items && (
                    <>
                    <TbChevronDown className="flex group-hover:hidden" />
                    <TbChevronUp className="group-hover:flex hidden" />
                    </>
                )}
                </span>
            </Link>
        ):(
            <span className={`flex flex-nowrap items-center gap-2 py-2 group-hover:border-b-2 border-[--aquamarine] text-[--black]`}>
                {title}
                {items && (
                    <>
                    <TbChevronDown className="flex group-hover:hidden" />
                    <TbChevronUp className="group-hover:flex hidden" />
                    </>
                )}
            </span>
        )}
      
      {items && <Submenu items={items} />}
    </motion.li>
  );
}
