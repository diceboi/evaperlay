"use client";

import Image from "next/image";
import Logocarousel from "./logocarousel";
import { motion } from "framer-motion";
import { TbChevronRight } from "react-icons/tb";

export default function Hero3() {
  return (
    <section className="relative bg-[url('/noise.png')] bg-repeat">
      <div className="container relative flex lg:flex-row flex-col m-auto gap-20 min-h-[60vh]">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, }}
          whileInView={{ scale: 1, opacity: 1, }}
          transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
          className="relative w-1/2"
        >
          <Image
            src="/eva/ulo.webp"
            fill
            style={{ objectFit: "contain" }}
            alt="Éva gondolkodik"
          />
        </motion.div>
        <div className="flex flex-col gap-8 w-1/2 self-center">
            <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 100,
            }}
            className="font-bold text-4xl"
            >
                Röviden rólam.
            </motion.h2>
            <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.2,
                    type: "spring",
                    stiffness: 100,
                }}
                className="font-medium text-lg"
                >
                Az Egyenlítő Alapítvány partnerkapcsolati vezetőjeként és trénereként sokszínű és befogadó csapatok kialakításában segítem a hozzám forduló cégeket.
            </motion.p> 
            <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.2,
                    type: "spring",
                    stiffness: 100,
                }}
                className="font-medium text-lg"
                >
                Fókuszterületeim az önazonos munkavégzés és kommunikáció, a mentális egészségmegőrzés, a munkahelyi egyenlőség, a befogadó vezetés és az élhető szervezeti kultúra kialakítása.
            </motion.p>   
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
                Bővebben
            </motion.button>
        </div>
        
        
        </div>
        <motion.div
        className="w-[30vw] h-[30vh] absolute bg-[--vistablue] rounded-full blur-3xl z-[-1] opacity-50"
        initial={{
          opacity: 0,
          bottom: 50,
          right: 0,
          zIndex: -1,
          translateX: "50%",
          translateY: "50%",
        }}
        whileInView={{
          opacity: 0.5,
          bottom: 0,
          right: 0,
          zIndex: -1,
          translateX: "50%",
          translateY: "50%",
        }}
        transition={{ duration: 0.2, type: "spring" }}
      ></motion.div>
    </section>
  );
}
