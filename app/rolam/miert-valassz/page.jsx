import Horizontalcontainer from "@/components/ui/horizontalContainer";
import MainCta from "@/components/ui/mainCta";
import Mainheader from "@/components/ui/mainHeader";
import Image from "next/image";

export default function Miertvalassz() {
  return (
    <>
      <Mainheader title={"Miért válassz?"} image={"/eva/miert-valassz.webp"} />
      <Horizontalcontainer bgcolor={"bg-[--white]"} padding={"lg:py-20 py-8"} align={'lg:flex-row'}>
          <div className="flex flex-col gap-8 lg:w-1/2">
            <h2 className="">
              Mert széleskörű szakmai tapasztalattal rendelkezem
            </h2>
            <ul className="grid flex-col gap-2 list-disc marker:text-[--aquamarine] ml-4">
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">15+ év nagyvállalati, multinacionális háttér,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">különböző marketing és kereskedelmi funkciókban szerzett üzleti szemlélet</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">FMCG márkamenedzsment tapasztalat,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">üzleti kommunikáció magyar, angol és német nyelven,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">10+ év vezetői tapasztalat,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">külföldi (osztrák) munkavégzés,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">együttműködés sokféle személyiségtípussal és nemzetiséggel,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">erős projektmenedzsment képességek,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">civil szférában szerzett tapasztalat,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">nők és munkahelyi kisebbségek támogatása,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">elköteleződés a sokszínűség, a munkahelyi egyenlőség és a befogadó vezetés iránt,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">rejtett előítéletek tudatosításának oktatása,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">összetartó és igényes szakmai közösségek, network építése,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">horizontális kapcsolatok és partneri viszony létrehozása a munkában és magánéletben egyaránt.</li>
            </ul>
          </div>
          <div className="relative lg:w-1/2 min-h-[40vh] overflow-hidden rounded-xl">
            <Image 
            src={"/eva/szeleskoru-tapasztalat.webp"} 
            fill
            style={{ objectFit: 'cover' }}
            />
          </div>
      </Horizontalcontainer>
      <Horizontalcontainer bgcolor={"bg-[--white]"} padding={"lg:py-20 py-16"} align={'lg:flex-row-reverse'}>
          <div className="flex flex-col gap-8 lg:w-1/2">
            <h2 className="">
                Mert ezeket saját magam is átéltem
            </h2>
            <ul className="flex flex-auto flex-wrap gap-2 list-disc marker:text-[--aquamarine] ml-4 w-full">
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">felelős szerepek betöltése egészen fiatal kortól,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">mentális betegséggel küzdő családtag támogatása,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">megküzdés méltatlan és/vagy diszkriminatív munkahelyi helyzetekkel,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">beilleszkedés más kultúrába,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">elhúzódó munkahelyi stressz és kiégés kezelése,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">szakmai útkeresés, pályaváltás,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">visszatérés a munkaerőpiacra kisgyermekes szülőként,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">munka- és magánélet összeegyeztetése, határtartás,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">önazonos szakmai célok megfogalmazása és megvalósítása,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">önismeret fejlesztése és traumafeldolgozás,</li>
              <li className="p-2 bg-white max-w-[-150px] shadow-sm">bátorság megtalálása a vállalkozóvá váláshoz. </li>
            </ul>
          </div>
          <div className="relative lg:w-1/2 min-h-[40vh] overflow-hidden rounded-xl">
            <Image 
            src={"/eva/ateltem.webp"}
            fill
            style={{ objectFit: 'cover' }}
            />
          </div>
      </Horizontalcontainer>
      <Horizontalcontainer bgcolor={"bg-white"} padding={"lg:py-20 py-16"} align={'lg:flex-row'}>
          <div className="flex flex-col justify-center gap-8 lg:w-1/3">
            <p className="text-xl">Mert egyetemi oklevelemet az ország egyik legkiválóbb és legtöbb gyakorlatot alkalmazó coaching képzési helyén, a <b>Budapesti Metropolitan Egyetemen szereztem</b>, ahol tapasztalt és ismert gyakorló coachoktól, pszichológusoktól és trénerektől tanulhattam egyéni és team coachingot.</p>
          </div>
          <div className="relative lg:w-2/3 min-h-[40vh] overflow-hidden rounded-xl">
            <Image 
            src={"/eva/bme.webp"}
            fill
            style={{ objectFit: 'cover' }}
            />
          </div>
      </Horizontalcontainer>
      <Horizontalcontainer bgcolor={"bg-white"} padding={"lg:py-20 py-16"} align={'lg:flex-row-reverse'}>
          <div className="flex flex-col justify-center gap-8 lg:w-1/3">
            <p className="text-xl">Mert tudásomat, önismeretemet és nyitottságomat <b>folyamatosan fejlesztem és pozitívan állok az enyémtől eltérő látásmódhoz</b>, hogy a coaching maximálisan az ügyfélről, ne pedig rólam szóljon.</p>
          </div>
          <div className="relative lg:w-2/3 min-h-[40vh] overflow-hidden rounded-xl">
            <Image 
            src={"/eva/tudas.webp"}
            fill
            style={{ objectFit: 'cover' }}
            />
          </div>
      </Horizontalcontainer>
      <MainCta title={''} subtitle={'Ha szívesen megismerkednél velem, foglalj egy ingyenes, 30 perces konzultációt!'}/>
    </>
  );
}