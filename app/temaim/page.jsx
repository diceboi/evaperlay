import Mainheader from "@/components/ui/mainHeader"
import Regularcontainer from "@/components/ui/regularcontainer"

export default function Temaim() {
  return (
    <>
    <Mainheader title={'Témáim'} image={'/eva/temaim.webp'}/>
    <Regularcontainer padding={"lg:py-32 py-16"} bgcolor={'bg-[--white]'}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            <div className="relative flex flex-col gap-4 p-4 shadow-md bg-white">
                <p className="absolute flex flex-col items-center justify-center -top-3 -left-3 w-6 h-6 bg-[--aquamarine] rounded-full">1.</p>
                <h3>Önazonos munkavégzés és kommunikáció</h3>
                <p>Ki vagyok én? Milyen értékeket vallok? Mi a célom? Hogyan tudok eltérő szerepekben is önmagam maradni? Hogyan tudom az igényeimet képviselni? Hogyan tudok büszke lenni a munkámra?</p>
            </div>
            <div className="relative flex flex-col gap-4 p-4 shadow-md bg-white">
                <p className="absolute flex flex-col items-center justify-center -top-3 -left-3 w-6 h-6 bg-[--aquamarine] rounded-full">2.</p>
                <h3>Mentális egészségmegőrzés és egyensúly tartása</h3>
                <p>Mi tesz boldoggá? Hogyan tudok magamra és a számomra fontos dolgokra figyelni? Hogyan tudom az egyensúlyt megtartani? Hova forduljak, ha már nagy a baj (pl. kiégés, mentális megbetegedés)?</p>
            </div>
            <div className="relative flex flex-col gap-4 p-4 shadow-md bg-white">
                <p className="absolute flex flex-col items-center justify-center -top-3 -left-3 w-6 h-6 bg-[--aquamarine] rounded-full">3.</p>
                <h3>Munkahelyi egyenlőség</h3>
                <p>Hogyan tudok partneri viszonyban, szemmagasságban együttműködni másokkal? Hogyan tudok a munkahelyemen alulreprezentált csoportokat hatékonyan képviselni vagy alulreprezentált csoport tagjaként érvényesülni?</p>
            </div>
            <div className="relative flex flex-col gap-4 p-4 shadow-md bg-white">
                <p className="absolute flex flex-col items-center justify-center -top-3 -left-3 w-6 h-6 bg-[--aquamarine] rounded-full">4.</p>
                <h3>Sokszínűség és befogadás</h3>
                <p>Mit tudok tenni egy sokszínű és befogadó szervezeti kultúráért? Hogyan tudok befogadó módon kommunikálni és vezetni?</p>
            </div>
            <div className="relative flex flex-col gap-4 p-4 shadow-md bg-white">
                <p className="absolute flex flex-col items-center justify-center -top-3 -left-3 w-6 h-6 bg-[--aquamarine] rounded-full">5.</p>
                <h3>Vezetési stílusok, szervezeti kultúra</h3>
                <p>Hogyan teremtek olyan légkört, amelyben én és mások is jól érzik magukat?</p>
            </div>
            <div className="relative flex flex-col gap-4 p-4">
                <p>Az üzleti coachingon belül elsősorban ezekre a témákra fókuszálok, mert úgy érzem, hogy a személyes érdeklődésem, szakmai szenvedélyem, eddigi tapasztalatom és az érték, amelyet közösen teremthetünk, itt a legnagyobb.<br></br><br></br>Ez nem jelenti azt, hogy nem tudunk együtt dolgozni olyan témán, amely kívül esik ezeken, ugyanakkor látod, hogy mi az, ami hozzám igazán közel áll.</p>
            </div>
        </div>
    </Regularcontainer>
    </>
  )
}
