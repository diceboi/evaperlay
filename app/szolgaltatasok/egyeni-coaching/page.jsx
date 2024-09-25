"use client"

import Mainheader from "@/components/ui/mainHeader";
import Regularcontainer from "@/components/ui/regularcontainer";
import Paragraph from "@/components/ui/typo/Paragraph";
import Secondarybluebutton from "@/components/ui/SecondaryBlueButton";
import Primarygreenbuton from "@/components/ui/primaryGreenButon";
import { useContext } from "react";
import { CalendlyContext } from "@/app/CalendlyContext";
import GreenBorderTile from "@/components/ui/GreenBorderTile";
import H2 from "@/components/ui/typo/H2";
import H3 from "@/components/ui/typo/H3";
import TimelineBlock from "@/components/ui/timelineBlock";

export default function Mireszamithatsz() {

  const { toggleCalendly } = useContext(CalendlyContext)

  return (
    <>
      <Mainheader title={'Hogy dolgozom?'} subtitle={'Egyéni coaching'} image={'/eva/beszelgeto2.webp'} bgposition={'lg:bg-[center_-5rem] bg-[center]'} />
      <Regularcontainer padding={'lg:py-32 py-16'}>
        <div className="flex flex-col gap-16">

          <H2 classname="lg:text-center lg:self-center">Mire számíthatsz?</H2>
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-5 lg:grid-rows-2 lg:grid-flow-row gap-8 lg:border-0 border-l-4 border-dashed border-[--mint]">
                <GreenBorderTile text={<Paragraph><b>Egyenrangú </b>partnerekként</Paragraph>}/>
                <GreenBorderTile text={<Paragraph>azzal fogunk dolgozni, ami <b>számodra fontos</b>.</Paragraph>}/>
                <GreenBorderTile text={<Paragraph><b>Te felelsz</b> a folyamat során levont tanulságokért és céljaid megvalósításáért.</Paragraph>}/>
                <GreenBorderTile text={<Paragraph><b>Én felelek</b> a coaching technikák alkalmazásáért és az ülések strukturálásáért.</Paragraph>}/>
                <GreenBorderTile text={<Paragraph><b>Nem lesz részed</b> tanácsadásban (tapasztalatmegosztásban is csak kivételes esetben).</Paragraph>}/>
                <GreenBorderTile text={<Paragraph><b>Jövőorientáltan</b>, azaz nem a “miérteken”, hanem a “hogyanokon” fogunk dolgozni.</Paragraph>}/>
                <GreenBorderTile text={<Paragraph>Végig <b>mérhető célok</b> mentén.</Paragraph>}/>
              </div>
        </div>

        <div className="relative flex flex-col ">
          <div className="hidden absolute w-1 h-full bg-white top-16 lg:top-32 left-1/2 -translate-x-1/2"></div>
          <H3 classname={'pt-32 pb-8 lg:self-center'}>Hogyan zajlik a folyamat?</H3>

          <TimelineBlock
            title={'0. beszélgetés'}
            type={'start'}
            text={
              <>
                A coaching munka egy ingyenes, 30 perces online konzultációval, az ún. 0. beszélgetéssel indul.&nbsp;
                <Secondarybluebutton text={"Foglald le itt!"} link={'/idopontfoglalas'} />
                <br />
                <br />
                Ebben a fázisban mindketten fel tudjuk mérni, hogy céljaid megvalósításában én tudlak-e a legjobban támogatni, szeretnénk-e elkezdeni és mikortól a közös munkát. Itt egyeztethetünk a coaching folyamat részleteiről, az árakról és bármilyen egyéb kérdéseddel kapcsolatban is.
              </>
            }
          />

          <TimelineBlock
            title={'Szerződéskötés'}
            type={'middle'}
            text={
              <>
                Ha leszerződünk a coaching folyamatra, azt rugalmasan tudjuk az igényeidhez igazítani.
              </>
            }
          />

          <TimelineBlock
            title={'A coaching folyamat'}
            type={'middle'}
            text={
              <>
                Átlagosan 6-8 alkalommal fogunk találkozni, körülbelül 2-3 heti
                rendszerességgel, jellemzően 60 perces hosszúságú online és/vagy
                személyes ülések erejére. Két alkalom között élesben is
                kipróbálhatod, amit fontosnak tartasz.
              </>
            }
          />

          <TimelineBlock
            title={'Utánkövetés'}
            type={'end'}
            text={
              <>
                A coaching folyamat lezárását követően javaslom fél éves és éves
                utánkövető alkalmak beiktatását, hogy segítségedre lehessek a
                változások végrehajtásánál is.
              </>
            }
          /> 

        <Primarygreenbuton
          text={"Kezdjünk bele"}
          link={'/idopontfoglalas'}
          classname={"self-center mt-16"}
        />
        </div>  
      </Regularcontainer>
    </>
  );
}