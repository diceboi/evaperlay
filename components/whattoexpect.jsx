"use client";

import Quote from "./ui/quote";
import Regularcontainer from "./ui/regularcontainer";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Secondarybluebutton from "./ui/SecondaryBlueButton";
import Primarygreenbuton from "./ui/primaryGreenButon";
import { useRef } from "react";
import { MdOutlineHorizontalRule } from "react-icons/md"

export default function Whattoexpect() {
  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const scrollRef4 = useRef(null);

  // Use scroll hooks for each ref
  const { scrollYProgress: scrollYProgress1,  } = useScroll({
    target: scrollRef,
    offset: ["0.2, 0.6", "0.1, 0.3"]
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: scrollRef2,
    offset: ["0.2, 0.6", "0.1, 0.3"]
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: scrollRef3,
    offset: ["0.2, 0.6", "0.1, 0.3"]
  });

  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: scrollRef4,
    offset: ["0.2, 0.6", "0.1, 0.3"]
  });

  return (
    <Regularcontainer bgcolor={"bg-gardient-to-b from-white to-transparent"} padding={'py-32'}>
      <div className="relative flex flex-col gap-20">
        <div className="flex flex-col gap-16 w-full">
        <div className="flex flex-col gap-4">
          <h4
            className="flex flex-nowrap items-center justify-center gap-2"
          >
            <MdOutlineHorizontalRule className="min-w-8 min-h-8" />
            Hogyan dolgozom?
          </h4>
          <h2 className="text-center z-10">Mire számíthatsz?</h2>
          </div>
          <motion.div
            className="relative flex flex-col justify-end w-full h-[60vh] rounded-xl overflow-hidden "
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <Image
              src="/eva/beszelgeto2.webp"
              fill
              style={{ objectFit: "cover", objectPosition: "25% 20%" }}
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
                <span className="italic text-neutral-400 text-right">
                  International Coaching Federation definíció
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col justify-center gap-16 w-full">
          <h2 className="text-center">Közös munkánk során tehát:</h2>
          <div className="grid grid-cols-4 grid-rows-2 grid-flow-row gap-6" style={{ gridTemplateAreas: `"a a a a" "b b c c"`, gridAutoFlow: "dense" }}>
            <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 bg-white  shadow-sm">
              <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8">
                <MdOutlineHorizontalRule className="min-w-8 min-h-8 text-[--aquamarine]" />
              </div>
              <p className="text-lg">
                <b>Egyenrangú </b>partnerekként
              </p>
            </div>
            <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 bg-white  shadow-sm">
            <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8">
                <MdOutlineHorizontalRule className="min-w-8 min-h-8 text-[--aquamarine]" />
              </div>
              <p className="text-lg">
                azzal fogunk dolgozni, ami <b>számodra fontos</b>.
              </p>
            </div>
            <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 bg-white  shadow-sm">
            <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8">
                <MdOutlineHorizontalRule className="min-w-8 min-h-8 text-[--aquamarine]" />
              </div>
              <p className="text-lg">
                <b>Te felelsz</b> a folyamat során levont tanulságokért és
                céljaid megvalósításáért.
              </p>
            </div>
            <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 bg-white  shadow-sm">
              <p className="text-lg">
                <b>Én felelek</b> a coaching technikák alkalmazásáért és az
                ülések strukturálásáért.
              </p>
            </div>
            <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 bg-white  shadow-sm">
            <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8">
                <MdOutlineHorizontalRule className="min-w-8 min-h-8 text-[--aquamarine]" />
              </div>
              <p className="text-lg">
              
                <b>Nem lesz részed</b> tanácsadásban (tapasztalat megosztásban
                is csak kivételes esetben).
              </p>
            </div>
            <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 bg-white  shadow-sm">
            <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8">
                <MdOutlineHorizontalRule className="min-w-8 min-h-8 text-[--aquamarine]" />
              </div>
              <p className="text-lg">
                <b>Jövőorientáltan</b>, azaz nem a “miérteken”, hanem a
                “hogyanokon” fogunk dolgozni.
              </p>
            </div>
            <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 bg-white  shadow-sm">
              <p className="text-lg">
                Végig <b>mérhető célok</b> mentén.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify- m-auto gap-16 ">
          <div className="absolute w-1 h-full bg-white top-32 left-1/2 -translate-x-1/2"></div>
          <h2 className="text-center">Hogyan zajlik a folyamat?</h2>

          <div
            ref={scrollRef}
            className="flex flex-col w-full gap-16"
            style={{ height: '80vh' }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              style={{ opacity: scrollYProgress1 }}
              transition={{ times: 2 }}
              viewport={{ scrollRef }}
              className="sticky top-1/3 flex flex-col gap-16 bg-[--white] px-8 pb-8 w-2/5 mr-4"
            >
              <h3 className="p-4 bg-[--dukeblue] text-white shadow-sm w-fit m-auto ">
                0. beszélgetés
              </h3>
              <p className="text-xl">
                A coaching folyamat egy ingyenes, 30 perces online
                konzultációval, az ún. 0. beszélgetéssel indul.{" "}
                <Secondarybluebutton text={"Foglald le itt!"} link={"/"} />
              </p>
              <p className="text-xl">
                Ebben a fázisban mindketten fel tudjuk mérni, hogy céljaid
                megvalósításában én tudlak-e a legjobban támogatni, szeretnénk-e
                elkezdeni és mikortól a közös munkát. Itt egyeztethetünk a
                coaching folyamat részleteiről, az árakról és bármilyen egyéb
                kérdéseddel kapcsolatban is.
              </p>
            </motion.div>
          </div>

          <div
            ref={scrollRef2}
            className="flex flex-col w-full gap-16"
            style={{ height: '80vh' }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              style={{ opacity: scrollYProgress2 }}
              transition={{ times: 2 }}
              viewport={{ scrollRef2 }}
              className="sticky top-1/3 flex flex-col gap-16 bg-[--white] px-8 pb-8 w-2/5 self-end  ml-4"
            >
              <h3 className="p-4 bg-[--dukeblue] text-white shadow-sm w-fit m-auto ">
                Szerződéskötés
              </h3>
              <p className="text-xl">
                Ha leszerződünk a coaching folyamatra, azt rugalmasan tudjuk az
                igényeidhez igazítani.
              </p>
            </motion.div>
          </div>

          <div
            ref={scrollRef3}
            className="flex flex-col w-full gap-16"
            style={{ height: '80vh' }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              style={{ opacity: scrollYProgress3 }}
              transition={{ times: 2 }}
              viewport={{ scrollRef3 }}
              className="sticky top-1/3 flex flex-col gap-16 bg-[--white] px-8 pb-8 w-2/5 mr-4"
            >
              <h3 className="p-4 bg-[--dukeblue] text-white shadow-sm w-fit m-auto ">
              A Coaching folyamata
              </h3>
              <p className="text-xl">
                Átlagosan 6-8 alkalommal fogunk találkozni, körülbelül 2-3 heti
                rendszerességgel, jellemzően 60 perces hosszúságú online és/vagy
                személyes ülések erejére. Két alkalom között élesben is
                kipróbálhatod, amit fontosnak tartasz.
              </p>
            </motion.div>
          </div>

          <div
            ref={scrollRef4}
            className="flex flex-col w-full gap-16"
            style={{ height: '80vh' }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              style={{ opacity: scrollYProgress4 }}
              transition={{ times: 2 }}
              viewport={{ scrollRef4 }}
              className="sticky top-1/3 flex flex-col gap-16 bg-[--white] px-8 pb-8 w-2/5 self-end ml-4"
            >
              <h3 className="p-4 bg-[--dukeblue] text-white shadow-sm w-fit m-auto ">
                Utánkövetés
              </h3>
              <p className="text-xl">
              A coaching folyamat lezárását követően javaslom fél éves és éves
                utánkövető alkalmak beiktatását, hogy segítségedre lehessek a
                változások végrehajtásánál is.
              </p>
              <Primarygreenbuton text={'Kezdjünk bele'} link={'/'} classname={'m-auto self-center'}/>
            </motion.div>
          </div>
        </div>
      </div>
    </Regularcontainer>
  );
}
