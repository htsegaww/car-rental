"use client";

//image
import Image from "next/image";

//framer motion
import { motion } from "framer-motion";

//variants
import { FadeIn } from "@/variants";
export default function Cta() {
  return (
    <section
      className="pt-24 xl:pt-48 flex items-end pb-0 bg-[#b2b7c2]/10 overflow-hidden "
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2
                variants={FadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2 mb-3 text-accent"
              >
                Download our App now and hit the road with ease
              </motion.h2>
              <motion.div
                variants={FadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-10"
              >
                Download our app from playStore and App store.
                {/* buttons */}
                <motion.div
                  variants={FadeIn("right", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="flex gap-x-3 justify-center md:justify-start"
                >
                  <button>
                    <Image
                      src={"/icons/app-store.svg"}
                      alt=""
                      width={132}
                      height={36}
                    />
                  </button>
                  <button>
                    <Image
                      src={"/icons/google-play.svg"}
                      alt=""
                      width={132}
                      height={36}
                    />
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* image */}
          <motion.div
            variants={FadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex justify-center order-1 md:order-none"
          >
            <Image
              src={"/images/cta/cta.png"}
              alt=""
              width={320}
              height={640}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
