"use client";

import Image from "next/image";
import Regularcontainer from "./ui/regularcontainer";
import Primarybluebutton from "./ui/primaryBlueButton";
import { motion } from "framer-motion";
import Paragraph from "./ui/typo/Paragraph";

export default function Ctatwo() {


  return (
    <Regularcontainer bgcolor={"bg-white"} padding={'py-16 lg:py-32'}>
      <motion.div
        className="flex flex-row justify-between bg-[--aquamarine] w-full min-max-h-[40vh] gap-4"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        <div className="lg:block hidden relative lg:w-1/3">
          <Image
            src="/eva/maincta2.webp"
            width={500}
            height={300}
            alt="Éva ül"
            className="absolute -bottom-0 left-1/5 max-h-[500px] w-auto"
          />
        </div>
        <div className="flex flex-col gap-8 justify-between lg:w-2/3 lg:p-8 p-4">
          <div className="flex flex-col gap-4">
            <Paragraph className="text-md lg:text-xl">
              Ha megérett benned az elhatározás, hogy új célokat tűzz ki, és
              ehhez egyenrangú szakmai partnert keresel, akivel olyan bizalommal
              tudnál együtt dolgozni, hogy beleférne
            </Paragraph>
            <ul className="list-disc marker:text-white lg:text-xl ml-4">
              <li><Paragraph>a feltétel nélküli elfogadás</Paragraph></li>
              <li><Paragraph>a sebezhetőség, az érzelmek megmutatása</Paragraph></li>
              <li><Paragraph>az őszinteség, a nyitottság</Paragraph></li>
              <li><Paragraph>és a humor is,</Paragraph></li>
            </ul>
            <Paragraph className="lg:text-xl">
              akkor mindenképp foglalj velem egy{" "}
              <strong>első, 60 perces konzultációt!</strong>
            </Paragraph>
          </div>
          <Primarybluebutton
            text={"Konzultáció igénylés"}
            classname={'z-10'}
            link={'/idopontfoglalas'}
          />
        </div>
      </motion.div>
    </Regularcontainer>
  );
}
