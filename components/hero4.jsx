"use client";

import Image from "next/image";
import Logocarousel from "./logocarousel";
import { motion } from "framer-motion";
import { TbChevronRight } from "react-icons/tb";
import Freecoach from "./freecoach";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Hero4() {
  return (
    <section className="bg-[url('/noise.png')] bg-repeat">
      <div className="container flex flex-col justify-center relative m-auto min-h-[80vh]">
        <motion.div
        className="relative flex lg:flex-row flex-col items-center gap-20 bg-[--aquamarine] p-8"
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
        >
          <div className="flex flex-col justify-between w-1/2 self-center h-[40vh]">
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
              Kezdjük el közösen!
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
              Ha megérett benned az elhatározás, hogy új célokat tűzz ki, és
              ehhez egyenrangú szakmai partnert keresel, akivel olyan bizalommal
              tudnál együtt dolgozni, hogy beleférne a feltétel nélküli
              elfogadás, a sebezhetőség, az érzelmek megmutatása, az őszinteség,
              a nyitottság és a humor is, akkor mindenképp foglalj velem egy
              ingyenes, 30 perces konzultációt!
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
              Lefoglalom
            </motion.button>
          </div>
          <div className="flex flex-col items-end justify-between relative w-1/2 h-[40vh]">
            <Image
                src="/eva/ulo.webp"
                width={500}
                height={500}
                alt="Éva ül"
                className="absolute right-1/3 top-1/2 -translate-y-1/2 -mt-12 h-[60vh] w-auto"
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
