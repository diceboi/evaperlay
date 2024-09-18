import Mainheader from "@/components/ui/mainHeader";
import Horizontalcontainer from "@/components/ui/horizontalContainer";
import Image from "next/image";
import H2 from "@/components/ui/typo/H2";
import Paragraph from "@/components/ui/typo/Paragraph";
import Label from "@/components/ui/typo/Label";

export default function Multinacionalis() {
  return (
    <>
      <Mainheader
        title={"Rólam"}
        subtitle={'Multinacinális marketing és sales hátterem'}
        image={"/eva/multinacionalis.webp"}
        bgposition={'lg:bg-[center_-15rem] bg-[center]'}
      />
      <Horizontalcontainer
        bgcolor={"bg-[-white]"}
        padding={"lg:py-32 py-16"}
        align={"lg:flex-row"}
      >
        <div className="flex flex-col justify-center gap-8 lg:w-1/2">
          <H2>Nagyvállalati háttér</H2>
          <Paragraph className="">
          Szakmai pályafutásom első, jelentős szakaszát nagyvállalati, multinacionális közegben töltöttem. 15+ év elsősorban FMCG marketing és sales, valamint 10+ év vezetői tapasztalattal rendelkezem, amelyet olyan cégeknél szereztem, mint a <b>L&apos;Oréal, a Danone, a Kraft Foods - Mondelez, a Jacobs Douwe Egberts vagy az adidas.</b>
          </Paragraph>
        </div>
        <div className="relative flex flex-nowrap justify-center items-center h-fit gap-2 rotate-6 lg:w-1/2">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[--white] to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[--white] to-transparent z-10"></div>
          <div className="grid grid-cols-1 grid-rows-2 justify-center items-center gap-2 ">
            <div className="relative lg:w-32 w-24 lg:h-32 h-24 p-4 bg-white shadow-md">
              <Image
                src={"/logo/jde-logo.webp"}
                width={500}
                height={500}
                alt={"jde logo"}
              />
            </div>
            <div className="relative lg:w-32 w-24 lg:h-32 h-24 p-4 bg-white shadow-md">
              <Image
                src={"/logo/adidas-logo.webp"}
                width={500}
                height={500}
                alt={"jde logo"}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 justify-center items-center gap-2 mb-12 ">
            <div className="relative lg:w-32 w-24 lg:h-32 h-24 p-4 bg-white shadow-md">
              <Image
                src={"/logo/danone-logo.webp"}
                width={500}
                height={500}
                alt={"jde logo"}
              />
            </div>
            <div className="relative lg:w-32 w-24 lg:h-32 h-24 p-4 bg-white shadow-md">
              <Image
                src={"/logo/loreal-logo.webp"}
                width={500}
                height={500}
                alt={"jde logo"}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 justify-center items-center gap-2">
            <div className="relative lg:w-32 w-24 lg:h-32 h-24 p-4 bg-white shadow-md">
              <Image
                src={"/logo/mondelez-logo.webp"}
                width={500}
                height={500}
                alt={"jde logo"}
              />
            </div>
          </div>
        </div>
      </Horizontalcontainer>
      <Horizontalcontainer bgcolor={"bg-white"} padding={"lg:py-32 py-16"} align={'lg:flex-row-reverse'}>
          <div className="flex flex-col justify-center gap-8 lg:w-1/2">
           <H2>Marketing és sales tapasztalat</H2>
            <Paragraph className="">Széleskörű márkaépítési, kategória- és ügyfélmenedzsment tapasztalatra tettem szert, határokon átívelve vezettem csapatokat és komplex projekteket, illetve értem el kiemelkedő üzleti eredményeket budapesti, bécsi és közép-európai régiós pozíciókban.</Paragraph>
            <Paragraph className="">Ha <b>versenyszférában dolgozol,</b> garantáltan egy nyelvet fogunk beszélni, hiszem jól ismerem ezt a működést.</Paragraph>
            <Paragraph className="">Ha <b>más területen működsz,</b> az üzleti hátterem a stratégiai és strukturált gondolkodás, illetve a hatékony kommunikáció és csapatmunka miatt is hasznos lehet számodra.</Paragraph>
          </div>
          <div className="relative lg:w-1/2 lg:min-h-max min-h-[50vh] overflow-hidden rounded-xl">
            <Image 
            src={"/eva/nemzetkozi.webp"}
            fill
            style={{ objectFit: 'cover' }}
            />
          </div>
      </Horizontalcontainer>
    </>
  );
}
