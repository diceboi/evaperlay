"use client";

import Link from "next/link";
import Image from "next/image";
import NavButton from "./navbutton";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
          link: "/",
        },
        {
          title: "Vállalati képzések",
          icon: "/icons/coaching-icon.svg",
          link: "/",
        },
      ],
    },
    {
      title: "Rólam",
      items: [
        {
          title: "Miért válassz?",
          icon: "/icons/coaching-icon.svg",
          link: "/",
        },
        { title: "Vállalati képzések", icon: "", link: "/" },
        { title: "Hol tartok a szakmai utamon", icon: "", link: "/" },
        {
          title: "Az egyenlítő alapítványnál végzett munkám",
          icon: "",
          link: "/",
        },
        {
          title: "Multinacionális Marketing és Sales hátterem",
          icon: "",
          link: "/",
        },
        { title: "Tanulmányaim", icon: "", link: "/" },
      ],
    },
    {
      title: "Témáim",
      link: "/",
    },
    {
      title: "Referenciák",
      items: [
        { title: "Coaching", icon: "/icons/coaching-icon.svg", link: "/" },
        { title: "Tréning", icon: "/icons/coaching-icon.svg", link: "/" },
        {
          title: "Egyéb vállalati",
          icon: "/icons/coaching-icon.svg",
          link: "/",
        },
      ],
    },
    {
      title: "GYIK",
      link: "/",
    },
    {
      title: "Blog",
      link: "/",
    },
    {
      title: "Kapcsolat",
      link: "/",
    },
  ];

  return (
    <>
      <motion.nav 
      initial={{ y:"-96px" }}
      animate={{ y:"0px" }}
      transition={{ ease:"easeIn", duration: 0.2 }}
      className={`flex flex-row items-center w-full ${isScrolled ? "h-16 bg-[#ffffff80] backdrop-blur-lg" : "h-24 bg-transparent"} font-semibold fixed top-0 transition-all duration-200 z-50`}>
        <div className="w-full flex flex-row items-center px-4 py-1">
          <div className="flex flex-row items-center justify-start">
            <div className={`relative ${isScrolled ? "w-[150px] h-12" : "w-[200px] h-16"} transition-all duration-200`}>
              <Image
                src="/logo/szineslogo-test.svg"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
                placeholder="blur"
                blurDataURL="/blurdata/logo-blurdata.webp"
              />
            </div>
            <ul className="flex flex-row gap-4 text-lg">
              {menus.map((menu, index) => (
                <NavButton key={index} {...menu} />
              ))}
            </ul>
          </div>
          <div className="group flex flex-row justify-end w-full">
            <Link href="/">
              <li className="group flex flex-col h-16 justify-center text-lg">
                <span className="px-4 py-2 bg-[--dukeblue] group-hover:bg-[--dukeblue-dark] text-white font-bold rounded-2xl transition-all">
                  Foglalj időpontot
                </span>
              </li>
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
