"use client";

//images
import Image from "next/image";

import { motion } from "framer-motion";

//variants
import { FadeIn } from "@/variants";
export default function Brands() {
  return (
    <div className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <motion.div
        variants={FadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
      >
        {/* brand wrapper */}
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          <div>
            <Image
              src={"icons/brands/audi.svg"}
              alt=""
              width={85}
              height={32}
            />
          </div>
          <div>
            <Image
              src={"icons/brands/benz.svg"}
              alt=""
              width={85}
              height={32}
            />
          </div>
          <div>
            <Image src={"icons/brands/bmw.svg"} alt="" width={80} height={32} />
          </div>
          <div>
            <Image
              src={"icons/brands/ford.svg"}
              alt=""
              width={85}
              height={85}
            />
          </div>
          <div>
            <Image
              src={"icons/brands/honda.svg"}
              alt=""
              width={70}
              height={32}
            />
          </div>
          <div>
            <Image
              src={"icons/brands/jeep.svg"}
              alt=""
              width={85}
              height={32}
            />
          </div>
          <div>
            <Image
              src={"icons/brands/vols.svg"}
              alt=""
              width={70}
              height={32}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
