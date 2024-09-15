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

export default function Aboutme() {
  return (
    <Regularcontainer bgcolor={'bg-white'} padding={'py-16 lg:py-32'}>
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-32">
            <motion.div 
            className="relative lg:w-1/2 w-full min-h-[60vh] overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
            >
                <Image src='/eva/rolam5.webp' fill style={{objectFit: 'cover', objectPosition: '25% 20%',}} alt="Rólam"/>
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
                    <Paragraph>Üzleti coachként abban tudlak támogatni, hogy rátalálj azokra a szakmai utakra, ahol elégedett, hiteles és kiegyensúlyozott lehetsz. Hiszem, hogy mindenkinek jár egy szerethető munkahely és egy teljes élet.</Paragraph>
                    <Paragraph>Az Egyenlítő Alapítvány partnerkapcsolati vezetőjeként és trénereként sokszínű és befogadó csapatok kialakításában segítem a hozzám forduló cégeket.
                    </Paragraph>
                    <Paragraph>
                    Fókuszterületeim az önazonos munkavégzés és kommunikáció, a mentális egészségmegőrzés, a munkahelyi egyenlőség, a befogadó vezetés és az élhető szervezeti kultúra kialakítása.
                    </Paragraph>
                    <Paragraph>
                    Ha kíváncsi vagy, miért lehetek számodra hiteles partner, <Secondarybluebutton text={'kattints ide!'} link={'/rolam/miert-valassz'} />
                    </Paragraph>
                </motion.div> 
            </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-evenly pt-16 lg:pt-32 lg:gap-0 gap-2">
            <Link href={'/rolam/multinacionalis-marketing-es-sales-hatterem'} className="flex flex-col justify-evenly w-full bg-neutral-100 lg:bg-transparent lg:border-r border-neutral-200 lg:px-8 px-2 text-center gap-2 hover:bg-neutral-50 py-4">
                <Paragraph classname={'font-bold'}>15+ év</Paragraph>
                <Paragraph className="text-sm">nagyvállalati háttér</Paragraph>
            </Link>
            <Link href={'/rolam/az-egyenlito-alapitvanynal-vegzett-munkam'} className="flex flex-col justify-evenly w-full bg-neutral-100 lg:bg-transparent lg:border-r border-neutral-200 lg:px-8 px-2 text-center  gap-2 hover:bg-neutral-50 py-4">
                <Paragraph classname={'font-bold'}>Egyenlítő Alapítvány</Paragraph>
                <Paragraph className="text-sm">partnerkapcsolati vezető és tréner</Paragraph>
            </Link>
            <Link href={'/rolam/hol-tartok-a-szakmai-utamon'} className="flex flex-col justify-evenly w-full bg-neutral-100 lg:bg-transparent lg:border-r border-neutral-200 lg:px-8 px-2 text-center  gap-2 hover:bg-neutral-50 py-4">
                <Paragraph classname={'font-bold'}>Diplomás</Paragraph>
                <Paragraph className="text-sm">üzleti coach</Paragraph>
            </Link>
            <Link href={'/rolam/tanulmanyaim'} className="flex flex-col justify-evenly w-full lg:px-8 px-2 bg-neutral-100 lg:bg-transparent text-center gap-2 hover:bg-neutral-50 py-4">
                <Paragraph classname={'font-bold'}>Képzésben lévő </Paragraph>
                <Paragraph>mentálhigiénés szakember</Paragraph>
            </Link>
        </div>
    </Regularcontainer>
  )
}
