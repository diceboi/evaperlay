"use client"

import Mainheader from "@/components/ui/mainHeader";
import Regularcontainer from "@/components/ui/regularcontainer";
import GridWhiteTile from "@/components/ui/gridWhiteTile";
import Secondarybluebutton from "@/components/ui/SecondaryBlueButton";
import Primarygreenbuton from "@/components/ui/primaryGreenButon";
import { useContext } from "react";
import { CalendlyContext } from "@/app/CalendlyContext";

export default function Mireszamithatsz() {

  const { toggleCalendly } = useContext(CalendlyContext)

  return (
    <>
      <Mainheader title={'Egyéni coaching'} image={'/eva/beszelgeto2.webp'} />
      <Regularcontainer padding={'py-20'}>
        <div className="flex flex-col gap-16">

          <h2 className="text-center">Mire számíthatsz?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-5 lg:grid-rows-2 lg:grid-flow-row gap-8 lg:border-0 border-l-4 border-dashed border-[--mint]">
                <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 -ml-1 bg-white shadow-sm border-l-4 border-[--aquamarine]">
                  <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8">
                  </div>
                  <p className="text-sm lg:text-xl">
                    <b>Egyenrangú </b>partnerekként
                  </p>
                </div>
                <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 -ml-1 bg-white shadow-sm border-l-4 border-[--aquamarine]">
                  <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8">
                  </div>
                  <p className="text-sm lg:text-xl">
                    azzal fogunk dolgozni, ami <b>számodra fontos</b>.
                  </p>
                </div>
                <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 -ml-1 bg-white shadow-sm border-l-4 border-[--aquamarine]">
                  <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8">
                  </div>
                  <p className="text-sm lg:text-xl">
                    <b>Te felelsz</b> a folyamat során levont tanulságokért és
                    céljaid megvalósításáért.
                  </p>
                </div>
                <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 -ml-1 bg-white shadow-sm border-l-4 border-[--aquamarine]">
                  <p className="text-sm lg:text-xl">
                    <b>Én felelek</b> a coaching technikák alkalmazásáért és az
                    ülések strukturálásáért.
                  </p>
                </div>
                <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 -ml-1 bg-white shadow-sm border-l-4 border-[--aquamarine]">
                  <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8">
                  </div>
                  <p className="text-sm lg:text-xl">
                    <b>Nem lesz részed</b> tanácsadásban (tapasztalat
                    megosztásban is csak kivételes esetben).
                  </p>
                </div>
                <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 -ml-1 bg-white shadow-sm border-l-4 border-[--aquamarine]">
                  <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8">
                  </div>
                  <p className="text-sm lg:text-xl">
                    <b>Jövőorientáltan</b>, azaz nem a “miérteken”, hanem a
                    “hogyanokon” fogunk dolgozni.
                  </p>
                </div>
                <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 -ml-1 bg-white shadow-sm border-l-4 border-[--aquamarine]">
                  <p className="text-sm lg:text-xl">
                    Végig <b>mérhető célok</b> mentén.
                  </p>
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
            <Secondarybluebutton text={"Foglald le itt!"} onclick={toggleCalendly} />
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
          onclick={toggleCalendly}
          buttonclassname={"m-auto self-center pt-16"}
        />  
        </div>
      </Regularcontainer>
    </>
  );
}