import Image from "next/image";
import H1 from "./typo/H1";
import SubTitle from "./typo/SubTitle";

export default function Mainheader({ title, subtitle, image, bgposition }) {
  return (
    <>
      <section style={{backgroundImage:`url("${image}")`}} className={`relative flex flex-col items-center justify-end text-white w-full lg:h-[60vh] h-[50vh] overflow-hidden shadow-2xl px-2 bg-cover ${bgposition} bg-no-repeat`}>
        <div className={`absolute w-full h-full bg-gradient-to-b from-[#1e066fb3] to-[#1e066f92] z-10 `}></div>
        <div className="flex flex-col items-center gap-4 py-8 z-10">
            <SubTitle>
            {title}
            </SubTitle>
            <H1 classname={'text-center'}>{subtitle}</H1>
        </div>
      </section>
    </>
  );
}
