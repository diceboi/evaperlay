"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BtnText from "./typo/BtnText";
import { FaLinkedin } from "react-icons/fa";

export default function LinkedInButton() {
  return (
    <motion.button
      initial={{
        opacity: 0,
        backgroundColor: "#0077b5",
        borderRadius: "3px",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 5px, rgba(0, 0, 0, 0.1) 0px 7px 13px -3px, bg-[#0077b5] 0px -3px 0px inset",
      }}
      whileInView={{ opacity: 1 }}
      whileHover={{
        backgroundColor: "var(--white)",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 20px, rgba(0, 0, 0, 0.1) 0px 7px 13px -3px, rgba(0, 0, 0, 0.1) 0px -5px 0px inset",
        borderRadius: "5px",
      }}
      transition={{ duration: 0.2, type: "ease-out"}}
      className="group w-fit font-medium z-10"
    >
        <Link href={'https://www.linkedin.com/in/evaperlay'}>
          <BtnText classname="flex flex-nowrap gap-2 items-center px-5 py-3 text-white group-hover:text-black w-full h-full transition-all duration-200">
            <FaLinkedin />
            Linkedin
          </BtnText>
        </Link>

    </motion.button>
  );
}
