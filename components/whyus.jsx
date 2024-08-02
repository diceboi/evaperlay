"use client"

import { motion } from "framer-motion"

export default function Whyus() {
  return (
    <section className="py-8 lg:py-20 w-full">
      <div className="container m-auto">
        <div className="flex flex-col gap-20">
          <h2 className="text-4xl font-bold">
            Vedd fel velem a kapcsolatot, ha...
          </h2>
          <div className="grid grid-cols-8 grid-rows-8 grid-flow-col gap-8">
            <motion.div 
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, }}
            className="flex flex-col justify-between gap-4 p-4 bg-white w-full min-h-48 col-span-2 row-span-3 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold">Fejlődésre vágysz</h3>
              <p className="text-sm">
                Többet szeretnél kihozni magadból, új célokat megvalósítani.
              </p>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, }}
            className="flex flex-col justify-between gap-4 p-4 bg-white w-full min-h-48 col-span-2 row-span-5 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold">Új perspektíva kell</h3>
              <p className="text-sm">
                Hasznos kérdésekre, eszköztárra vagy más nézőpontra lenne
                szükséged.
              </p>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, }}
            className="flex flex-col justify-between gap-4 p-4 bg-white w-full min-h-48  col-span-2 row-span-5 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold">Szintet lépnél</h3>
              <p className="text-sm">
                Jobb vezetővé, munkatárssá, vállalkozóvá akarsz válni vagy
                felgyorsítanád a fejlődésedet egy új helyzetben.
              </p>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, }}
            className="flex flex-col justify-between gap-4 p-4 bg-white w-full min-h-48 col-span-2 row-span-3 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold">Magadat képviselnéd</h3>
              <p className="text-sm">
                Fontossá váltak a saját értékeid és igényeid, de még nem tudod,
                hogyan demonstráld őket.
              </p>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, }}
            className="flex flex-col justify-between gap-4 p-4 bg-white w-full min-h-48 col-span-2 row-span-3 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold">Elakadtál</h3>
              <p className="text-sm">
                Új lendület kellene a továbblépéshez vagy egy konkrét kihívással
                szembenézni.
              </p>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, }}
            className="flex flex-col justify-between gap-4 p-4 bg-white w-full min-h-48 col-span-2 row-span-5 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold">Változásra van szükséged</h3>
              <p className="text-sm">
                Nem találod a helyed, az értelmet a munkádban és nincs időd a
                számodra fontos dolgokra.
              </p>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, }}
            className="flex flex-col justify-between gap-4 p-4 bg-white w-full min-h-48 col-span-2 row-span-5 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold">
                Tenni akarsz az élhető munkahelyért
              </h3>
              <p className="text-sm">
                Együttműködést, sokszínű és befogadó kultúrát, egyenlő esélyeket
                teremteni.
              </p>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, }}
            className="flex flex-col justify-between gap-4 p-4 bg-white w-full min-h-48 col-span-2 row-span-3 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold">
                Külföldön anyanyelvi támogatót keresel
              </h3>
              <p className="text-sm">
                Akivel egy nyelvet beszéltek a szó szoros és átvitt értelmében
                is.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
