"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import SubMenu from "./SubMenu";

export default function NavButton({ title, items, link }) {
  return (
    <motion.li
      initial="initial"
      animate="initial"
      whileHover={"whileInView"}
      className="group flex flex-col relative justify-center h-16"
    >
        {link ? (
            <Link href="/">
                <span className="flex flex-nowrap items-center gap-2 px-4 py-2 group-hover:bg-white rounded-2xl transition-all">
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
            <span className="flex flex-nowrap items-center gap-2 px-4 py-2 group-hover:bg-white rounded-2xl transition-all">
                {title}
                {items && (
                    <>
                    <TbChevronDown className="flex group-hover:hidden" />
                    <TbChevronUp className="group-hover:flex hidden" />
                    </>
                )}
                </span>
        )}
      
      {items && <SubMenu items={items} />}
    </motion.li>
  );
}
