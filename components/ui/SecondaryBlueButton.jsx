"use client";

import Link from "next/link";

export default function Secondarybluebutton({ link, text, classname }) {
  return (
    
        <Link href={link} className={` ${classname}`}>
            <span className="z-10 relative link-1 transition-all">{text}</span>
        </Link>
    
  );
}
