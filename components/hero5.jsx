"use client"

import Bgcontainer from "./ui/bgContainer"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero5() {
  return (
    <Bgcontainer bgimage={'/eva/beszelgeto.webp'} height={'min-h-[100vh]'} bgopacity={'bg-opacity-40'} bgcolor={'bg-black'} blendmode={'mix-blend-darken'}>
    <div className='relative flex flex-col items-center gap-16'>
        <div className="flex flex-nowrap gap-4 items-center">
        </div>
        <div className="flex flex-col w-1/2">
          <motion.h1 
          className="text-center text-white drop-shadow-lg -ml-20"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
          >
            Üzleti tanácsadás
          </motion.h1>
          <motion.h1 
          className="text-center text-white drop-shadow-lg -mr-20"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
          >
            személyre szabva.
          </motion.h1>
        </div>
        
        <motion.p 
        className="text-white w-1/2 text-center text-lg"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
        >
          Ha új célokat tűznél ki, és ehhez egy bizalmon alapuló szakmai partnert keresel, foglalj velem egy ingyenes, 30 perces konzultációt!
        </motion.p>
        <motion.button 
        className="group button-primary" role="button"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
        >
          <span className="group-hover:text-white transition-all">Ingyenes konzultáció igénylés</span>
        </motion.button>
    </div>
    
    </ Bgcontainer>
  )
}