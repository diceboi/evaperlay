"use client";

import Mainheader from "@/components/ui/mainHeader";
import Regularcontainer from "@/components/ui/regularcontainer";
import Paragraph from "@/components/ui/typo/Paragraph";
import H2 from "@/components/ui/typo/H2";
import H3 from "@/components/ui/typo/H3";
import IconTile from "@/components/ui/IconTile";

import { GrLineChart } from "react-icons/gr";
import {
  FaStreetView,
  FaPersonRays,
  FaPersonWalkingDashedLineArrowRight,
  FaPersonWalkingArrowLoopLeft,
  FaPeopleRoof,
} from "react-icons/fa6";
import { RiGlassesLine } from "react-icons/ri";
import { TbStairsUp } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";

export default function Temaim() {
  return (
    <>
      <Mainheader
        title={"Témáim"}
        subtitle={"Ezekre a témákra fókuszálok"}
        image={"/eva/temaim3.webp"}
        bgposition={
          "lg:bg-[center_-0rem] bg-[right_-5rem_top_0rem] lg:bg-[length:100%] bg-[length:200%]"
        }
      />
      <Regularcontainer padding={"lg:py-32 py-16"} bgcolor={"bg-[--white]"}>
        <div className="flex flex-col">
          <Paragraph classname="pb-16">
            Az üzleti coachingon belül elsősorban ezekre a témákra fókuszálok,
            mert úgy érzem, hogy a személyes érdeklődésem, szakmai szenvedélyem,
            eddigi tapasztalatom és az érték, amelyet közösen teremthetünk, itt
            a legnagyobb.<br></br>
            <br></br>Ez nem jelenti azt, hogy nem tudunk együtt dolgozni olyan
            témán, amely kívül esik ezeken, ugyanakkor látod, hogy mi az, ami
            hozzám igazán közel áll.
          </Paragraph>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-16">
            <div className="flex flex-col items-center gap-8 lg:py-16 py-8 border-b border-neutral-200">
              <div className="flex flex-col gap-4">
                <H3 className="">Önazonos munkavégzés és kommunikáció</H3>
              </div>
              <ul className="flex flex-auto flex-wrap  gap-4 list-disc marker:text-[--aquamarine] w-full">
                <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                  <Paragraph>Ki vagyok én?</Paragraph>
                </li>
                <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                  <Paragraph>Milyen értékeket vallok?</Paragraph>
                </li>
                <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                  <Paragraph>Mi a célom?</Paragraph>
                </li>
                <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                  <Paragraph>
                    Hogyan tudok eltérő szerepekben is önmagam maradni?
                  </Paragraph>
                </li>
                <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                  <Paragraph>Hogyan tudom az igényeimet képviselni?</Paragraph>
                </li>
                <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                  <Paragraph>Hogyan tudok büszke lenni a munkámra?</Paragraph>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-8 lg:py-16 py-8 border-b border-neutral-200">
              <div className="flex flex-col gap-4">
                <H3 className="">
                  Mentális egészségmegőrzés és egyensúly tartása
                </H3>
              </div>
              <ul className="flex flex-auto flex-wrap  gap-4 list-disc marker:text-[--aquamarine] w-full">
                <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                  <Paragraph>Mi tesz boldoggá?</Paragraph>
                </li>
                <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                  <Paragraph>
                    Hogyan tudok magamra és a számomra fontos dolgokra figyelni?
                  </Paragraph>
                </li>
                <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                  <Paragraph>Hogyan tudom az egyensúlyt megtartani?</Paragraph>
                </li>
                <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                  <Paragraph>
                    Hova forduljak, ha már nagy a baj (pl. kiégés, mentális
                    megbetegedés)?
                  </Paragraph>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-8 lg:py-16 py-8 border-b border-neutral-200">
              <div className="flex flex-col gap-4">
                <H3 className="">Munkahelyi egyenlőség</H3>
              </div>
              <ul className="flex flex-auto flex-wrap  gap-4 list-disc marker:text-[--aquamarine] w-full">
                <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                  <Paragraph>
                    Hogyan tudok partneri viszonyban, szemmagasságban
                    együttműködni másokkal?
                  </Paragraph>
                </li>
                <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                  <Paragraph>
                    Hogyan tudok a munkahelyemen alulreprezentált csoportokat
                    hatékonyan képviselni vagy alulreprezentált csoport
                    tagjaként érvényesülni?
                  </Paragraph>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-8 lg:py-16 py-8 border-b border-neutral-200">
              <div className="flex flex-col gap-4">
                <H3 className="">Sokszínűség és befogadás</H3>
              </div>
              <ul className="flex flex-auto flex-wrap  gap-4 list-disc marker:text-[--aquamarine] w-full">
                <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                  <Paragraph>
                    Mit tudok tenni egy sokszínű és befogadó szervezeti
                    kultúráért?
                  </Paragraph>
                </li>
                <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                  <Paragraph>
                    Hogyan tudok befogadó módon kommunikálni és vezetni?
                  </Paragraph>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-8 lg:py-16 py-8">
              <div className="flex flex-col gap-4">
                <H3 className="">Vezetési stílusok, szervezeti kultúra</H3>
              </div>
              <ul className="flex flex-auto flex-wrap  gap-4 list-disc marker:text-[--aquamarine] w-full">
                <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                  <Paragraph>
                    Hogyan teremtek olyan légkört, amelyben én és mások is jól
                    érzik magukat?
                  </Paragraph>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Regularcontainer>
    </>
  );
}
