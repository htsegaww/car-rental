"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/react";
import "swiper/css";

//images
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

//motion
import { motion } from "framer-motion";

//variants
import { FadeIn } from "@/variants";
import Image from "next/image";

const cars = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 29,
    stars: 3.5,
    image: "/images/carSlider/ford.png",
    info: [
      {
        icon: "/images/carSlider/automatic.png",
        text: "Manual",
      },
      {
        icon: "/images/carSlider/seats.png",
        text: "5 Seats",
      },
      {
        icon: "/images/carSlider/gas.png",
        text: "Gas",
      },
      {
        icon: "/images/carSlider/engine.png",
        text: "1600 HP",
      },
      {
        icon: "/images/carSlider/wheel.png",
        text: "Front",
      },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 35,
    stars: 4.7,
    image: "/images/carSlider/honda.png",
    info: [
      {
        icon: "/images/carSlider/automatic.png",
        text: "Manual",
      },
      {
        icon: "/images/carSlider/seats.png",
        text: "5 Seats",
      },
      {
        icon: "/images/carSlider/gas.png",
        text: "Gas",
      },
      {
        icon: "/images/carSlider/engine.png",
        text: "2000 HP",
      },
      {
        icon: "/images/carSlider/wheel.png",
        text: "Front",
      },
    ],
  },
  {
    type: "camry",
    name: "Toyota",
    price: 25,
    stars: 5,
    image: "/images/carSlider/toyota.png",

    info: [
      {
        icon: "/images/carSlider/automatic.png",
        text: "Manual",
      },
      {
        icon: "/images/carSlider/seats.png",
        text: "5 Seats",
      },
      {
        icon: "/images/carSlider/gas.png",
        text: "Gas",
      },
      {
        icon: "/images/carSlider/engine.png",
        text: "1200 HP",
      },
      {
        icon: "/images/carSlider/wheel.png",
        text: "Front",
      },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda MX-5",
    price: 32,
    stars: 4.9,
    image: "/images/carSlider/mazda.png",
    className: "pt-14",
    info: [
      {
        icon: "/images/carSlider/automatic.png",
        text: "Manual",
      },
      {
        icon: "/images/carSlider/seats.png",
        text: "5 Seats",
      },
      {
        icon: "/images/carSlider/gas.png",
        text: "Gas",
      },
      {
        icon: "/images/carSlider/engine.png",
        text: "1400 HP",
      },
      {
        icon: "/images/carSlider/wheel.png",
        text: "Front",
      },
    ],
  },
];
export default function CarSlider() {
  return (
    <motion.div
      variants={FadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[385px] mx-auto sm:mx-0 bg-gray-100">
                <Image
                  src={car.image}
                  width={380}
                  height={784}
                  alt=""
                  className={`mb-2 ${car.className}`}
                />
                <div className="flex justify-between">
                  <div className="ml-2">
                    <div className="text-[13px] text-secondary uppercase">
                      {car.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                    <div className="mb-10 text-accent font-semibold uppercase">
                      {car.price}/day
                    </div>
                  </div>
                  {/* stars */}
                  <div className=" mb-5 flex gap-x-2 text-accent h-max mr-2 ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                {/* car info */}
                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                  {car.info.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center ml-3 md:ml-2 lg:ml-3 xl:ml-3"
                      >
                        <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center mb-2">
                          <Image
                            src={item.icon}
                            width={24}
                            height={24}
                            alt=""
                          />
                        </div>
                        <div className="text-[12px] uppercase">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-accent btn-lg">See Details</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
