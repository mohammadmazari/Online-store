"use client";
import Carousel from "@data/Carousel";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Link from "next/link";
function CategoryCarousel() {
  return (
    <div className="container flex gap-10 mt-15">
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        breakpoints={{
          200: { slidesPerView: 2 },
          370: { slidesPerView: 2 },
          400: { slidesPerView: 2.5 },
          500: { slidesPerView: 3.5 },
          700: { slidesPerView: 3.6 },
          800: { slidesPerView: 3.6 },
          900: { slidesPerView: 4 },
          1100: { slidesPerView: 5 },
        }}
        className="h-[180px] sm:h-[165px]  md:h-[190px] lg:h-[220px] mt-2 "
        dir="ltr"
        loop={true}
      >
        {Carousel &&
          Carousel.map((item) => (
            <SwiperSlide
              key={item.id}
              className="border-blue-300 border-1 shadow-2xl rounded-2xl   "
            >
              <Link
                href="#"
                className="flex flex-col items-start justify-between px-3 md:px-8 py-5  h-full"
              >
                <Image
                  src={item.image}
                  width={230}
                  height={250}
                  alt="image Carousel"
                  className="px-0 sm:px-0 md:px-2"
                />
                <p className="w-full text-center text-xs  font-medium md:font-medium md:text-sm">
                  {item.title}
                </p>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default CategoryCarousel;
