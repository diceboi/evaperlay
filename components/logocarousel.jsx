import Image from "next/image";

export default function Logocarousel() {
  return (
      <div className="container logos flex flex-col relative overflow-hidden h-[20vh] pb-16 ">
      <div className="absolute flex w-[900%] lg:w-[300%] top-1/2">
        <div className="logos-slide inline-flex justify-between w-[150%] gap-8">
          <div className="flex justify-center items-center w-1/3 lg:w-1/5 ml-8">
            <Image
              src="/logo/telekom-logo.webp"
              width={70}
              height={70}
              alt="Telekom logó"
            />
          </div>
          <div className="flex justify-center items-center w-1/3 lg:w-1/5">
            <Image
              src="/logo/danubius-hotels-logo.webp"
              width={70}
              height={70}
              alt="Danubius Hotels logó"
            />
          </div>
          <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
            <Image
              src="/logo/eon-logo.webp"
              width={100}
              height={100}
              alt="Eon logó"
            />
          </div>
          <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
            <Image
              src="/logo/linde-logo.webp"
              width={100}
              height={100}
              alt="Linde logó"
            />
          </div>
          <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
            <Image
              src="/logo/nn-logo.webp"
              width={100}
              height={100}
              alt="NN logó"
            />
          </div>
          <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
            <Image
              src="/logo/richter-gedeon-logo.webp"
              width={100}
              height={100}
              alt="Richter Gedeon logó"
            />
          </div>
          <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
            <Image
              src="/logo/tesco-logo.webp"
              width={100}
              height={100}
              alt="Tesco logó"
            />
          </div>
          <div className="flex justify-center items-center w-1/3 lg:w-1/5">
            <Image
              src="/logo/union-biztosito-logo.webp"
              width={100}
              height={100}
              alt="Union biztosító logó"
            />
          </div>
          <div className="flex justify-center items-center w-1/3 lg:w-1/5">
            <Image
              src="/logo/morgan-stanley-logo.webp"
              width={100}
              height={100}
              alt="Morgan Stanley logó"
            />
          </div>
          <div className="flex justify-center items-center w-1/3 lg:w-1/5">
            <Image
              src="/logo/egyenlito-alapitvany-logo.webp"
              width={70}
              height={70}
              alt="Egyenlítő alapítvány logó"
            />
          </div>
        </div>

        <div className="logos-slide inline-flex justify-between w-[150%] gap-8">
          <div className="flex justify-center items-center w-1/3 lg:w-1/5 ml-8">
            <Image
              src="/logo/telekom-logo.webp"
              width={70}
              height={70}
              alt="Telekom logó"
            />
          </div>
          <div className="flex justify-center items-center w-1/3 lg:w-1/5">
            <Image
              src="/logo/danubius-hotels-logo.webp"
              width={70}
              height={70}
              alt="Danubius Hotels logó"
            />
          </div>
          <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
            <Image
              src="/logo/eon-logo.webp"
              width={100}
              height={100}
              alt="Eon logó"
            />
          </div>
          <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
            <Image
              src="/logo/linde-logo.webp"
              width={100}
              height={100}
              alt="Linde logó"
            />
          </div>
          <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
            <Image
              src="/logo/nn-logo.webp"
              width={100}
              height={100}
              alt="NN logó"
            />
          </div>
          <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
            <Image
              src="/logo/richter-gedeon-logo.webp"
              width={100}
              height={100}
              alt="Richter Gedeon logó"
            />
          </div>
          <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
            <Image
              src="/logo/tesco-logo.webp"
              width={100}
              height={100}
              alt="Tesco logó"
            />
          </div>
          <div className="flex justify-center items-center w-1/3 lg:w-1/5">
            <Image
              src="/logo/union-biztosito-logo.webp"
              width={100}
              height={100}
              alt="Union biztosító logó"
            />
          </div>
          <div className="flex justify-center items-center w-1/3 lg:w-1/5">
            <Image
              src="/logo/morgan-stanley-logo.webp"
              width={100}
              height={100}
              alt="Morgan Stanley logó"
            />
          </div>
          <div className="flex justify-center items-center w-1/3 lg:w-1/5">
            <Image
              src="/logo/egyenlito-alapitvany-logo.webp"
              width={70}
              height={70}
              alt="Egyenlítő alapítvány logó"
            />
          </div>
        </div>
      </div>
    </div>
    
  );
}
