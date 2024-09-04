import Horizontalcontainer from "@/components/ui/horizontalContainer";
import Mainheader from "@/components/ui/mainHeader";
import Regularcontainer from "@/components/ui/regularcontainer";
import Secondarybluebutton from "@/components/ui/SecondaryBlueButton";

export default function Tanulmanyaim() {
  return (
    <>
      <Mainheader title={"Tanulmányaim"} image={"/eva/tanulmanyaim.webp"} />
      <Regularcontainer padding={"lg:py-32 py-16"}>
        <h2 className="mb-20">Egyetemi tanulmányaim</h2>
        <div className="relative flex flex-col gap-8 pl-12 lg:pl-48 py-8 ">
          <div className="absolute w-1 h-full lg:left-20 left-7 top-0 bg-gradient-to-b from-transparent to-[--dukeblue]"></div>
          <p className="lg:text-xl bg-white p-4">
            Közgazdász külgazdasági szakon (BSc), Nemzetközi Marketing
            szakirányon, Budapesti Gazdasági Egyetem, Külkereskedelmi Kar
          </p>
          <p className="absolute bg-[--aquamarine] w-fit left-0 lg:top-1/2 -top-1 -translate-y-1/2 p-2 text-xl lg:text-2xl text-center font-medium">
            2003 - 2007
          </p>
        </div>
        <div className="relative flex flex-col gap-8 pl-20 lg:pl-48 py-8 ">
          <div className="absolute w-1 h-full lg:left-20 left-7 top-0 bg-[--dukeblue]"></div>
          <div className="lg:text-xl bg-white p-4">
            Marketing mesterképzés (MSc), Budapesti Gazdasági Egyetem,
            Külkereskedelmi Kar
          </div>
          <p className="absolute bg-[--aquamarine] w-fit left-0 lg:top-1/2 -top-1 -translate-y-1/2 p-2 text-xl lg:text-2xl text-center font-medium">
            2010 - 2012
          </p>
        </div>
        <div className="relative flex flex-col gap-8 pl-20 lg:pl-48 py-8 ">
          <div className="absolute w-1 h-full lg:left-20 left-7 top-0 bg-[--dukeblue]"></div>
          <p className="lg:text-xl bg-white p-4">
            Business és team coach, Budapesti Metropolitan Egyetem
          </p>
          <p className="absolute bg-[--aquamarine] w-fit left-0 lg:top-1/2 -top-1 -translate-y-1/2 p-2 text-xl lg:text-2xl text-center font-medium">
            2021 - 2023
          </p>
        </div>
        <div className="relative flex flex-col gap-8 pl-20 lg:pl-48 py-8 ">
          <div className="absolute w-1 h-full lg:left-20 left-7 top-0 bg-gradient-to-t from-transparent to-[--dukeblue]"></div>
          <p className="lg:text-xl bg-white p-4">
            Mentálhigiénés segítő, Károli Gáspár Református Egyetem Bölcsészet-
            és Társadalomtudományi Kar
          </p>
          <p className="absolute bg-[--aquamarine] w-fit lg:left-9 lg:top-1/2 -top-1 -translate-y-1/2 p-2 text-xl lg:text-2xl text-center font-medium">
            2024 -
          </p>
        </div>
      </Regularcontainer>
      <Regularcontainer padding={"lg:py-32 py-16"}>
        <h2 className="mb-20">Egyéb képzések és tanulmányok</h2>
        <div className="relative flex flex-col gap-8 pl-12 lg:pl-48 py-8 ">
          <div className="absolute w-1 h-full lg:left-20 left-7 top-0 bg-gradient-to-b from-transparent to-[--dukeblue]"></div>
          <p className="lg:text-xl bg-white p-4">
            Magyar Pszichodráma Egyesület, 150 órás önismereti csoport Daubner Eszter és Vékássy Tímea vezetésével
          </p>
          <p className="absolute bg-[--aquamarine] w-fit left-0 lg:top-1/2 -top-1 -translate-y-1/2 p-2 text-xl lg:text-2xl text-center font-medium">
            2023 - 2024
          </p>
        </div>
      </Regularcontainer>
    </>
  );
}
