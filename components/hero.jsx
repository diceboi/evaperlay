"use client"

import Image from "next/image"
import Logocarousel from "./logocarousel";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="relative flex lg:flex-row flex-col min-h-[100vh] ">
        <div className="flex flex-col lg:w-1/2 justify-center items-center z-10">
          <div className="flex flex-col justify-end gap-20 xl:w-3/4 w-4/5 h-[100vh]">
            <div className="flex flex-col gap-8">
              <h2 className="text-xl uppercase font-medium tracking-widest bg-[--mint] w-fit px-2 py-1 rounded-full">
                Business Coaching
              </h2>
              <h1 className="text-6xl font-bold">
                Coaching, Tréning személyre szabva
              </h1>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-8 w-fit self-start">
              <h3 className="text-2xl font-medium">
                Igényelj{" "}
                <span className="uppercase font-black bg-[--aquamarine] px-2 py-1">
                  30 perces
                </span>{" "}
                ingyenes tanácsadást.
              </h3>
              <div className="flex flex-row justify-between gap-4 w-full">
                <input
                  type="text"
                  className=" rounded-full text-2xl py-2 px-4 bg-white w-full shadow-special"
                  placeholder="Email cím"
                />
                <button className="text-2xl py-2 px-4 text-white font-bold bg-[--dukeblue] hover:bg-[--dukeblue-dark] rounded-full transition-all duration-100">
                  Igénylés
                </button>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-[--aquamarine] to-[--vistablue]"></div>
            <Logocarousel />
          </div>
        </div>

        <div className="flex flex-col lg:w-1/2 h-[100vh] justify-center items-center gap-16 z-10">
          <div className="relative flex flex-col items-center justify-center gap-8 w-full h-full bg-[--mint]">
            <Image
              src="/eva/gondolkodo.webp"
              alt="Éva tervez"
              fill
              style={{ objectFit: "contain" }}
              placeholder="blur"
              blurDataURL="/eva/gondolkodo.webp"
              className="mt-20 z-20"
            />
            <div className="flex flex-col justify-center items-start w-full h-1/2 pl-10">
                <motion.p 
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4, }}
                id="slogen" 
                className="relative w-1/3 text-xl z-0 px-4 py-2 bg-[--white] rounded-3xl font-medium mt-40 shadow-special"
                >
                    Hogy helyedre kerülj a munkádban, a munka pedig az életedben!
                </motion.p>
            </div>
            <div className="relative flex flex-col justify-center items-center w-full h-1/2 z-30">
                <motion.div 
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.4 }}
                className="absolute bottom-24 left-16 rounded-3xl px-4 py-2 text-sm text-center backdrop-blur-sm bg-[#ffffff60] w-fit"
                >
                    <h4 className="mix-blend-luminosity">+15 év multinacionális háttér</h4>
                </motion.div>
                <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4,  delay: 0.8 }}
                className="absolute bottom-40 right-16 rounded-3xl px-4 py-2 text-sm text-center backdrop-blur-sm bg-[#ffffff60] w-fit"
                >
                    <h4 className="mix-blend-luminosity">FMCG márkamenedzsment tapasztalat</h4>
                </motion.div>
                <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4,  delay: 1.2 }}
                className="absolute bottom-1/2 left-1/4 rounded-3xl px-4 py-2 text-sm text-center backdrop-blur-sm bg-[#ffffff60] w-fit"
                >
                    <h4 className="mix-blend-luminosity">+10 év vezetői tapasztalat</h4>
                </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute w-[500px] h-[500px] rounded-full bg-[--mint] blur-3xl z-0 opacity-50"></div>
        <div className="absolute w-[800px] h-[800px] -bottom-1/2 right-[0%] rounded-full bg-[--vistablue] blur-3xl z-10 opacity-30"></div>
      </div>
    </section>
  );
}
