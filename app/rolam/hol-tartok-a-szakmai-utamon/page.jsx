import Mainheader from '@/components/ui/mainHeader'
import Regularcontainer from '@/components/ui/regularcontainer'
import Secondarybluebutton from '@/components/ui/SecondaryBlueButton'

export default function Holtartok() {
  return (
    <>
    <Mainheader title={'Hol tartok a szakmai utamon?'} image={'/eva/hol-tartok.webp'}/>
    <Regularcontainer padding={"lg:py-32 py-16"}>
        <div className="relative flex flex-col gap-8 pl-12 lg:pl-48 py-8 ">
          <div className="absolute w-1 h-full lg:left-20 left-7 top-0 bg-gradient-to-b from-transparent to-[--dukeblue]"></div>
          <p className="lg:text-xl bg-white p-4">
            2021-2023 között végeztem el kiváló minősítéssel a Budapesti Metropolitan Egyetem Business és team coach képzését. 300+ óra egyéni és team coaching gyakorlat az ICF (Nemzetközi Coaching Szövetség) kompetenciái mentén és az ország legelismertebb szakembereinek útmutatása formálta tudásomat és coach identitásomat.
          </p>
          <p className="absolute bg-[--aquamarine] w-fit left-0 lg:top-1/2 -top-1 -translate-y-1/2 p-2 text-xl lg:text-2xl text-center font-medium">
            2021 - 2023
          </p>
        </div>
        <div className="relative flex flex-col gap-8 pl-20 lg:pl-48 py-8 ">
          <div className="absolute w-1 h-full lg:left-20 left-7 top-0 bg-[--dukeblue]"></div>
          <div className="lg:text-xl bg-white p-4">
            2022-től vállalok egyéni coaching ügyfeleket. Olvass bele az ügyfeleimtől kapott visszajelzésekbe a <Secondarybluebutton text={'coaching referenciák'} link={'/rolam/coaching-referenciak'}/> menüpont alatt!
          </div>
          <p className="absolute bg-[--aquamarine] w-fit lg:left-11 lg:top-1/2 -top-1 -translate-y-1/2 p-2 text-xl lg:text-2xl text-center font-medium">
            2022
          </p>
        </div>
        <div className="relative flex flex-col gap-8 pl-20 lg:pl-48 py-8 ">
          <div className="absolute w-1 h-full lg:left-20 left-7 top-0 bg-[--dukeblue]"></div>
          <p className="lg:text-xl bg-white p-4">
            2023-2024-ben a Magyar Pszichodráma Egyesület 150 órás önismereti csoportjában vettem részt Daubner Eszter (kiképző pszichodráma pszichoterapeuta, szupervízor) és Vékássy Tímea (kiképző pszichodráma vezető) vezetésével.<br></br><br></br>A pszichodrámát átütő módszertannak tartom önismeretem fejlesztése, érzelemvilágom megismerése és mentális egészségem megőrzése szempontjából, így biztosan folytatom a jövőben is.
          </p>
          <p className="absolute bg-[--aquamarine] w-fit left-0 lg:top-1/2 -top-1 -translate-y-1/2 p-2 text-xl lg:text-2xl text-center font-medium">
            2023 - 2024
          </p>
        </div>
        <div className="relative flex flex-col gap-8 pl-20 lg:pl-48 py-8 ">
          <div className="absolute w-1 h-full lg:left-20 left-7 top-0 bg-gradient-to-t from-transparent to-[--dukeblue]"></div>
          <p className="lg:text-xl bg-white p-4">
            2024-től képzésben lévő mentálhigiénés szakember vagyok, a Károli Gáspár Református Egyetem Bölcsészet- és Társadalomtudományi Karán.<br></br><br></br>Jövőbeli terveim között szerepel az ICF és/vagy az EMCC (Európai Mentori és Coaching Tanács) nemzetközi minősítéseinek megszerzése, illetve a tranzakcionanalitikus (TA) és a megoldásközpontú coaching irányzatokban való elmélyedés is.
          </p>
          <p className="absolute bg-[--aquamarine] w-fit lg:left-9 lg:top-1/2 -top-1 -translate-y-1/2 p-2 text-xl lg:text-2xl text-center font-medium">
            2024 -
          </p>
        </div>
      </Regularcontainer>
    </>
  )
}
