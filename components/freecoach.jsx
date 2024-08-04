"use client";

import { motion } from "framer-motion";
import Regularcontainer from "./ui/regularcontainer";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Freecoach() {
  return (
    <section className="relative bg-[url('/noise.png')] bg-repeat">
      <div className="container relative flex lg:flex-row flex-col gap-20">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="flex flex-col gap-8 lg:gap-20 lg:flex-row bg-[--aquamarine] min-h-[30vh] rounded-3xl p-8 shadow-xl"
      >
        <div className="flex flex-col justify-between w-1/2">
          <div className="flex flex-col gap-2">
           <h2 className="text-xl font-bold">
            Foglalj egy ingyenes,
            </h2>
            <h2 className="text-xl font-black text-[--dukeblue]">
            30 PERCES konzultációt velem!
            </h2> 
          </div>
          <motion.button 
                className="text-    xl py-2 px-4 text-white font-semibold bg-[--dukeblue] hover:bg-[--dukeblue-dark] transition-all duration-100 w-fit"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.2,
                    type: "spring",
                    stiffness: 100,
                }}
            >
                Lefoglalom
            </motion.button>
        </div>
        <div className="flex flex-col items-end justify-between relative w-1/2">
          <Image
            src="/eva/ulo.webp"
            width={500}
            height={300}
            alt="Éva ül"
            className="absolute -bottom-8 right-1/2 h-[150%] w-auto"
          />
          <motion.p 
          id="bubble-left" 
          className="relative text-sm font-semibold w-48 bg-[--white] rounded-xl p-2 shadow-xl"
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay:0.4}}
          >
            Kövess be LinkedIn-en és olvass bele szakmai tartalmaimba.
          </motion.p>
          <Link
            href="https://www.linkedin.com/in/evaperlay"
            target="_blank"
            className="w-fit"
          >
            <button className="bg-[#0077b5] pl-2 pr-2 py-1 text-white font-semibold flex flex-nowrap items-center gap-2 hover:gap-3 transition-all ">
              <FaLinkedin className="w-8 h-full" />
              <p>LinkedIn</p>
            </button>
            
          </Link>
          
        </div>
      </motion.div>
    </div>
    </section>
  );
}
