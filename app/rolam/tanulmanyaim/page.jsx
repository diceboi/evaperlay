import Horizontalcontainer from "@/components/ui/horizontalContainer";
import Mainheader from "@/components/ui/mainHeader";
import Regularcontainer from "@/components/ui/regularcontainer";
import Secondarybluebutton from "@/components/ui/SecondaryBlueButton";
import TimelineBlock from "@/components/ui/timelineBlock";

export default function Tanulmanyaim() {
  return (
    <>
      <Mainheader title={"Tanulmányaim"} image={"/eva/tanulmanyaim2.webp"} />
      <Regularcontainer padding={"lg:py-16 py-8"}>
        <h2 className="lg:mb-20 mb-8">Egyetemi tanulmányaim</h2>
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
      <Regularcontainer padding={"lg:py-16 py-8"}>
        <h2 className="lg:mb-20 mb-8">Egyéb képzések és tanulmányok</h2>

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
