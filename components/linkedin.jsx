"use client";

import React from "react";
import Regularcontainer from "./ui/regularcontainer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Logocarousel from "./logocarousel";
import Primarygreenbuton from "./ui/primaryGreenButon";
import { MdOutlineHorizontalRule } from "react-icons/md";

export default function Linkedin() {
  return (
    <Regularcontainer bgcolor={"bg-white"} padding={'py-32'}>
      <div className="flex flex-col items-center gap-16">
      <div className="flex flex-col gap-4">
        <h4
          className="flex flex-nowrap items-center justify-center gap-2"
        >
          <MdOutlineHorizontalRule className="min-w-8 min-h-8" />
          Blog
        </h4>
        <h2 className="text-center">Szakmai tartalmaim</h2>
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="flex flex-col gap-8 lg:flex-row rounded-3xl w-full"
        >
          <div className="relative flex flex-col items-center justify-between w-1/3 p-8 rounded-xl m-auto min-h-[70vh]">
            <Image
              src="/eva/linkedin.webp"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              alt="Éva ül"
              className="w-full rounded-xl"
            />
            <div className="absolute top-4 lg:top-[50px] -right-4">
              <motion.p
                id="bubble-left"
                className="relative text-sm font-semibold w-48 bg-[--white] p-2 shadow-xl"
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.4,
                  delay: 0.4,
                }}
              >
                Kövess be LinkedIn-en és olvass bele szakmai tartalmaimba.
              </motion.p>
            </div>

            <Link
              href="https://www.linkedin.com/in/evaperlay"
              target="_blank"
              className="w-fit absolute bottom-16"
            >
              <button className="bg-[#0077b5] pl-2 pr-2 py-1 text-white font-semibold flex flex-nowrap items-center gap-2 hover:gap-3 transition-all">
                <FaLinkedin className="w-8 h-full" />
                <p>LinkedIn</p>
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-8 w-2/3">
            <div className="col-span-1 row-span-2 bg-[--white]">
              <span>Blog 1</span>
            </div>
            <div className="col-span-1 row-span-1 bg-[--white]">
              <span>Blog 2</span>
            </div>
            <div className="col-span-1 row-span-1 bg-[--white]">
              <span>Blog 3</span>
            </div>
          </div>
        </motion.div>
        <Primarygreenbuton text={'További olvasmányok'} link={'/blog'} classname={'m-auto'}/>
        <div className="flex flex-col w-full">
          <h3 className="mt-32 -mb-16 pr-8 z-10 w-full text-center">
            Partnereim, akik már bizalmat szavaztak nekem:
          </h3>
          <Logocarousel />
        </div>
      </div>
    </Regularcontainer>
  );
}
