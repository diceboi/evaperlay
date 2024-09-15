"use client";

import Regularcontainer from "@/components/ui/regularcontainer";
import Image from "next/image";
import Link from "next/link";
import Mainheader from "@/components/ui/mainHeader";

import { TbMail, TbBrandLinkedin } from "react-icons/tb";
import ContactForm from "@/components/ui/contactForm";

export default function Kapcsolat() {


  return (
    <>
    <Mainheader title={'Kapcsolat'} subtitle={'Vegyük fel a kapcsolatot!'} image={'/eva/kapcsolat2.webp'} />
    <Regularcontainer bgcolor={"bg-white"} padding={'lg:py-32 py-16'}>
      <div className="flex flex-col gap-16">
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-8 w-full">
        <div className="relative flex flex-col items-center justify-center lg:w-1/2 lg:min-h-max min-h-[50vh]">
            <Image
              src={"/eva/kapcsolat.webp"}
              fill
              style={{ objectFit: "cover", objectPosition: "0% 20%" }}
              alt="Írj nekem"
            />
          </div>
          <div className="flex flex-col items-center justify-center lg:w-1/2 m-auto gap-8">
            <div className="flex flex-row self-start gap-4">
              <a
                href="mailto:hello@evaperlay.com"
                className="text-sm flex flex-nowrap justify-center items-center gap-2"
              >
                <TbMail className="text-[--aquamarine] min-h-6 w-auto" />
                hello@evaperlay.com
              </a>

              <Link
                href={"https://www.linkedin.com/in/evaperlay"}
                target="__blank"
                className="text-sm flex flex-nowrap justify-center items-center gap-2"
              >
                <TbBrandLinkedin className="text-[--aquamarine] min-h-6 w-auto" />
                /evaperlay
              </Link>
              
              
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </Regularcontainer>
    </>
  );
}
