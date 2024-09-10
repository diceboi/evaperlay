"use client";

import Image from "next/image";
import Regularcontainer from "./ui/regularcontainer";
import Primarybluebutton from "./ui/primaryBlueButton";
import { motion } from "framer-motion";

export default function Ctatwo() {
  return (
    <Regularcontainer bgcolor={"bg-white"} padding={'py-16 lg:py-32'}>
      <motion.div
        className="flex flex-row justify-between bg-[--aquamarine] w-full min-h-[40vh] gap-4"
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
            className="absolute -bottom-0 left-1/5 h-[150%] w-auto"
          />
        </div>
        <div className="flex flex-col gap-8 justify-between lg:w-2/3 lg:p-8 p-4">
          <div className="flex flex-col gap-4">
            <p className="text-md lg:text-xl">
              Ha megérett benned az elhatározás, hogy új célokat tűzz ki, és
              ehhez egyenrangú szakmai partnert keresel, akivel olyan bizalommal
              tudnál együtt dolgozni, hogy beleférne
            </p>
            <ul className="list-disc marker:text-white lg:text-xl ml-4">
              <li>a feltétel nélküli elfogadás</li>
              <li>a sebezhetőség, az érzelmek megmutatása</li>
              <li>az őszinteség, a nyitottság</li>
              <li>és a humor is,</li>
            </ul>
            <p className="lg:text-xl">
              akkor mindenképp foglalj velem egy{" "}
              <strong>ingyenes, 30 perces konzultációt!</strong>
            </p>
          </div>
          <Primarybluebutton text={"Ingyenes konzultáció igénylés"} link={"/"} />
        </div>
      </motion.div>
    </Regularcontainer>
  );
}
