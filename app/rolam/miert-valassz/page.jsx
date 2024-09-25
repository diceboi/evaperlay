import Ctaone from "@/components/Ctaone";
import Horizontalcontainer from "@/components/ui/horizontalContainer";
import MainCta from "@/components/ui/mainCta";
import Mainheader from "@/components/ui/mainHeader";
import H2 from "@/components/ui/typo/H2";
import Paragraph from "@/components/ui/typo/Paragraph";
import Image from "next/image";
import { MdOutlineHorizontalRule } from "react-icons/md";

export async function generateMetadata() {

  return {
    title: 'Miért válassz? - Perlay Éva',
    description: 'A sok közül miért pont engem válassz? Olvass bele munkamódszerembe, céljaimba, és döntsd el hogy szeretnél-e velem dolgozni.',
    alternates: {
      canonical: `https://www.evaperlay.com/rolam/miert-valassz`
    }
  }
  
}

export default function Miertvalassz() {
  return (
    <>
      <Mainheader
        title={"Rólam"}
        subtitle={"Miért lehetek számodra hiteles partner?"}
        image={"/eva/miert-valassz.webp"}
        bgposition={'lg:bg-[center_-2rem] bg-[center_-0rem_top_0rem] lg:bg-[length:100%] bg-[length:250%] '}
      />
      <Horizontalcontainer
        bgcolor={"bg-[--white]"}
        padding={"lg:py-32 py-16"}
        align={"lg:flex-row"}
      >
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="flex flex-col gap-4">
            <H2 className="">
              Mert széleskörű szakmai tapasztalattal rendelkezem:
            </H2>
          </div>

          <ul className="grid flex-col gap-2 list-disc marker:text-[--aquamarine] ml-4">
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>
                15+ év nagyvállalati, multinacionális háttér
              </Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>
                különböző marketing és kereskedelmi funkciókban szerzett üzleti
                szemlélet
              </Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>FMCG márkamenedzsment tapasztalat</Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>
                üzleti kommunikáció magyar, angol és német nyelven
              </Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>10+ év vezetői tapasztalat</Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>külföldi (osztrák) munkavégzés</Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>
                együttműködés sokféle személyiségtípussal és nemzetiséggel
              </Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>erős projektmenedzsment képességek</Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>civil szférában szerzett tapasztalat</Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>nők és munkahelyi kisebbségek támogatása</Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>
                elköteleződés a sokszínűség, a munkahelyi egyenlőség és a
                befogadó vezetés iránt
              </Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>
                rejtett előítéletek tudatosításának oktatása
              </Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>
                összetartó és igényes szakmai közösségek, network építése
              </Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>
                horizontális kapcsolatok és partneri viszony létrehozása a
                munkában és magánéletben egyaránt.
              </Paragraph>
            </li>
          </ul>
        </div>
        <div className="relative lg:w-1/2 min-h-[40vh] overflow-hidden rounded-xl">
          <Image
            src={"/eva/ateltem2.webp"}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </Horizontalcontainer>
      <Horizontalcontainer
        bgcolor={"bg-[--white]"}
        padding={"lg:py-20 py-16"}
        align={"lg:flex-row-reverse"}
      >
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="flex flex-col gap-4">
            <H2 className="">Mert ezeket saját magam is átéltem:</H2>
          </div>
          <ul className="flex flex-auto flex-wrap gap-2 list-disc marker:text-[--aquamarine] ml-4 w-full">
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>
                felelős szerepek betöltése egészen fiatal kortól
              </Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>
                mentális betegséggel küzdő családtag támogatása
              </Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>
                megküzdés méltatlan és/vagy diszkriminatív munkahelyi
              </Paragraph>
              helyzetekkel
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>beilleszkedés más kultúrába</Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>
                elhúzódó munkahelyi stressz és kiégés kezelése
              </Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>szakmai útkeresés, pályaváltás</Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>
                visszatérés a munkaerőpiacra kisgyermekes szülőként
              </Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>
                munka- és magánélet összeegyeztetése, határtartás
              </Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>
                önazonos szakmai célok megfogalmazása és megvalósítása
              </Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>önismeret fejlesztése és traumafeldolgozás</Paragraph>
            </li>
            <li className="p-2 bg-white max-w-[-150px] shadow-sm">
              <Paragraph>
                bátorság megtalálása a vállalkozóvá váláshoz.
              </Paragraph>
            </li>
          </ul>
        </div>
        <div className="relative lg:w-1/2 min-h-[40vh] overflow-hidden rounded-xl">
          <Image
            src={"/eva/ateltem3.webp"}
            fill
            style={{ objectFit: "cover", objectPosition: "0% 0%" }}
          />
        </div>
      </Horizontalcontainer>
      <Horizontalcontainer
        bgcolor={"bg-white"}
        padding={"lg:py-20 py-16"}
        align={"lg:flex-row"}
      >
        <div className="flex flex-col justify-center gap-8 lg:w-1/2">
          <div className="flex flex-col gap-4">
            <H2 className="">Mert kiváló emberektől tanulhattam:</H2>
          </div>
          <Paragraph className="text-xl">
            Egyetemi oklevelemet az ország egyik legkiválóbb és legtöbb
            gyakorlatot alkalmazó coaching képzési helyén, a{" "}
            <b>Budapesti Metropolitan Egyetemen szereztem</b>, ahol tapasztalt
            és ismert gyakorló coachoktól, pszichológusoktól és trénerektől
            tanulhattam egyéni és team coachingot.
          </Paragraph>
        </div>
        <div className="relative lg:w-1/2 min-h-[50vh] overflow-hidden rounded-xl">
          <Image
            src={"/eva/egyenlito.webp"}
            fill
            style={{ objectFit: "cover", objectPosition: "0%, 20%" }}
          />
        </div>
      </Horizontalcontainer>
      <Horizontalcontainer
        bgcolor={"bg-white"}
        padding={"lg:py-20 py-16"}
        align={"lg:flex-row-reverse"}
      >
        <div className="flex flex-col justify-center gap-8 lg:w-1/2">
          <div className="flex flex-col gap-4">
            <H2 className="">Mert folyamatosan fejlesztem magam:</H2>
          </div>
          <Paragraph className="text-xl">
            Tudásomat, önismeretemet és nyitottságomat{" "}
            <b>
              folyamatosan fejlesztem és pozitívan állok az enyémtől eltérő
              látásmódhoz
            </b>
            , hogy a coaching maximálisan az ügyfélről, ne pedig rólam szóljon.
          </Paragraph>
        </div>
        <div className="relative lg:w-1/2 min-h-[50vh] overflow-hidden rounded-xl">
          <Image
            src={"/eva/fejlodes.webp"}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </Horizontalcontainer>
      <Ctaone />
    </>
  );
}
