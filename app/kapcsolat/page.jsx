"use client";

import Regularcontainer from "@/components/ui/regularcontainer";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import Secondarybluebutton from "@/components/ui/SecondaryBlueButton";
import Mainheader from "@/components/ui/mainHeader";

import { TbMail, TbBrandLinkedin } from "react-icons/tb";

export default function Kapcsolat() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
    <Mainheader title={'Vegyük fel a kapcsolatot!'} image={'/eva/kapcsolat2.webp'} />
    <Regularcontainer bgcolor={"bg-white"} padding={'py-32'}>
      <div className="flex flex-col gap-16">
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-8 w-full">
          <div className="flex flex-col items-center justify-center w-1/2 m-auto gap-8">
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 w-full"
            >
              <input
                placeholder="Név*"
                name="name"
                {...register("name", { required: true })}
                className="p-4 text-lg bg-[--white]"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  A név megadása kötelező
                </span>
              )}
              <input
                placeholder="E-mail*"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                })}
                className="p-4 text-lg bg-[--white]"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  Valós e-mail cím megadása kötelező. Kérlek ellenőrizd az
                  elírásokat.
                </span>
              )}
              <input
                placeholder="Tárgy*"
                name="subject"
                {...register("subject", { required: true })}
                className="p-4 text-lg bg-[--white]"
              />
              {errors.subject && (
                <span className="text-red-500 text-sm">
                  A tárgy megadása kötelező
                </span>
              )}
              <textarea
                placeholder="Üzenet*"
                name="message"
                rows={8}
                {...register("message", { required: true })}
                className="p-4 text-lg bg-[--white]"
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  Az üzenet megadása kötelező
                </span>
              )}
              <div className="flex flex-nowrap items-start gap-2">
                <input
                  type="checkbox"
                  name="acceptance"
                  id="acceptance"
                  {...register("acceptance", { required: true })}
                  className="p-4 text-lg bg-[--white] mt-1"
                />
                <label for="acceptance">
                  Elolvastam, megértettem, és elfogadom az{" "}
                  <Secondarybluebutton text={'adatkezelési tájékoztatóban'} link={'/adatkezelesi-tajekoztato'} />
                  foglaltakat.*
                </label>
              </div>
              {errors.acceptance && (
                <span className="text-red-500 text-sm">
                  Az adatkezelési tájékoztató elfogadása kötelező.
                </span>
              )}
              <input
                type="submit"
                className="w-fit px-5 py-3 bg-[--aquamarine] hover:bg-[--dukeblue] transition-all text-black hover:text-white cursor-pointer self-center"
              />
            </form>
          </div>
        </div>
      </div>
    </Regularcontainer>
    </>
  );
}
