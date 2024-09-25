"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
import { MobileMenuContext } from "@/app/MobileMenuContext";

export default function MobileSubmenu({ items }) {

    const { mobileMenuOpen, toggleMobileMenu } = useContext(MobileMenuContext)

  return (
    <ul
      className={`flex flex-col py-4 gap-4 backdrop-blur-lg w-max text-sm max-w-[200px] overflow-hidden`}
    >
      {items.map((item, index) => (
        <Link href={item.link} onClick={toggleMobileMenu} key={index} className="hover:border-b hover:border-white text-[--black] hover:text-black w-fit underline">
        <li>
        <span>{item.title}</span>
        </li>
        </Link>
      ))}
    </ul>
  );
}
