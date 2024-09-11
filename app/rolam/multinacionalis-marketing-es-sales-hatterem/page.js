import Mainheader from "@/components/ui/mainHeader";
import Horizontalcontainer from "@/components/ui/horizontalContainer";
import Image from "next/image";

export default function Multinacionalis() {
  return (
    <>
      <Mainheader
        title={"Multinacinális marketing és sales hátterem"}
        image={"/eva/multinacionalis.webp"}
      />
      <Horizontalcontainer
        bgcolor={"bg-[-white]"}
        padding={"lg:py-32 py-16"}
        align={"lg:flex-row"}
      >
        <div className="flex flex-col justify-center gap-8 lg:w-1/2">
          <h2>15+ éve a pályán</h2>
          <p className="">
            Szakmai pályafutásom első, jelentős szakaszát nagyvállalati,
            multinacionális közegben töltöttem. 15+ év elsősorban FMCG marketing
            és sales, valamint 10+ év vezetői tapasztalattal rendelkezem,
            amelyet olyan cégeknél szereztem, mint a <b>L&apos;Oréal, a Danone, a Kraft
            Foods - Mondelez, a Jacobs Douwe Egberts vagy az adidas</b>.
          </p>
          <div className="grid lg:grid-cols-3 lg:gap-0 gap-2 justify-evenly">
            <div
              className="flex flex-col items-center justify-evenly w-full lg:border-r border-0 border-neutral-400 px-8 text-center lg:bg-transparent bg-white gap-2 hover:bg-white py-4"
            >
              <h3>15+ év</h3>
              <p className="text-sm">FMCG marketing & sales</p>
            </div>
            <div
              className="flex flex-col items-center justify-evenly w-full lg:border-r border-0 border-neutral-400 px-8 text-center lg:bg-transparent bg-white gap-2 hover:bg-white py-4"
            >
              <h3>10+ év</h3>
              <p className="text-sm">vezetői tapasztalat</p>
            </div>
            <div
              className="flex flex-col items-center justify-evenly w-full px-8 text-center lg:bg-transparent bg-white gap-2 hover:bg-white py-4"
            >
              <h3>Multinacionális</h3>
              <p className="text-sm">tapasztalat</p>
            </div>
          </div>
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
           <h2>Tapasztalat</h2>
            <p className="">Széleskörű márkaépítési, kategória- és ügyfélmenedzsment tapasztalatra tettem szert, határokon átívelve vezettem csapatokat és komplex projekteket, illetve értem el kiemelkedő üzleti eredményeket budapesti, bécsi és közép-európai régiós pozíciókban.</p>
            <p className="">Ha <b>versenyszférában dolgozol</b> garantáltan egy nyelvet fogunk beszélni, hiszem jól ismerem ezt a működést.</p>
            <p className="">Ha <b>más területen működsz</b> az üzleti hátterem a stratégiai és strukturált gondolkodás, illetve a hatékony kommunikáció és csapatmunka miatt is hasznos lehet számodra.</p>
          </div>
          <div className="relative lg:w-1/2 min-h-[60vh] overflow-hidden rounded-xl">
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
