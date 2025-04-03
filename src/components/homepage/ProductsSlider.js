"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import { FaCaretSquareRight } from "react-icons/fa";
import { FaCaretSquareLeft } from "react-icons/fa";
import { color } from "framer-motion";

export default function ProductsSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".button-next ",
          prevEl: ".button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full h-[24vh] md:h-[40vh]  mt-3  "
      >
        <SwiperSlide className="h-[300px]">
          <Image src="/img/ProductsSlider/1.webp" fill alt="ProductSlider" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/ProductsSlider/2.png" fill alt="ProductSlider" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/ProductsSlider/3.webp" fill alt="ProductSlider" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/ProductsSlider/4.webp" fill alt="ProductSlider" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/ProductsSlider/5.webp" fill alt="ProductSlider" />
        </SwiperSlide>

        <div
          className=" absolute bg-white rounded-full border-blue-400-600 border-1  right-[16px] bottom-4 z-20 w-[20px] h-[20px] text-[10px] md:text-sm md:w-[40px] md:h-[40px] flex items-center justify-center font-bold text-blue-500"
          slot="container-end "
        >
          <svg
            viewBox="0 0 48 48"
            ref={progressCircle}
            style={{
              _progress: 0,
              position: "absolute",
              left: 0,
              top: " 0px",
              z_index: 10,
              width: "100%",
              height: "100%",
              stroke_width: "4px",
              stroke: "var(--swiper-theme-color)",
              fill: "none",
              stroke_dashoffset: "calc(125.6px * (1 - var(--progress)))",
              stroke_dasharray: 125.6,
              transform: "rotate(-90deg)",
            }}
          ></svg>
          <span ref={progressContent}></span>
        </div>

        <FaCaretSquareRight
          className="swiper-button-prev button-prev"
          color="white"
         
        />
        <FaCaretSquareLeft
          className="swiper-button-next button-next "
          color="white"
        />

        <style jsx>{`
          :global(.swiper-pagination-bullet) {
            background-color: gray !important;
            width: 8px;
            height: 8px;
            opacity: 0.6;
            transition: all 0.3s ease-in-out;
          }

          :global(.swiper-pagination-bullet-active) {
            background-color: white !important; /* رنگ آبی */
            width: 8px;
            height: 8px;
            opacity: 1;
          }
        `}</style>
      </Swiper>
    </>
  );
}
