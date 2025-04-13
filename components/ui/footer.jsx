import Regularcontainer from "./regularcontainer";
import Image from "next/image";
import Link from "next/link";
import EmailSub from "./EmailSub";

import { TbMail, TbBrandLinkedin,TbPhone } from "react-icons/tb";

export default function Footer() {
  return (
    <Regularcontainer bgcolor={"bg-[--aquamarine]"} padding={'py-16'}>
      <div className="flex flex-col gap-16 w-full">
        <div className="flex lg:flex-row flex-col gap-16 w-full justify-center items-start">
          <div className="flex flex-col gap-8 justify-center ">
            <Image
              src={"/logo/logo-black-coaching.svg"}
              width={200}
              height={500}
              alt={"footer logo"}
            />
          </div>
          <div className="flex flex-col gap-8 justify-center items-start lg:w-1/2">
            <div className="flex flex-col gap-2">
              <h3>Perlay Éva</h3>
              <p>Okleveles üzleti coach</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <a
                href="mailto:hello@evaperlay.com"
                className="text-sm flex flex-nowrap justify-center items-center gap-2"
              >
                <TbMail className="text-black min-h-6 w-auto" />
                hello@evaperlay.com
              </a>

              <Link
                href={"https://www.linkedin.com/in/evaperlay"}
                target="__blank"
                className="text-sm flex flex-nowrap justify-center items-center gap-2"
              >
                <TbBrandLinkedin className="text-black min-h-6 w-auto" />
                /evaperlay
              </Link>

              <a
                href="tel:+36 70 428 97 47"
                className="text-sm flex flex-nowrap justify-center items-center gap-2"
              >
                <TbPhone className="text-black min-h-6 w-auto" />
                +36 70 428 97 47
              </a>

            </div>
          </div>
          <div className="lg:w-1/2">
            <EmailSub type={"green"} baselayout={"row"}/>
          </div>
          
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-center gap-4 opacity-30">
            <p className="text-center">evaperlay.com 2024 @ Minden jog fenntartva</p>
            <Link href={'/adatkezelesi-tajekoztato'} className="underline">Adatkezelési tájékoztató</Link>
        </div>
      </div>
    </Regularcontainer>
  );
}
