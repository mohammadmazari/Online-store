"use client";
import { GoChevronLeft } from "react-icons/go";
import specialOfferProducts from "@data/specialOfferProducts";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardSpecials from "./CardSpecials";
import Link from "next/link";

function FestivalSection() {
  return (
    <div className="h-fit mt-10 container border border-red-300 rounded-md py-3 px-4">
      <div className="bg-red-800 text-white flex justify-between p-3 rounded-md text-xs md:text-sm [&_p]:font-bold ">
        <p>دیریشاپ</p>
        <button className="flex">
          نماییش همه <GoChevronLeft size={18} />
        </button>
      </div>

      <Swiper
        className="w-full h-fit "
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          200: { slidesPerView: 2.1 },
          300: { slidesPerView: 2.2 },
          330: { slidesPerView: 2.3 },
          380: { slidesPerView: 2.4 },
          420: { slidesPerView: 2.6 },
          450: { slidesPerView: 2.7 },
          480: { slidesPerView: 2.8 },
          500: { slidesPerView: 2.9 },
          550: { slidesPerView: 3 },
          600: { slidesPerView: 3.2 },
          620: { slidesPerView: 3.3 },
          640: { slidesPerView: 3.4 },
          660: { slidesPerView: 3.5 },
          680: { slidesPerView: 3.6 },
          700: { slidesPerView: 3.7 },
          720: { slidesPerView: 3.8 },
          740: { slidesPerView: 4 },
          760: { slidesPerView: 4.3 },
          780: { slidesPerView: 4.5 },
          880: { slidesPerView: 6 },
  
        }}
      >
        {specialOfferProducts &&
          specialOfferProducts.map((item) => (
            <SwiperSlide key={item.id}>
              <Link href="#">
                <CardSpecials data={item} />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default FestivalSection;
