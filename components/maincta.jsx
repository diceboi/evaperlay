"use client"

import Image from "next/image";
import Regularcontainer from "./ui/regularcontainer";
import Primarybluebutton from "./ui/primaryBlueButton";
import { motion } from "framer-motion";

export default function Maincta() {
  return (
    <Regularcontainer bgcolor={'bg-white'}>
        <motion.div 
        className="flex flex-row justify-between bg-[--aquamarine] w-full min-h-[40vh] gap-4"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4}}
        >
          <div className="flex flex-col gap-4 justify-between w-2/3  p-8">
            <div className="flex flex-col gap-4">
                <h2>Foglalj ingyenes 30 perces konzultációt</h2>
                <p className="text-xl">Ha felkeltettem az érdeklődésedet és szívesen egyeztetnél a témádról, a coaching részleteiről, illetve bármilyen felmerülő kérdésedről, foglalj egy ingyenes, 30 perces konzultációt velem!</p>
            </div>
            <Primarybluebutton text={'Ingyenes konzultáció'} link={'/'}/>
          </div>
          <div className="relative w-1/3">
          <Image
            src="/eva/linkedin2.webp"
            width={500}
            height={300}
            alt="Éva ül"
            className="absolute -bottom-0 right-1/3 h-[150%] w-auto"
          />
          </div>
        </motion.div>
    </Regularcontainer>
  )
}
