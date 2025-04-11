"use client";
import { GoChevronLeft } from "react-icons/go";
import specialOfferProducts from "@data/specialOfferProducts";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardSpecials from "./CardSpecials";
import Link from "next/link";

function FestivalSection() {
  return (
    <div className="h-[500px] mt-10 container border border-red-300 rounded-md py-3 px-4">
      <div className="bg-red-800 text-white flex justify-between p-3 rounded-md text-xs md:text-sm [&_p]:font-bold ">
        <p>دیریشاپ</p>
        <button className="flex">
          نماییش همه <GoChevronLeft size={18} />
        </button>
      </div>

      <Swiper
        className="w-full h-[430px] "
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          200: { slidesPerView: 1.1 },
          300: { slidesPerView: 1.2 },
          330: { slidesPerView: 1.3 },
          380: { slidesPerView: 1.4 },
          420: { slidesPerView: 1.6 },
          450: { slidesPerView: 1.7 },
          480: { slidesPerView: 2 },
          500: { slidesPerView: 2.2 },
          550: { slidesPerView: 2.4 },
          600: { slidesPerView: 2.5 },
          620: { slidesPerView: 2.6 },
          640: { slidesPerView: 2.7 },
          660: { slidesPerView: 2.8 },
          680: { slidesPerView: 2.9 },
          700: { slidesPerView: 3 },
          720: { slidesPerView: 3.2 },
          740: { slidesPerView: 3.3 },
          760: { slidesPerView: 3.4 },
          780: { slidesPerView: 3.5 },
          800: { slidesPerView: 3.6 },

          900: { slidesPerView: 4 },
          1000: { slidesPerView: 4.5 },
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
