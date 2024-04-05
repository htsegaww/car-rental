"use client";

import { useContext } from "react";
import Search from "./search";
import { SearchContext } from "../context/search";
import Image from "next/image";

import { motion, easeInOut } from "framer-motion";

//variants
import { FadeIn } from "@/variants";

export default function Hero() {
  const context = useContext(SearchContext);
  const { searchActive } = context || { searchActive: false };
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text and image wrapper */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/* text */}
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={FadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Find your drive <br />
              <span className="text-accent">Car rentals </span> <br />
              from trusted, local hosts
            </motion.h1>
            <motion.p
              variants={FadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10 "
            >
              Find the perfect car to conquer the great outdoors
            </motion.p>
            {/* buttons */}
            <motion.div
              variants={FadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-star"
            >
              {/* google play */}
              <button>
                <Image
                  src={"/icons/google-play.svg"}
                  alt="app store"
                  width={132}
                  height={36}
                />
              </button>

              {/* app store */}
              <button>
                <Image
                  src={"/icons/app-store.svg"}
                  alt="app store"
                  width={132}
                  height={36}
                />
              </button>
            </motion.div>
          </div>
          {/* car image */}
          <motion.div
            variants={FadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[50vw] xl:max:w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-48"
          >
            <Image
              src="/images/hero/car.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="fixed top-[55px] z-10 w-full max-w-[1920px]"
        >
          <Search />
        </motion.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <motion.div
            variants={FadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Search />
          </motion.div>
        </div>
      )}
    </section>
  );
}
