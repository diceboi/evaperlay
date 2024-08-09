"use client"

import React from 'react'
import Regularcontainer from './ui/regularcontainer'
import { motion } from 'framer-motion'
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Logocarousel from './logocarousel';

export default function Maincta() {
  return (
    <Regularcontainer bgcolor={'bg-white'}>
        <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="flex flex-col gap-8 lg:gap-32 lg:flex-row min-h-[30vh] rounded-3xl "
      >
        <div className="flex flex-col gap-8 justify-between w-1/2">
          <div className="flex flex-col gap-8">
           <h2>
            Foglalj egy ingyenes konzultációt
            </h2>
            <p>
            Ha megérett benned az elhatározás, hogy új célokat tűzz ki, és ehhez egyenrangú szakmai partnert keresel, akivel olyan bizalommal tudnál együtt dolgozni, hogy beleférne a feltétel nélküli elfogadás, a sebezhetőség, az érzelmek megmutatása, az őszinteség, a nyitottság és a humor is, akkor mindenképp foglalj velem egy ingyenes, 30 perces konzultációt!
            </p>
          </div>
          <motion.button 
                className="group button-primary"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.2,
                    type: "spring",
                    stiffness: 100,
                }}
            ><span className="group-hover:text-white transition-all">
                Lefoglalom
            </span>
            </motion.button>
        </div>
        <div className="flex flex-col items-end justify-between relative w-1/2 bg-[--aquamarine] p-8 rounded-xl">
          <Image
            src="/eva/linkedin.webp"
            width={500}
            height={300}
            alt="Éva ül"
            className="absolute -bottom-0 right-1/2 h-[150%] w-auto"
          />
          <motion.p 
          id="bubble-left" 
          className="relative text-sm font-semibold w-48 bg-[--white] p-2 shadow-xl"
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
      <div className='flex flex-row gap-8'>
        <h3 className='mt-32 pr-8 z-10'>Partnereim:</h3>
        <Logocarousel />
      </div>
      
    </Regularcontainer>
  )
}
