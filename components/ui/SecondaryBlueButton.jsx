"use client";

import Link from "next/link";
import Paragraph from "./typo/Paragraph";

export default function Secondarybluebutton({ link, text, classname, onclick }) {
  return (
    <>
      {link && (
        <Link href={link} className={` ${classname}`}>
          <Paragraph classname="z-10 relative link-1 transition-all">{text}</Paragraph>
        </Link>
      )}
      {!link && (
        <button onClick={onclick} className={` ${classname}`}>
          <Paragraph classname="z-10 relative link-1 transition-all">{text}</Paragraph>
        </button>
      )}
    </>
  );
}
