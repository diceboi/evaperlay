"use client"

import Regularcontainer from "@/components/ui/regularcontainer";
import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Primarygreenbuton from "@/components/ui/primaryGreenButon";

export default function Koszonjuk() {
  return (
    <Regularcontainer padding={'lg:py-32 py-16 h-[100vh]'} bgcolor={'bg-white'}>
        <div className={`absolute w-full h-full top-0 left-0 bg-gradient-to-b from-[#1e066fb3] to-[#1e066f92] z-10 `}></div>
        <Image 
        src={'/eva/vallalati-kepzesek.webp'}
        fill
        style={{ objectFit: 'cover' }}
        />
        <DotLottieReact
        src="/celebration.json"
        autoplay
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 lg:w-1/2 lg:h-1/2 w-full h-auto"
        />
        <div className="flex flex-col gap-8 items-center justify-center">
            <h2 className="text-center z-10 text-white">Köszönöm, hogy időpontot foglaltál nálam!</h2>
            <h3 className="text-center z-10 text-white">Email-ben pillanatokon belül kapsz egy értesítést a meetingről. Szeretettel várlak.</h3>
            <p className="text-center z-10 text-white pt-8">Ha szeretnél, addig olvass bele tartalmaimba:</p>
            <Primarygreenbuton text={'Tovább a Blogokra'} link={'/blog'} buttonclassname={'z-10'}/>
        </div>
    </Regularcontainer>
  )
}
