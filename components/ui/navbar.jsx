"use client";

import Link from "next/link";
import Image from "next/image";
import NavButton from "./navbutton";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Primarybuton from "./primaryGreenButon";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menus = [
    {
      title: "Szolgáltatások",
      items: [
        {
          title: "Egyéni coaching",
          icon: "/icons/coaching-icon.svg",
          link: "/szolgaltatasok/egyeni-coaching",
        },
        {
          title: "Vállalati képzések",
          icon: "/icons/coaching-icon.svg",
          link: "/szolgaltatasok/vallalati-kepzesek",
        },
      ],
    },
    {
      title: "Rólam",
      items: [
        {
          title: "Miért válassz?",
          icon: "/icons/coaching-icon.svg",
          link: "/rolam/miert-valassz",
        },
        { title: "Hol tartok a szakmai utamon", icon: "", link: "/rolam/hol-tartok-a-szakmai-utamon" },
        {
          title: "Az egyenlítő alapítványnál végzett munkám",
          icon: "",
          link: "/rolam/az-egyenlito-alapitvanynal-vegzett-munkam",
        },
        {
          title: "Multinacionális Marketing és Sales hátterem",
          icon: "",
          link: "/rolam/multinacionalis-marketing-es-sales-hatterem",
        },
        { title: "Tanulmányaim", icon: "", link: "/rolam/tanulmanyaim" },
      ],
    },
    {
      title: "Témáim",
      link: "/temaim",
    },
    {
      title: "Referenciák",
      items: [
        { title: "Coaching", icon: "/icons/coaching-icon.svg", link: "/referenciak/coaching" },
        { title: "Tréning", icon: "/icons/coaching-icon.svg", link: "/referenciak/trening" },
        {
          title: "Egyéb vállalati",
          icon: "/icons/coaching-icon.svg",
          link: "/referenciak/egyeb-vallalati",
        },
      ],
    },
    {
      title: "GYIK",
      link: "/gyik",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Kapcsolat",
      link: "/kapcsolat",
    },
  ];

  return (
    <>
      <nav
      className={`flex flex-row items-center w-full ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"} font-regular fixed top-0 transition-all duration-200 z-50`}>
        <div className={`flex flex-col justify-center w-11/12 m-auto ${isScrolled ? "h-16" : "h-24 border-b"} border-[--white]`}>
        <div className="w-full flex flex-row items-center px-1 py-1">
          <div className="flex flex-row items-center justify-start gap-8">
              <Link href="/" className={`flex flex-row items-center justify-start ${isScrolled ? "w-16" : "w-36"} h-8 transition-all duration-200`}>
              {isScrolled ? (
                <Image
                  src='/logo/emblema.svg'
                  alt="Logo"
                  width={36}
                  height={36}
                  placeholder="blur"
                  blurDataURL="/blurdata/logo-blurdata.webp"
                  className=""
                />
              ):(
                <Image
                  src='/logo/logo-white-coaching.svg'
                  alt="Logo"
                  width={125}
                  height={36}
                  placeholder="blur"
                  blurDataURL="/blurdata/logo-blurdata.webp"
                  className=""
                />
              )}
              </Link>
              <ul className="flex flex-row gap-8 text-lg">
                {menus.map((menu, index) => (
                  <NavButton key={index} {...menu} scrolled={isScrolled} />
                ))}
              </ul>
          </div>
          <div className="group flex flex-row justify-end w-full">
            <Primarybuton text={'Foglalj időpontot'} link={'/'}/>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
}
