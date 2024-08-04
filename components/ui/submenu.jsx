"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const dropdown = {
  initial: { opacity: 0, y: -10, display: "none" },
  whileInView: { opacity: 1, y: 0, display: "flex" },
  exit: { opacity: 0, y: -10, display: "none" },
  transition: { duration: 0.2 },
};

export default function Submenu({ items }) {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.ul
      variants={dropdown}
      className={`flex flex-col absolute ${isScrolled ? 'top-14' : 'top-20'} -left-1 p-4 gap-2 bg-[--dukeblue] backdrop-blur-lg w-max text-sm`}
    >
      {items.map((item, index) => (
        <Link href="/" key={index} className="h-6 hover:border-b hover:border-[--white] text-[--vistablue] hover:text-[--white] w-fit transition-all duration-200">
        <li>
        <span>{item.title}</span>
        </li>
        </Link>
      ))}
    </motion.ul>
  );
}
