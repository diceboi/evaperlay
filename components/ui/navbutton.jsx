"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import Submenu from "./submenu";
import MobileSubmenu from "./mobileSubMenu";
import { useState, useContext } from "react";
import { MobileMenuContext } from "@/app/MobileMenuContext";

export default function NavButton({ title, items, link, scrolled, isOpen, toggleSubMenu }) {

  const { toggleMobileMenu } = useContext(MobileMenuContext);

  return (
    <motion.li
      initial="initial"
      animate="initial"
      whileHover={"whileInView"}
      className="group flex lg:flex-col relative lg:justify-center lg:h-16"
    >
      {link ? (
        <Link href={link} onClick={toggleMobileMenu}>
          <span
            className={`flex flex-nowrap items-center gap-2 py-2 lg:group-hover:border-b-2 lg:border-[--aquamarine] ${
              scrolled ? "text-[--black]" : "lg:text-[--white] text-[--black]"
            }`}
          >
            {title}
            {items && (
              <>
                <TbChevronDown className="flex group-hover:hidden" />
                <TbChevronUp className="group-hover:flex hidden" />
              </>
            )}
          </span>
        </Link>
      ) : (
        <div
          className={`flex flex-col items-start gap-0 py-2 lg:group-hover:border-b-2 lg:border-[--aquamarine] ${
            scrolled ? "text-[--black]" : "lg:text-[--white] text-[--black]"
          }`}
        >
          <div className="flex flex-nowrap gap-2 items-center" onClick={toggleSubMenu}>
            {title}
            {items && (
              <>
              <div className="lg:hidden block">
                {!isOpen? (
                  <TbChevronDown className={`flex lg:group-hover:hidden text-[--aquamarine]`} />
                ):(
                  <TbChevronUp className={`group-hover:flex lg:hidden text-[--aquamarine]`} />
                )}
              </div>
              <div className="hidden lg:block">
                <TbChevronDown className={`flex group-hover:hidden text-[--aquamarine]`} />
                <TbChevronUp className={`group-hover:flex hidden text-[--aquamarine]`} />
              </div>
              </>
            )}
          </div>

          {items && (
            <>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="flex lg:hidden flex-col overflow-hidden"
              >
                <MobileSubmenu items={items} />
              </motion.div>
            </>
          )}
        </div>
      )}

      {items && <Submenu items={items} />}
    </motion.li>
  );
}
