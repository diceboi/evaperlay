"use client"

import Bgcontainer from "./ui/bgContainer"
import Image from "next/image"
import { motion } from "framer-motion"
import Primarygreenbuton from "./ui/primaryGreenButon"
import Quote from "./ui/quote"

export default function Hero() {
  return (
    <Bgcontainer bgimage={'/eva/beszelgeto.webp'} height={'min-h-[100vh]'} bgopacity={'bg-opacity-40'} bgcolor={'bg-black'} blendmode={'mix-blend-darken'}>
    <div className='relative flex flex-col items-center gap-8'>
        <div className="flex flex-col w-1/2">
          <motion.h1 
          className="text-center text-white drop-shadow-lg "
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
          >
            Üzleti coaching
          </motion.h1>
          <motion.h1 
          className="text-center text-white drop-shadow-lg "
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
          >
            az igényeidre szabva.
          </motion.h1>
        </div>

        <Quote text={'Hogy helyedre kerülj a munkádban, a munka pedig az életedben.'} textcolor={'text-white'} width={'w-1/2'} textalign={'text-center'}/>
        
        <motion.p 
        className="text-white w-1/2 text-center text-lg"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
        >
          Ha új célokat tűznél ki, és ehhez egy bizalmon alapuló szakmai partnert keresel, foglalj velem egy ingyenes, 30 perces konzultációt!
        </motion.p>
        <Primarygreenbuton text={'Ingyenes konzultáció igénylés'} link={'/'}/>
    </div>
    
    </ Bgcontainer>
  )
}