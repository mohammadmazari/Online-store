"use client";
import Image from "next/image";
import React from "react";
import Countdown from "react-countdown";

import { FormatNumberInPersian } from "@helper/FormatNumberInPersian";

function CardSpecials({ data }) {
  return (
    <div className=" mt-7 ">
      <div className="mt-5 text-red-500 text-[10px] md:text-xs flex justify-between border-b-3 border-red-700 pb-1">
        <p>دیری شاپ</p>
        <p className="text-black">
          <Countdown
            date={Date.now() + 10000 * 60 * 24 * data.stock}
            daysInHours={true}
            className="text-red-500"
          />
        </p>
      </div>
      <div className=" md:px-2 border-l mt-5">
        <div>
          <Image src={data.image} width={220} height={220} alt="special img" />
        </div>
        <div className="mt-1 md:mt-13">
          <p className="text-[10px] md:text-xs font-normal">{data.name}</p>
          <div className=" text-[10px] md:text-xs mt-5 flex flex-row-reverse justify-between pe-1">
            <p className="font-bold ">
              {FormatNumberInPersian(data.discountPrice)}
              <span className="font-normal text-[9px] md:text-[12px] ms-1">
                تومان
              </span>
            </p>
            <p className="bg-red-500 p-[2px] md:p-1 rounded text-white text-[9px] md:text-xs">
              %
              {Math.round(
                ((data.price - data.discountPrice) / data.price) * 100
              )}
            </p>
          </div>
          <p className="text-gray-500 px-3  mt-2 text-end">
            <del className="font-normal text-[9px]  md:text-sm ">
              {FormatNumberInPersian(data.price)}
            </del>
            <span className="font-normal text-[9px] md:text-[10px] ms-1">
              تومان
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardSpecials;
