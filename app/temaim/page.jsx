import Mainheader from "@/components/ui/mainHeader";
import Regularcontainer from "@/components/ui/regularcontainer";

export default function Temaim() {
  return (
    <>
      <Mainheader title={"Témáim"} image={"/eva/temaim2.webp"} />
      <Regularcontainer padding={"lg:py-32 py-16"} bgcolor={"bg-[--white]"}>
        <div className="flex flex-col">

        <p className="lg:text-xl pb-16">Az üzleti coachingon belül elsősorban ezekre a témákra fókuszálok, mert úgy érzem, hogy a személyes érdeklődésem, szakmai szenvedélyem, eddigi tapasztalatom és az érték, amelyet közösen teremthetünk, itt a legnagyobb.<br></br><br></br>Ez nem jelenti azt, hogy nem tudunk együtt dolgozni olyan témán, amely kívül esik ezeken, ugyanakkor látod, hogy mi az, ami hozzám igazán közel áll.</p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:py-16 py-8 border-b border-neutral-200">
            <div className="flex flex-col gap-4">
              <h2 className="">Önazonos munkavégzés és kommunikáció</h2>
            </div>
            <ul className="flex flex-auto flex-wrap gap-4 list-disc marker:text-[--aquamarine] ml-4 w-full">
              <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                Ki vagyok én?
              </li>
              <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                Milyen értékeket vallok?
              </li>
              <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                Mi a célom?
              </li>
              <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                Hogyan tudok eltérő szerepekben is önmagam maradni?
              </li>
              <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                Hogyan tudom az igényeimet képviselni?
              </li>
              <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                Hogyan tudok büszke lenni a munkámra?
              </li>
            </ul>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:py-16 py-8 border-b border-neutral-200">
            <div className="flex flex-col gap-4">
              <h2 className="">
                Mentális egészségmegőrzés és egyensúly tartása
              </h2>
            </div>
            <ul className="flex flex-auto flex-wrap gap-2 list-disc marker:text-[--aquamarine] ml-4 w-full">
              <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                Mi tesz boldoggá?
              </li>
              <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                Hogyan tudok magamra és a számomra fontos dolgokra figyelni?
              </li>
              <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                Hogyan tudom az egyensúlyt megtartani?
              </li>
              <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                Hova forduljak, ha már nagy a baj (pl. kiégés, mentális
                megbetegedés)?
              </li>
            </ul>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:py-16 py-8 border-b border-neutral-200">
            <div className="flex flex-col gap-4">
              <h2 className="">Munkahelyi egyenlőség</h2>
            </div>
            <ul className="flex flex-auto flex-wrap gap-2 list-disc marker:text-[--aquamarine] ml-4 w-full">
              <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                Hogyan tudok partneri viszonyban, szemmagasságban együttműködni
                másokkal?
              </li>
              <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                Hogyan tudok a munkahelyemen alulreprezentált csoportokat
                hatékonyan képviselni vagy alulreprezentált csoport tagjaként
                érvényesülni?
              </li>
            </ul>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:py-16 py-8 border-b border-neutral-200">
            <div className="flex flex-col gap-4">
              <h2 className="">Sokszínűség és befogadás</h2>
            </div>
            <ul className="flex flex-auto flex-wrap gap-2 list-disc marker:text-[--aquamarine] ml-4 w-full">
              <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                Mit tudok tenni egy sokszínű és befogadó szervezeti kultúráért?
              </li>
              <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                Hogyan tudok befogadó módon kommunikálni és vezetni?
              </li>
            </ul>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:py-16 py-8">
            <div className="flex flex-col gap-4">
              <h2 className="">Vezetési stílusok, szervezeti kultúra</h2>
            </div>
            <ul className="flex flex-auto flex-wrap gap-2 list-disc marker:text-[--aquamarine] ml-4 w-full">
              <li className="p-2 lg:ml-6 bg-white max-w-[-150px] shadow-sm">
                Hogyan teremtek olyan légkört, amelyben én és mások is jól érzik
                magukat?
              </li>
            </ul>
          </div>
        </div>
      </Regularcontainer>
    </>
  );
}
