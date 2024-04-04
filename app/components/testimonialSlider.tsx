"use client";

import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//icons

import { FaQuoteLeft } from "react-icons/fa";

//motion

import { motion } from "framer-motion";

//variants
import { FadeIn } from "@/variants";
// image
import Image from "next/image";

//data

// types
interface TestimonialsProps {
  message: string;
  avatar: string;
  name: string;
  job: string;
}
const testimonialData: TestimonialsProps[] = [
  {
    message:
      "They truly exceed my expectations and made my car rental experience a delight ",
    avatar: "/images/testimonial/avatar.png",
    name: "Jane Doe",
    job: "Photographer and Videographer",
  },
  {
    message:
      "They truly exceed my expectations and made my car rental experience a delight ",
    avatar: "/images/testimonial/avatar2.png",
    name: "Jane Doe",
    job: "Photographer and Videographer",
  },
];
export default function TestimonialSlider() {
  return (
    <motion.div
      variants={FadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="xl:h-[400] h-[450px]"
      >
        {testimonialData.map((person, index) => {
          const { message, avatar, name, job } = person;

          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                  {message}
                </div>

                <Image
                  src={avatar}
                  alt={name}
                  height={44}
                  width={44}
                  className="rounded-full object-cover mb-4 "
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
