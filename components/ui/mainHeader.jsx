import Regularcontainer from "./regularcontainer";
import Image from "next/image";

export default function Mainheader({ title, smalltitle, image }) {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center text-white w-full lg:min-h-[50vh] min-h-[30vh] rounded-b-xl overflow-hidden shadow-2xl px-2">
        <div className={`absolute w-full h-full bg-gradient-to-b from-[#1e066fb3] to-[#1e066f92] z-10 `}></div>
        <Image
          src={image}
          fill
          style={{ objectFit: "cover", objectPosition: "10% 30%" }}
          alt="hero image"
          className=""
        />
        <h1 className="z-10 drop-shadow-2xl text-center">{title}</h1>
        {smalltitle && (
          <p className="text-lg lg:w-1/2 w-full m-auto">{smalltitle}</p>
        )}
      </section>
    </>
  );
}
