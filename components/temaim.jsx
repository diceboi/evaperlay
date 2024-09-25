"use client"

import Regularcontainer from "@/components/ui/regularcontainer";
import Horizontalcontainer from "@/components/ui/horizontalContainer";
import Image from "next/image";
import Paragraph from "@/components/ui/typo/Paragraph";
import H2 from "@/components/ui/typo/H2";
import H3 from "@/components/ui/typo/H3";

export default function Temaim() {
  return (
    <>
    <Horizontalcontainer
        bgcolor={"bg-[--white]"}
        padding={"lg:pt-32 pt-16 pb-8"}
        align={"lg:flex-row"}
      >
        <div className="flex flex-col justify-center gap-8 lg:w-1/2">
          <div className="flex flex-col gap-4">
            <H2 className="">Szenvedély és tapasztalat</H2>
          </div>
          <Paragraph className="">
            Az üzleti coachingon belül elsősorban ezekre a témákra fókuszálok,
            mert úgy érzem, hogy a személyes érdeklődésem, szakmai szenvedélyem,
            eddigi tapasztalatom és az érték, amelyet közösen teremthetünk, itt
            a legnagyobb.<br></br>
            <br></br>Ez nem jelenti azt, hogy nem tudunk együtt dolgozni olyan
            témán, amely kívül esik ezeken, ugyanakkor látod, hogy mi az, ami
            hozzám igazán közel áll.
          </Paragraph>
        </div>
        <div className="relative lg:w-1/2 lg:min-h-max min-h-[50vh] overflow-hidden rounded-xl">
          <Image
            src={"/eva/idopontfoglalo.webp"}
            fill
            style={{ objectFit: "cover", objectPosition: "0% 10%" }}
          />
        </div>
      </Horizontalcontainer>
      <Regularcontainer padding={"lg:py-32 py-16"} bgcolor={"bg-[--white]"}>
        <div className="flex flex-col">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-16">
            <div className="flex flex-col gap-8 lg:py-16 py-8 bg-white shadow-lg lg:p-8 p-4">
              <div className="flex flex-col gap-4">
                <H3 className="text-left">
                  Önazonos munkavégzés és kommunikáció
                </H3>
              </div>
              <ul className="flex flex-col flex-wrap gap-4 list-disc marker:text-[--aquamarine] w-full">
                <li className=" ml-6 ">
                  <Paragraph>Ki vagyok én?</Paragraph>
                </li>
                <li className=" ml-6 ">
                  <Paragraph>Milyen értékeket vallok?</Paragraph>
                </li>
                <li className=" ml-6 ">
                  <Paragraph>Mi a célom?</Paragraph>
                </li>
                <li className=" ml-6 ">
                  <Paragraph>
                    Hogyan tudok eltérő szerepekben is önmagam maradni?
                  </Paragraph>
                </li>
                <li className=" ml-6 ">
                  <Paragraph>Hogyan tudom az igényeimet képviselni?</Paragraph>
                </li>
                <li className=" ml-6 ">
                  <Paragraph>Hogyan tudok büszke lenni a munkámra?</Paragraph>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8 lg:py-16 py-8 bg-white shadow-lg lg:p-8 p-4">
              <div className="flex flex-col gap-4">
                <H3 className="text-left">
                  Mentális egészségmegőrzés és egyensúly tartása
                </H3>
              </div>
              <ul className="flex flex-col flex-wrap  gap-4 list-disc marker:text-[--aquamarine] w-full">
                <li className=" ml-6 ">
                  <Paragraph>Mi tesz boldoggá?</Paragraph>
                </li>
                <li className=" ml-6 ">
                  <Paragraph>
                    Hogyan tudok magamra és a számomra fontos dolgokra figyelni?
                  </Paragraph>
                </li>
                <li className=" ml-6 ">
                  <Paragraph>Hogyan tudom az egyensúlyt megtartani?</Paragraph>
                </li>
                <li className=" ml-6 ">
                  <Paragraph>
                    Hova forduljak, ha már nagy a baj (pl. kiégés, mentális
                    megbetegedés)?
                  </Paragraph>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8 lg:py-16 py-8 bg-white shadow-lg lg:p-8 p-4">
              <div className="flex flex-col gap-4">
                <H3 className="text-left">Munkahelyi egyenlőség</H3>
              </div>
              <ul className="flex flex-col flex-wrap  gap-4 list-disc marker:text-[--aquamarine] w-full">
                <li className=" ml-6 ">
                  <Paragraph>
                    Hogyan tudok partneri viszonyban, szemmagasságban
                    együttműködni másokkal?
                  </Paragraph>
                </li>
                <li className=" ml-6 ">
                  <Paragraph>
                    Hogyan tudok a munkahelyemen alulreprezentált csoportokat
                    hatékonyan képviselni vagy alulreprezentált csoport
                    tagjaként érvényesülni?
                  </Paragraph>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8 lg:py-16 py-8 bg-white shadow-lg lg:p-8 p-4">
              <div className="flex flex-col gap-4">
                <H3 className="text-left">Sokszínűség és befogadás</H3>
              </div>
              <ul className="flex flex-col flex-wrap  gap-4 list-disc marker:text-[--aquamarine] w-full">
                <li className=" ml-6 ">
                  <Paragraph>
                    Mit tudok tenni egy sokszínű és befogadó szervezeti
                    kultúráért?
                  </Paragraph>
                </li>
                <li className=" ml-6 ">
                  <Paragraph>
                    Hogyan tudok befogadó módon kommunikálni és vezetni?
                  </Paragraph>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8 lg:py-16 py-8 bg-white shadow-lg lg:p-8 p-4">
              <div className="flex flex-col gap-4">
                <H3 className="text-left">
                  Vezetési stílusok, szervezeti kultúra
                </H3>
              </div>
              <ul className="flex flex-col flex-wrap  gap-4 list-disc marker:text-[--aquamarine] w-full">
                <li className=" ml-6 ">
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
  )
}
