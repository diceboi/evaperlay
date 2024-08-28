"use client"

import Regularcontainer from "./ui/regularcontainer";
import Image from "next/image";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { motion } from "framer-motion";
import Primarygreenbuton from "./ui/primaryGreenButon";
import Secondarybluebutton from "./ui/SecondaryBlueButton";

export default function Aboutme() {
  return (
    <Regularcontainer bgcolor={'bg-white'}>
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-32">
            <motion.div 
            className="relative lg:w-1/2 w-full h-[60vh] rounded-xl overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
            >
                <Image src='/eva/rolam3.webp' fill style={{objectFit: 'cover', objectPosition: '25% 20%',}} alt="Rólam"/>
            </motion.div>
            <div className="flex flex-col gap-12 justify-center w-1/2">
                <div className="flex flex-col gap-4">
                    <motion.h4 
                    className="flex flex-nowrap items-center gap-2"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
                    >
                        <MdOutlineHorizontalRule className="min-w-8 min-h-8"/> 
                        Rólam
                    </motion.h4>
                    <motion.h2 
                    className="w-fit z-10"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
                    >
                        <span className="relative underlined-p">Perlay Éva</span> vagyok,
                    </motion.h2>
                </div>
                <motion.div 
                className="flex flex-col gap-4"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
                >
                    <p>Üzleti coachként abban tudlak támogatni, hogy rátalálj azokra a szakmai utakra, ahol elégedett, hiteles és kiegyensúlyozott lehetsz. Hiszem, hogy mindenkinek jár egy szerethető munkahely és egy teljes élet.</p>
                    <p>Az Egyenlítő Alapítvány partnerkapcsolati vezetőjeként és trénereként sokszínű és befogadó csapatok kialakításában segítem a hozzám forduló cégeket.
                    </p>
                    <p>
                    Fókuszterületeim az önazonos munkavégzés és kommunikáció, a mentális egészségmegőrzés, a munkahelyi egyenlőség, a befogadó vezetés és az élhető szervezeti kultúra kialakítása.
                    </p>
                    <p>
                    Olvass bele a témáimba: <Secondarybluebutton text={'Témáim'} link={'/'} />
                    </p>
                    <p>
                    Ha kíváncsi vagy, miért lehetek számodra hiteles partner, kattints ide: <Secondarybluebutton text={'Miért válassz?'} link={'/'} />
                    </p>
                </motion.div> 
            </div>
        </div>
        <div className="flex flex-row justify-evenly pt-32"> 
            <div className="flex flex-col items-center justify-evenly w-full border-r border-neutral-400 pr-8 text-center gap-2">
                <h3>15+ év</h3>
                <p>nagyvállalati tapasztalat</p>
                <Secondarybluebutton text={'Hol tartok a coach szakmai utamon?'} link={'/'} classname={'my-4'}/>
            </div>
            <div className="flex flex-col items-center justify-evenly w-full border-r border-neutral-400 px-8 text-center  gap-2">
                <h3>Egyenlítő alapítvány</h3>
                <p>partnerkapcsolati vezető és trainer</p>
                <Secondarybluebutton text={'Az Egyenlítő Alapítványnál végzett munkám'} link={'/'} classname={'my-4'}/>
            </div>
            <div className="flex flex-col items-center justify-evenly w-full border-r border-neutral-400 px-8 text-center  gap-2">
                <h3>Diplomás</h3>
                <p>üzleti coach</p>
                <Secondarybluebutton text={'Multinacionális marketing és sales hátterem'} link={'/'} classname={'my-4'}/>
            </div>
            <div className="flex flex-col items-center justify-evenly w-full pl-8 text-center  gap-2">
                <p>képzésben lévő </p>
                <h3>mentálhigiénés szakember</h3>
                <Secondarybluebutton text={'Tanulmányaim'} link={'/'} classname={'my-4'} />
            </div>
        </div>
    </Regularcontainer>
  )
}
