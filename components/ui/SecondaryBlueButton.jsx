"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Secondarybluebutton({ link, text, classname }) {
  return (
    
        <Link href={link} className={`link-1`}>
            <span className="z-10 relative ">{text}</span>
            
        </Link>
    
  );
}
