"use client";

import Link from "next/link";
import Image from "next/image";
import NavButton from "./navbutton";
import { useState, useEffect, useContext } from "react";
import { CalendlyContext } from "@/app/CalendlyContext";
import { MobileMenuContext } from "@/app/MobileMenuContext";
import { motion } from "framer-motion";
import Primarygreenbuton from "./primaryGreenButon";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

export default function Navbar() {

  const { mobileMenuOpen, toggleMobileMenu } = useContext(MobileMenuContext);
  const { openPopup, toggleCalendly } = useContext(CalendlyContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const handleToggleSubMenu = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

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
        {
          title: "Hol tartok a szakmai utamon",
          icon: "",
          link: "/rolam/hol-tartok-a-szakmai-utamon",
        },
        { title: "Tanulmányaim", icon: "", link: "/rolam/tanulmanyaim" },
        {
          title: "Multinacionális marketing és sales hátterem",
          icon: "",
          link: "/rolam/multinacionalis-marketing-es-sales-hatterem",
        },
        {
          title: "Aktív DEI tapasztalatom",
          icon: "",
          link: "/rolam/aktiv-dei-tapasztalatom",
        }, 
      ],
    },
    {
      title: "Témáim",
      link: "/temaim",
    },
    {
      title: "Referenciák",
      items: [
        {
          title: "Coaching",
          icon: "/icons/coaching-icon.svg",
          link: "/referenciak/coaching",
        },
        {
          title: "Tréning",
          icon: "/icons/coaching-icon.svg",
          link: "/referenciak/trening",
        },
        {
          title: "Egyéb vállalati",
          icon: "/icons/coaching-icon.svg",
          link: "/referenciak/egyeb-vallalati",
        },
      ],
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "GYIK",
      link: "/gyik",
    },
    {
      title: "Kapcsolat",
      link: "/kapcsolat",
    },
  ];

  return (
    <>
      <nav
        className={`flex flex-row items-center w-full ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        } font-regular fixed top-0 transition-all duration-200 z-50`}
      >
        <div
          className={`flex flex-col justify-center w-11/12 m-auto ${
            isScrolled ? "h-16" : "h-24 border-b"
          } border-[--white]`}
        >
          <div className="w-full flex flex-row items-center px-1 py-1">
            <div className="flex flex-row items-center justify-start gap-8">
              <Link
                href="/"
                className={`flex flex-row items-center justify-start ${
                  isScrolled ? "w-16" : "w-36"
                } h-8 transition-all duration-200`}
              >
                {isScrolled ? (
                  <Image
                    src="/logo/emblema.svg"
                    alt="Logo"
                    width={36}
                    height={36}
                    placeholder="blur"
                    blurDataURL="/blurdata/logo-blurdata.webp"
                    className=""
                  />
                ) : (
                  <Image
                    src="/logo/logo-white-coaching.svg"
                    alt="Logo"
                    width={125}
                    height={36}
                    placeholder="blur"
                    blurDataURL="/blurdata/logo-blurdata.webp"
                    className=""
                  />
                )}
              </Link>

              {/*Desktop Menu*/}
              <ul className="hidden md:flex flex-row gap-8 text-lg">
                {menus.map((menu, index) => (
                  <NavButton key={index} {...menu} scrolled={isScrolled} />
                ))}
              </ul>
            </div>
            <div className="flex flex-row justify-end w-full">
              <Primarygreenbuton
                text={"Foglalj időpontot"}
                link={"/idopontfoglalas"}
                classname={"md:block hidden"}
              />
              {/*Mobile Menu*/}

              <div className="md:hidden">
                <TbMenu2
                  className={`min-w-8 min-h-8 ${isScrolled ? 'text-black' : 'text-white'}`}
                  onClick={toggleMobileMenu}
                />
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ right: "-100%", top: '0' }}
                    animate={{ right: "0", top: '0' }}
                    exit={{ right: "-100%", top: '0' }}
                    className="absolute flex flex-col gap-8 w-[80%] h-[100vh] bg-white pt-16 px-8 shadow-2xl overflow-y-scroll"
                  >
                    <ul className="gap-2 md:gap-8 text-lg">
                      {menus.map((menu, index) => (
                        <NavButton 
                        key={index} 
                        {...menu} 
                        scrolled={isScrolled}
                        isOpen={openSubMenuIndex === index}
                        toggleSubMenu={() => handleToggleSubMenu(index)} />
                      ))}
                    </ul>
                    <button
                      className="absolute top-7 right-4 text-black"
                      onClick={toggleMobileMenu}
                    >
                      <IoClose className="min-w-8 min-h-8"/>
                    </button>
                    <Primarygreenbuton text={'Foglalj időpontot'} link={'/idopontfoglalas'}/>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
