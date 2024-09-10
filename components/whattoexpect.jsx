"use client";

import Quote from "./ui/quote";
import Regularcontainer from "./ui/regularcontainer";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Secondarybluebutton from "./ui/SecondaryBlueButton";
import Primarygreenbuton from "./ui/primaryGreenButon";
import { useRef } from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";

export default function Whattoexpect() {
  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const scrollRef4 = useRef(null);

  // Use scroll hooks for each ref
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: scrollRef,
    offset: ["0.2, 0.6", "0.1, 0.3"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: scrollRef2,
    offset: ["0.2, 0.6", "0.1, 0.3"],
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: scrollRef3,
    offset: ["0.2, 0.6", "0.1, 0.3"],
  });

  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: scrollRef4,
    offset: ["0.2, 0.6", "0.1, 0.3"],
  });

  return (
    <Regularcontainer
      bgcolor={"bg-gardient-to-b from-white to-transparent"}
      padding={"py-32"}
    >
      <div className="relative flex flex-col gap-20">
        <div className="flex flex-col gap-16 w-full">
          <div className="flex flex-col gap-4">
            <h4 className="flex flex-nowrap items-center justify-center gap-2">
              <MdOutlineHorizontalRule className="min-w-8 min-h-8" />
              Hogyan dolgozom?
            </h4>
            <h2 className="text-center z-10">Mire számíthatsz?</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div
              className="relative flex flex-col justify-end min-h-[80vh] overflow-hidden lg:w-2/3 w-full"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <Image
                src="/eva/beszelgeto2.webp"
                fill
                style={{ objectFit: "cover", objectPosition: "40% 20%" }}
                alt="Rólam"
              />
              <div className="flex flex-col items-center gap-4 w-10/12 mx-auto z-10 py-8">
                <Quote
                  text={
                    "A coaching az ügyféllel való partneri együttműködés, olyan gondolatébresztő és kreatív folyamat, amely arra inspirálja az ügyfelet, hogy a legtöbbet hozza ki önmagából személyes és szakmai szempontból is."
                  }
                  textcolor={"text-white"}
                  width={"w-full"}
                  textalign={"text-center"}
                />

                <Link
                  href={"https://www.coachingfederation.hu/mi-coaching/"}
                  target="_blank"
                  className=""
                >
                  <span className="italic text-white underline text-center lg:text-right">
                    International Coaching Federation definíció
                  </span>
                </Link>
              </div>
            </motion.div>
            <div className="flex flex-col justify-center gap-16 lg:w-1/3 w-full">
              <h3 className="lg:text-left text-center">Közös munkánk során:</h3>
              <div className="grid grid-cols-1 grid-rows-5 lg:grid-rows-2 lg:grid-flow-row gap-8 border-l-4 border-dashed border-[--mint]">
                <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 -ml-1 bg-white shadow-sm border-l-4 border-[--aquamarine]">
                  <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8">
                  </div>
                  <p className="">
                    <b>Egyenrangú </b>partnerekként
                  </p>
                </div>
                <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 -ml-1 bg-white shadow-sm border-l-4 border-[--aquamarine]">
                  <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8">
                  </div>
                  <p className="">
                    azzal fogunk dolgozni, ami <b>számodra fontos</b>.
                  </p>
                </div>
                <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 -ml-1 bg-white shadow-sm border-l-4 border-[--aquamarine]">
                  <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8">
                  </div>
                  <p className="">
                    <b>Te felelsz</b> a folyamat során levont tanulságokért és
                    céljaid megvalósításáért.
                  </p>
                </div>
                <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 -ml-1 bg-white shadow-sm border-l-4 border-[--aquamarine]">
                  <p className="">
                    <b>Én felelek</b> a coaching technikák alkalmazásáért és az
                    ülések strukturálásáért.
                  </p>
                </div>
                <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 -ml-1 bg-white shadow-sm border-l-4 border-[--aquamarine]">
                  <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8">
                  </div>
                  <p className="">
                    <b>Nem lesz részed</b> tanácsadásban (tapasztalat
                    megosztásban is csak kivételes esetben).
                  </p>
                </div>
                <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 -ml-1 bg-white shadow-sm border-l-4 border-[--aquamarine]">
                  <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8">
                  </div>
                  <p className="">
                    <b>Jövőorientáltan</b>, azaz nem a “miérteken”, hanem a
                    “hogyanokon” fogunk dolgozni.
                  </p>
                </div>
                <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 -ml-1 bg-white shadow-sm border-l-4 border-[--aquamarine]">
                  <p className="">
                    Végig <b>mérhető célok</b> mentén.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col m-auto ">
          <div className="hidden absolute w-1 h-full bg-white top-32 left-1/2 -translate-x-1/2"></div>
          <h2 className="text-center py-16">Hogyan zajlik a folyamat?</h2>

          <div className="relative flex flex-col gap-4 pl-12 lg:pl-28 py-8 ">
          <div className="absolute w-1 h-full left-4 top-0 bg-gradient-to-b from-transparent to-[--dukeblue]"></div>
          <p className="bg-[--aquamarine] w-fit p-2 text-xl lg:text-2xl text-center font-medium">
            0. beszélgetés
          </p>
          <p className="lg:text-xl text-sm">
            A coaching munka egy ingyenes, 30 perces online
            konzultációval, az ún. 0. beszélgetéssel indul.
            <Secondarybluebutton text={"Foglald le itt!"} link={"/"} />
            <br></br><br></br>
            Ebben a fázisban mindketten fel tudjuk mérni, hogy céljaid
            megvalósításában én tudlak-e a legjobban támogatni, szeretnénk-e
            elkezdeni és mikortól a közös munkát. Itt egyeztethetünk a
            coaching folyamat részleteiről, az árakról és bármilyen egyéb
            kérdéseddel kapcsolatban is.
          </p>
          <div className="absolute w-8 h-8 bg-[--aquamarine] left-[2px] top-[54px] -translate-y-1/2 rounded-full"></div>
        </div>

        <div className="relative flex flex-col gap-4 pl-12 lg:pl-28 py-8">
          <div className="absolute w-1 h-full left-4 top-0 bg-[--dukeblue]"></div>
          <p className="bg-[--aquamarine] w-fit p-2 text-xl lg:text-2xl text-center font-medium">
            Szerződéskötés
          </p>
          <p className="lg:text-xl text-sm">
            Ha leszerződünk a coaching folyamatra, azt rugalmasan tudjuk az igényeidhez igazítani.
          </p>
          <div className="absolute w-8 h-8 bg-[--aquamarine] left-[2px] top-[54px] -translate-y-1/2 rounded-full"></div>
        </div>

        <div className="relative flex flex-col gap-4 pl-12 lg:pl-28 py-8 ">
          <div className="absolute w-1 h-full left-4 top-0 bg-[--dukeblue]"></div>
          <p className="bg-[--aquamarine] w-fit p-2 text-xl lg:text-2xl text-center font-medium">
            A Coach folyamata
          </p>
          <p className="lg:text-xl text-sm">
            Átlagosan 6-8 alkalommal fogunk találkozni, körülbelül 2-3 heti
            rendszerességgel, jellemzően 60 perces hosszúságú online és/vagy
            személyes ülések erejére. Két alkalom között élesben is
            kipróbálhatod, amit fontosnak tartasz.
          </p>
          <div className="absolute w-8 h-8 bg-[--aquamarine] left-[2px] top-[54px] -translate-y-1/2 rounded-full"></div>
        </div>

        <div className="relative flex flex-col gap-4 pl-12 lg:pl-28 py-8 ">
          <div className="absolute w-1 h-full left-4 top-0 bg-gradient-to-t from-transparent to-[--dukeblue]"></div>
          <p className="bg-[--aquamarine] w-fit p-2 text-xl lg:text-2xl text-center font-medium">
          Utánkövetés
          </p>
          <p className="lg:text-xl text-sm">
            A coaching folyamat lezárását követően javaslom fél éves és éves
            utánkövető alkalmak beiktatását, hogy segítségedre lehessek a
            változások végrehajtásánál is.
          </p>
          <div className="absolute w-8 h-8 bg-[--aquamarine] left-[2px] top-[54px] -translate-y-1/2 rounded-full"></div>
        </div>

        <Primarygreenbuton
          text={"Kezdjünk bele"}
          link={"/"}
          buttonclassname={"m-auto self-center pt-16"}
        />  
        </div>
      </div>
    </Regularcontainer>
  );
}
