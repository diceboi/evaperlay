"use client";

import Image from "next/image";
import Logocarousel from "./logocarousel";
import { motion } from "framer-motion";
import { TbChevronRight } from "react-icons/tb";

export default function Hero2() {
  return (
    <section className="relative bg-[url('/noise.png')] bg-repeat">
      <div className="container relative flex lg:flex-row flex-col min-h-[100vh] m-auto gap-20">
        <div className="flex flex-col justify-center gap-4 w-1/2">
          <div className="flex flex-row items-baseline gap-4">
            <motion.div
              className="relative w-fit h-fit"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
            >
              <h1 className="relative text-7xl font-black text-[--dukeblue]">
                Perlay Éva
              </h1>
              <motion.div
                initial={{ x: "100%", opacity: 0, zIndex: -10 }}
                whileInView={{ x: "0%", opacity: 1 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
                className="absolute bottom-0 right-0 h-5 w-full bg-[--aquamarine]"
              ></motion.div>
            </motion.div>
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 100,
                delay: 0.4,
              }}
              className="text-4xl font-bold text-[--dukeblue]"
            >
              vagyok
            </motion.span>
          </div>
          <motion.div
            className="grid grid-cols-2 gap-2 text-[--dukeblue] text-md font-semibold pt-10"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 100,
              delay: 0.8,
            }}
          >
            <div className="flex flex-row gap-2 bg-white p-1 items-center">
              <TbChevronRight className="block min-w-10 h-10 text-[--aquamarine]"/>
              <p>Diplomás üzleti coach</p>
            </div>
            <div className="flex flex-row gap-2 bg-white p-1 items-center">
              <TbChevronRight className="block min-w-10 h-10 text-[--aquamarine]"/>
              <p>Partnerkapcsolati vezető és tréner (Egyenlítő Alapítvány)</p>
            </div>
            <div className="flex flex-row gap-2 bg-white p-1 items-center">
              <TbChevronRight className="block min-w-10 h-10 text-[--aquamarine]"/>
              <p>Képzésben lévő mentálhigiénés szakember</p>
            </div>
            <div className="flex flex-row gap-2 bg-white p-1 items-center">
              <TbChevronRight className="block min-w-10 h-10 text-[--aquamarine]"/>
              <p>+15 éves nagyvállalati háttér</p>
            </div>
          </motion.div>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 100,
              delay: 1.2,
            }}
            className="font-medium text-lg py-10"
          >
            Üzleti coachként abban tudlak támogatni, hogy rátalálj azokra a
            szakmai utakra, ahol elégedett, hiteles és kiegyensúlyozott lehetsz.
            Hiszem, hogy mindenkinek jár egy szerethető munkahely és egy teljes
            élet.
          </motion.p>
          <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 100,
            delay: 1.6,
          }}
          className="flex flex-row gap-4"
          >
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
              30 perc ingyen tanácsadás
            </motion.button>
            <motion.button
              className="text-    xl py-2 px-4 text-[--dukeblue] hover:text-white font-semibold border border-[--dukeblue] bg-transparent hover:bg-[--dukeblue-dark] transition-all duration-100 w-fit"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 100,
              }}
            >
              Tovább
            </motion.button>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0, bottom: -70 }}
          whileInView={{ scale: 1, opacity: 1, bottom: -70 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
          className="relative w-1/2"
        >
          <Image
            src="/eva/gondolkodo.webp"
            fill
            style={{ objectFit: "contain" }}
            alt="Éva gondolkodik"
            className=""
          />
        </motion.div>
      </div>
      <motion.div
        className="w-[50vw] h-[50vw] absolute bottom-0 left-0 bg-[--mint] rounded-full blur-3xl z-[-1] "
        initial={{
          opacity: 0,
          bottom: 0,
          left: 0,
          zIndex: -1,
          translateX: "-50%",
          translateY: "50%",
        }}
        whileInView={{
          opacity: 1,
          bottom: 0,
          left: 0,
          zIndex: -1,
          translateX: "-50%",
          translateY: "50%",
        }}
        transition={{ duration: 0.2, type: "spring" }}
      ></motion.div>
      <motion.div
        className="w-[50vw] h-[50vh] absolute top-0 right-0 bg-[--vistablue] rounded-full blur-3xl z-[-1] opacity-50"
        initial={{
          opacity: 0,
          top: 0,
          right: 0,
          zIndex: -1,
          translateX: "50%",
          translateY: "-50%",
        }}
        whileInView={{
          opacity: 0.5,
          top: 0,
          right: 0,
          zIndex: -1,
          translateX: "50%",
          translateY: "-50%",
        }}
        transition={{ duration: 0.2, type: "spring" }}
      ></motion.div>
    </section>
  );
}
