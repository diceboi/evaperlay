"use client"

import { motion } from "framer-motion"
import Regularcontainer from "./ui/regularcontainer"

import { GrLineChart } from "react-icons/gr";
import { FaStreetView, FaPersonRays, FaPersonWalkingDashedLineArrowRight, FaPersonWalkingArrowLoopLeft, FaPeopleRoof } from "react-icons/fa6";
import { TbStairsUp } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";

export default function Whyus() {
  return (
    <Regularcontainer bgcolor={'bg-[--white]'}>
        <div className="flex flex-col gap-20 text-center">
          <h2>
            Vedd fel velem a kapcsolatot, ha...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-rows-2 gap-8">
            <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.4, }}
            className="flex flex-col justify-center items-center gap-4 p-8 bg-white   w-full min-h-72 hover:shadow-xl transition-all duration-500 rounded-xl">
              <div className="flex flex-col justify-center items-center h-1/3 w-full">
                <GrLineChart className="min-w-10 min-h-10 text-[--dukeblue]"/>
              </div>
              <div className="flex flex-col justify-start items-center gap-4 h-1/2 w-full">
                <h3 className=" ">Fejlődésre vágysz</h3>
                <p className="text-sm  text-neutral-500">
                  Többet szeretnél kihozni magadból, új célokat megvalósítani.
                </p>
              </div>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.4, }}
            className="flex flex-col justify-center items-center gap-4 p-8 bg-white w-full min-h-48 hover:shadow-xl transition-all duration-500 rounded-xl">
              <div className="flex flex-col justify-center items-center h-1/3 w-full">
                <FaStreetView className="min-w-10 min-h-10 text-[--dukeblue]"/>
              </div>
              <div className="flex flex-col justify-start items-center gap-4 h-1/2 w-full">
                <h3 className=" ">Új perspektíva kell</h3>
                <p className="text-sm  text-neutral-500">
                  Hasznos kérdésekre, eszköztárra vagy más nézőpontra lenne
                  szükséged.
                </p>
              </div>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.4, }}
            className="flex flex-col justify-center items-center gap-4 p-8 bg-white w-full min-h-48  hover:shadow-xl transition-all duration-500 rounded-xl">
              <div className="flex flex-col justify-center items-center h-1/3 w-full">
                <TbStairsUp className="min-w-10 min-h-10 text-[--dukeblue]"/>
              </div>
              <div className="flex flex-col justify-start items-center gap-4 h-1/2 w-full">
                <h3 className=" ">Szintet lépnél</h3>
                <p className="text-sm  text-neutral-500">
                  Jobb vezetővé, munkatárssá, vállalkozóvá akarsz válni vagy
                  felgyorsítanád a fejlődésedet egy új helyzetben.
                </p>
              </div>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.4, }}
            className="flex flex-col justify-center items-center gap-4 p-8 bg-white w-full min-h-48 hover:shadow-xl transition-all duration-500 rounded-xl">
              <div className="flex flex-col justify-center items-center h-1/3 w-full">
                <FaPersonRays className="min-w-10 min-h-10 text-[--dukeblue]"/>
              </div>
              <div className="flex flex-col justify-start items-center gap-4 h-1/2 w-full">
                <h3 className=" ">Magadat képviselnéd</h3>
                <p className="text-sm  text-neutral-500">
                  Fontossá váltak a saját értékeid és igényeid, de még nem tudod,
                  hogyan demonstráld őket.
                </p>
              </div>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.4, }}
            className="flex flex-col justify-center items-center gap-4 p-8 bg-white w-full min-h-48 hover:shadow-xl transition-all duration-500 rounded-xl">
              <div className="flex flex-col justify-center items-center h-1/3 w-full">
                <FaPersonWalkingDashedLineArrowRight className="min-w-10 min-h-10 text-[--dukeblue]"/>
              </div>
              <div className="flex flex-col justify-start items-center gap-4 h-1/2 w-full">
                <h3 className=" ">Elakadtál</h3>
                <p className="text-sm  text-neutral-500">
                  Új lendület kellene a továbblépéshez vagy egy konkrét kihívással
                  szembenézni.
                </p>
              </div>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.4, }}
            className="flex flex-col justify-center items-center gap-4 p-8 bg-white w-full min-h-48 hover:shadow-xl transition-all duration-500 rounded-xl">
              <div className="flex flex-col justify-center items-center h-1/3 w-full">
                <FaPersonWalkingArrowLoopLeft className="min-w-10 min-h-10 text-[--dukeblue]"/>
              </div>
              <div className="flex flex-col justify-start items-center gap-4 h-1/2 w-full">
                <h3 className=" ">Változásra van szükséged</h3>
                <p className="text-sm  text-neutral-500">
                  Nem találod a helyed, az értelmet a munkádban és nincs időd a
                  számodra fontos dolgokra.
                </p>
              </div>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.4, }}
            className="flex flex-col justify-center items-center gap-4 p-8 bg-white w-full min-h-48 hover:shadow-xl transition-all duration-500 rounded-xl">
              <div className="flex flex-col justify-center items-center h-1/3 w-full">
                <FaPeopleRoof className="min-w-10 min-h-10 text-[--dukeblue]"/>
              </div>
              <div className="flex flex-col justify-start items-center gap-4 h-1/2 w-full">
                <h3 className=" ">
                  Tenni akarsz az élhető munkahelyért
                </h3>
                <p className="text-sm  text-neutral-500">
                  Együttműködést, sokszínű és befogadó kultúrát, egyenlő esélyeket
                  teremteni.
                </p>
              </div>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.4, }}
            className="flex flex-col justify-center items-center gap-4 p-8 bg-white w-full min-h-48 hover:shadow-xl transition-all duration-500 rounded-xl">
              <div className="flex flex-col justify-center items-center h-1/3 w-full">
                <BiWorld className="min-w-10 min-h-10 text-[--dukeblue]"/>
              </div>
              <div className="flex flex-col justify-start items-center gap-4 h-1/2 w-full">
                <h3 className=" ">
                  Külföldön anyanyelvi támogatót keresel
                </h3>
                <p className="text-sm  text-neutral-500">
                  Akivel egy nyelvet beszéltek a szó szoros és átvitt értelmében
                  is.
                </p>
              </div>
              
            </motion.div>
          </div>
        </div>
        </Regularcontainer>
  );
}
