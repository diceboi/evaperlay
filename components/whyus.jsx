"use client";

import Regularcontainer from "./ui/regularcontainer";

import { GrLineChart } from "react-icons/gr";
import {
  FaStreetView,
  FaPersonRays,
  FaPersonWalkingDashedLineArrowRight,
  FaPersonWalkingArrowLoopLeft,
  FaPeopleRoof,
} from "react-icons/fa6";
import { RiGlassesLine } from "react-icons/ri";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { TbStairsUp } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import SubTitle from "./ui/typo/SubTitle";
import H2 from "./ui/typo/H2";
import IconTile from "./ui/IconTile";

export default function Whyus() {
  return (
    <Regularcontainer bgcolor={"bg-[--white]"} padding={'py-16 lg:py-32'}>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col lg:items-center gap-4">
          <SubTitle>
            Mi a célod?
          </SubTitle>
          <H2>Vedd fel velem a kapcsolatot, ha</H2>  
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-rows-2 gap-8">
          <IconTile icon={<GrLineChart className="min-w-10 min-h-10 text-[--dukeblue]" />} title={'Fejlődésre vágysz'} text={'Többet szeretnél kihozni magadból, új célokat megvalósítani.'}/>
          <IconTile icon={<RiGlassesLine className="min-w-10 min-h-10 text-[--dukeblue]" />} title={'Új perspektíva kell'} text={'Hasznos kérdésekre, eszköztárra vagy más nézőpontra lenne szükséged.'}/>
          <IconTile icon={<TbStairsUp className="min-w-10 min-h-10 text-[--dukeblue]" />} title={'Szintet lépnél'} text={'Jobb vezetővé, munkatárssá, vállalkozóvá akarsz válni vagy felgyorsítanád a fejlődésedet egy új helyzetben.'}/>
          <IconTile icon={<FaPersonRays className="min-w-10 min-h-10 text-[--dukeblue]" />} title={'Magadat képviselnéd'} text={'Fontossá váltak a saját értékeid és igényeid, de még nem tudod, hogyan demonstráld őket.'}/>
          <IconTile icon={<FaPersonWalkingDashedLineArrowRight className="min-w-10 min-h-10 text-[--dukeblue]" />} title={'Elakadtál'} text={'Új lendület kellene a továbblépéshez vagy egy konkrét kihívással szembenézni.'}/>
          <IconTile icon={<FaPersonWalkingArrowLoopLeft className="min-w-10 min-h-10 text-[--dukeblue]" />} title={'Változásra van szükséged'} text={'Nem találod a helyed, az értelmet a munkádban vagy nincs időd a számodra fontos dolgokra.'}/>
          <IconTile icon={<FaPeopleRoof className="min-w-10 min-h-10 text-[--dukeblue]" />} title={'Tenni akarsz az élhető munkahelyért'} text={'Együttműködő, sokszínű és befogadó kultúrát, egyenlő esélyeket teremteni.'}/>
          <IconTile icon={<BiWorld className="min-w-10 min-h-10 text-[--dukeblue]" />} title={'Külföldön anyanyelvi támogatót keresel'} text={'Akivel online dolgoztok és egy nyelvet beszéltek a szó szoros és átvitt értelmében is.'}/>
        </div>
      </div>
    </Regularcontainer>
  );
}
