import Mainheader from "@/components/ui/mainHeader";
import Regularcontainer from "@/components/ui/regularcontainer";
import Secondarybluebutton from "@/components/ui/SecondaryBlueButton";
import TimelineBlock from "@/components/ui/timelineBlock";

export async function generateMetadata() {

  return {
    title: 'Hol tartok szakmai utamon - Perlay Éva',
    description: 'Nézd meg jelenleg hol tartok szakmai utamon, és milyen kihívások várnak még a jövőben.',
    alternates: {
      canonical: `https://www.evaperlay.com/rolam/hol-tartok-a-szakmai-utamon`
    }
  }
  
}

export default function Holtartok() {
  return (
    <>
      <Mainheader
        title={"Rólam"}
        subtitle={'Hol tartok a szakmai utamon?'}
        image={"/eva/miert-valassz2.webp"}
        bgposition={'lg:bg-[center_-8rem] bg-[center_-0rem] lg:bg-[length:100%] bg-[length:200%]'}
      />
      <Regularcontainer padding={"lg:py-32 py-16"}>
        <TimelineBlock
          title={"2021 - 2023"}
          type={"start"}
          text={
            <>
              2021-2023 között végeztem el kiváló minősítéssel a Budapesti
              Metropolitan Egyetem Business és team coach képzését. 300+ óra
              egyéni és team coaching gyakorlat az ICF (Nemzetközi Coaching
              Szövetség) kompetenciái mentén és az ország legelismertebb
              szakembereinek útmutatása formálta tudásomat és coach
              identitásomat.
            </>
          }
        />

        <TimelineBlock
          title={"2022"}
          type={"middle"}
          text={
            <>
              2022-től vállalok egyéni coaching ügyfeleket. Olvass bele az
              ügyfeleimtől kapott visszajelzésekbe a{" "}
              <Secondarybluebutton
                text={"Coaching referenciák"}
                link={"/referenciak/coaching"}
              />{" "}
              menüpont alatt!
            </>
          }
        />

        <TimelineBlock
          title={"2023 - 2024"}
          type={"middle"}
          text={
            <>
              2023-2024-ben a Magyar Pszichodráma Egyesület 150 órás önismereti
              csoportjában vettem részt Daubner Eszter (kiképző pszichodráma
              pszichoterapeuta, szupervízor) és Vékássy Tímea (kiképző
              pszichodráma vezető) vezetésével.<br></br>
              <br></br>A pszichodrámát átütő módszertannak tartom önismeretem
              fejlesztése, érzelemvilágom megismerése és mentális egészségem
              megőrzése szempontjából, így biztosan folytatom a jövőben is.
            </>
          }
        />

        <TimelineBlock
          title={"2024 -"}
          type={"end"}
          text={
            <>
              2024-től képzésben lévő mentálhigiénés szakember vagyok, a Károli
              Gáspár Református Egyetem Bölcsészet- és Társadalomtudományi
              Karán.<br></br>
              <br></br>Jövőbeli terveim között szerepel az ICF és/vagy az EMCC
              (Európai Mentori és Coaching Tanács) nemzetközi minősítéseinek
              megszerzése, illetve a tranzakcionanalitikus (TA) és a
              megoldásközpontú coaching irányzatokban való elmélyedés is.
            </>
          }
        />
      </Regularcontainer>
    </>
  );
}
