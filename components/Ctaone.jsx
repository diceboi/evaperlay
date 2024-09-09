"use client";

import Image from "next/image";
import Regularcontainer from "./ui/regularcontainer";
import Primarybluebutton from "./ui/primaryBlueButton";
import { motion } from "framer-motion";

export default function Ctaone() {
  return (
    <Regularcontainer bgcolor={"bg-white"} padding={"pb-20 pt-16"}>
      <motion.div
        className="flex flex-row justify-between bg-[--aquamarine] w-full min-h-[40vh] gap-4 overflow-hidden"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        <div className="relative flex flex-col gap-4 justify-between lg:w-2/3 lg:p-8 p-4">
          <div className="flex flex-col gap-4 z-10">
            <h2>Foglalj ingyenes 30 perces konzultációt!</h2>
            <p className="lg:text-xl">
              Ha felkeltettem az érdeklődésedet és szívesen egyeztetnél a
              témádról, a coaching részleteiről, illetve bármilyen felmerülő
              kérdésedről, foglalj egy ingyenes, 30 perces konzultációt velem!
            </p>
          </div>
          <Primarybluebutton
            text={"Ingyenes konzultáció igénylés"}
            link={"/"}
            classname={'z-10'}
          />
          <Image
            src="/eva/maincta3.webp"
            width={500}
            height={300}
            alt="Éva ül"
            className="lg:hidden block absolute -bottom-0 -right-40 z-0 w-96 h-auto opacity-50"
          />
        </div>
        <div className="lg:block hidden relative w-1/3">
          <Image
            src="/eva/maincta3.webp"
            width={500}
            height={300}
            alt="Éva ül"
            className="absolute -bottom-0 z-20"
          />
          <div className="lg:block hidden w-full h-full relative overflow-hidden">
            <div className="absolute -bottom-1/2 left-2/3 -translate-x-1/2 bg-[--black] blur-3xl w-1/2 h-full z-10 opacity-30"></div>
          </div>
        </div>
      </motion.div>
    </Regularcontainer>
  );
}
