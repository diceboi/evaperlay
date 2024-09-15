import Horizontalcontainer from "@/components/ui/horizontalContainer";
import Mainheader from "@/components/ui/mainHeader";
import Regularcontainer from "@/components/ui/regularcontainer";
import Secondarybluebutton from "@/components/ui/SecondaryBlueButton";
import TimelineBlock from "@/components/ui/timelineBlock";
import H2 from "@/components/ui/typo/H2";

export default function Tanulmanyaim() {
  return (
    <>
      <Mainheader title={"Rólam"} subtitle={'Tanulmányaim'} image={"/eva/tanulmanyaim2.webp"} />
      <Regularcontainer padding={"lg:pt-32 pt-16 lg:pb-16 pb-8"}>
        <H2 classname="pb-8">Egyetemi tanulmányaim</H2>
        <TimelineBlock
          title={"2003 - 2007"}
          type={"start"}
          text={
            <>
              Közgazdász külgazdasági szakon (BSc), Nemzetközi Marketing
              szakirányon, Budapesti Gazdasági Egyetem, Külkereskedelmi Kar
            </>
          }
        />
        <TimelineBlock
          title={"2010 - 2012"}
          type={"middle"}
          text={
            <>
              Marketing mesterképzés (MSc), Budapesti Gazdasági Egyetem,
              Külkereskedelmi Kar
            </>
          }
        />
        <TimelineBlock
          title={"2021 - 2023"}
          type={"middle"}
          text={
            <>
              Business és team coach, Budapesti Metropolitan Egyetem
            </>
          }
        />
        <TimelineBlock
          title={"2024 -"}
          type={"end"}
          text={
            <>
              Mentálhigiénés segítő, Károli Gáspár Református Egyetem Bölcsészet-
              és Társadalomtudományi Kar
            </>
          }
        />
      </Regularcontainer>
      <Regularcontainer padding={"pt-16 lg:pb-32 pb-16"}>
        <H2 classname="pb-8">Egyéb képzések és tanulmányok</H2>

        <TimelineBlock
          title={"2023 - 2024"}
          type={"start"}
          text={
            <>
              Magyar Pszichodráma Egyesület, 150 órás önismereti csoport Daubner Eszter és Vékássy Tímea vezetésével
            </>
          }
        />
      </Regularcontainer>
    </>
  );
}
