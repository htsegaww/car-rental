"use client";

import { useContext, useEffect, useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
//image
import Image from "next/image";
//react-scroll
import Link from "next/link";
//components
import SearchMobile from "./searchMobile";

// media query hook
import { useMediaQuery } from "react-responsive";

//icons
import { BiX, BiMenuAltRight } from "react-icons/bi";
import { SearchContext } from "../context/search";
//search context

export default function Header() {
  const context = useContext(SearchContext);
  const { setSearchActive } = context || { setSearchActive: () => {} }; //if

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width:1300px)",
  });
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      //search
      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    //add event listener
    window.addEventListener("scroll", handleScroll);

    //remove event listener
    return () => window.addEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/* logo */}
          <Link href="/" className="cursor-pointer">
            {/* <Image src="/icons/logo.png" alt="logo" width={40} height={20} /> */}
            <p className="text-xl font-bold">
              Car<span className="text-accent font-medium">Rent</span>
            </p>
          </Link>
          {/* nav open menu */}
          <div
            className="cursor-pointer xl:hidden"
            onClick={() => setNav(!nav)}
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <ScrollLink
            to="home"
            smooth={desktopMode}
            activeClass="active"
            spy={true}
            className="scroll-smooth cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="cars"
            smooth={desktopMode}
            activeClass="active"
            spy={true}
            className="scroll-smooth cursor-pointer"
          >
            Cars
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={desktopMode}
            activeClass="active"
            spy={true}
            className="scroll-smooth cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="why"
            smooth={desktopMode}
            activeClass="active"
            spy={true}
            className="scroll-smooth cursor-pointer"
          >
            Why Us
          </ScrollLink>
          <ScrollLink
            to="testimonials"
            activeClass="active"
            smooth={true}
            spy={true}
            className="scroll-smooth cursor-pointer"
          >
            Testimonials
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            activeClass="active"
            spy={true}
            className="scroll-smooth cursor-pointer"
          >
            Contact
          </ScrollLink>
          <ScrollLink
            to="seeall"
            smooth={true}
            spy={true}
            activeClass="active"
            className="scroll-smooth cursor-pointer xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
          >
            See All Cars
          </ScrollLink>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}
