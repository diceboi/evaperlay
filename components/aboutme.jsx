"use client"

import Regularcontainer from "./ui/regularcontainer";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { motion } from "framer-motion";
import Primarygreenbuton from "./ui/primaryGreenButon";
import Secondarybluebutton from "./ui/SecondaryBlueButton";
import H2 from "./ui/typo/H2";
import H3 from "./ui/typo/H3"
import Paragraph from "./ui/typo/Paragraph";
import SubTitle from "./ui/typo/SubTitle";
import Quote from "./ui/quote";

export default function Aboutme() {
  return (
    <Regularcontainer bgcolor={'bg-[-white]'} padding={'py-16 lg:py-32'}>
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-32">
            <motion.div 
            className="relative flex flex-col justify-end lg:w-1/2 w-full min-h-[60vh] overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
            >
                <Image src='/eva/rolam5.webp' fill style={{objectFit: 'cover', objectPosition: '25% 20%',}} alt="Rólam" className="relative" />
                <div className="flex flex-col items-center gap-4 w-10/12 mx-auto z-10 py-8">
                <Quote
                  textcolor={"text-white"}
                  width={"w-full"}
                  textalign={"text-center bg-grey"}
                  bgcolor={'bg-neutral-900'}
                >Hiszem, hogy mindenkinek jár egy<br></br>szerethető munka és egy teljes élet.</Quote>
              </div>
            </motion.div>
            <div className="flex flex-col gap-12 justify-center lg:w-1/2">
                <div className="flex flex-col gap-4">
                    <SubTitle>
                        Rólam
                    </SubTitle>
                    <H2 
                    className="w-fit z-10"
                    >
                        <span className="relative">Perlay Éva</span> vagyok.
                    </H2>
                </div>
                <motion.div 
                className="flex flex-col gap-4"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
                >
                    <Paragraph>Üzleti coachként abban tudlak támogatni, hogy rátalálj azokra a szakmai utakra, ahol elégedett, hiteles és kiegyensúlyozott lehetsz.</Paragraph>
                    <Paragraph><b>Hiszem, hogy mindenkinek jár egy szerethető munka és egy teljes élet.</b></Paragraph>
                    <Paragraph>
                    Fókuszterületeim az önazonos munka megtalálása, a mentális egészségmegőrzés, valamint a sokszínű és befogadó szervezeti kultúra kialakítása.
                    </Paragraph>
                    <Paragraph>
                    Ha kíváncsi vagy, miért lehetek számodra hiteles partner, <Secondarybluebutton text={'kattints ide!'} link={'/rolam/miert-valassz'} />
                    </Paragraph>
                </motion.div> 
            </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-evenly pt-16 lg:pt-32 lg:gap-8 gap-2">
            <Link href={'/rolam/hol-tartok-a-szakmai-utamon'} className="flex flex-col justify-evenly w-full lg:px-8 px-2 text-center gap-2 py-4 shadow-sm bg-white hover:shadow-xl transition-all">
                <Paragraph className="text-sm">Okleveles üzleti coach</Paragraph>
            </Link>
            <Link href={'/rolam/tanulmanyaim'} className="flex flex-col justify-evenly w-full lg:px-8 px-2 text-center gap-2 py-4 shadow-sm bg-white hover:shadow-xl transition-all">
                <Paragraph>Képzésben lévő mentálhigiénés szakember</Paragraph>
            </Link>
            <Link href={'/rolam/multinacionalis-marketing-es-sales-hatterem'} className="flex flex-col justify-evenly w-full lg:px-8 px-2 text-center gap-2 py-4 shadow-sm bg-white hover:shadow-xl transition-all">
                <Paragraph className="text-sm">15+ év nagyvállalati háttér</Paragraph>
            </Link>
            <Link href={'/rolam/aktiv-dei-tapasztalatom'} className="flex flex-col justify-evenly w-full lg:px-8 px-2 text-center gap-2 py-4 shadow-sm bg-white hover:shadow-xl transition-all">
                <Paragraph className="text-sm">Aktív DEI tapasztalat</Paragraph>
            </Link>
        </div>
    </Regularcontainer>
  )
}
