"use client";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LuCarFront } from "react-icons/lu";
import { MdOutlineSportsHandball } from "react-icons/md";
import { PiDressLight } from "react-icons/pi";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@modules/components/ui/sheet";
import Brand from "@modules/components/ui/brand";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@modules/components/ui/accordion";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <RiMenu3Fill size={20} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Brand />
          </SheetTitle>
        </SheetHeader>

        <div>
          <ul className="text-gray-700 text-sm [&_li]:p-3 [&_li]:py-4 [&_li_a]:flex [&_li_a]:justify-between [&_li_span]:flex [&_li_span]:items-center [&_li_span]:gap-2 ">
            <li>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <span>
                      <CiHome size={20} /> لوازم خانگی
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="[&_li]:text-xs ps-3 border-s-1 border-gray-200 ms-2">
                      <li>
                        <Link href="#">دکوراسیون</Link>
                      </li>
                      <li>
                        <Link href="#">لوازم اشپزخانه</Link>
                      </li>
                      <li>
                        <Link href="#">لوازم کاربردی منزل</Link>
                      </li>
                      <li>
                        <Link href="#">ابراز</Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <span>
                      <CiUser size={20} /> لوازم شخصی
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="[&_li]:text-xs ps-3 border-s-1 border-gray-200 ms-2 ">
                      <li>
                        <Link href="#">آرایشی و زیبایی</Link>
                      </li>
                      <li>
                        <Link href="#"> عطر و ادکلن</Link>
                      </li>
                      <li>
                        <Link href="#">لوازم کودک </Link>
                      </li>
                      <li>
                        <Link href="#">بهداشت و مراقبت</Link>
                      </li>
                      <li>
                        <Link href="#"> زیور الات </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <span>
                      <HiOutlineComputerDesktop size={20} /> لوازم دیجیتال
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="[&_li]:text-xs ps-3 border-s-1 border-gray-200 ms-2 ">
                      <li>
                        <Link href="#">دوربین </Link>
                      </li>
                      <li>
                        <Link href="#"> تجهیزات شبکه</Link>
                      </li>
                      <li>
                        <Link href="#">لوازم موبایل و تبلت </Link>
                      </li>
                      <li>
                        <Link href="#"> صوتی و تصویری </Link>
                      </li>
                      <li>
                        <Link href="#"> لوازم جانبی کامپیوتر </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    <span>
                      <LuCarFront size={20} /> لوازم خودرو
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="[&_li]:text-xs ps-3 border-s-1 border-gray-200 ms-2 ">
                      <li>
                        <Link href="#">لوازم کاربردی و تزیینی</Link>
                      </li>
                      <li>
                        <Link href="#"> نظافت </Link>
                      </li>
                      <li>
                        <Link href="#">چرخ خودرو</Link>
                      </li>
                      <li>
                        <Link href="#">خوشبو کننده</Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    <span>
                      <MdOutlineSportsHandball size={20} /> لوازم ورزشی و سرگرمی
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="[&_li]:text-xs ps-3 border-s-1 border-gray-200 ms-2 ">
                      <li>
                        <Link href="#">اسباب بازی</Link>
                      </li>
                      <li>
                        <Link href="#"> لوازم ورزشی </Link>
                      </li>
                      <li>
                        <Link href="#">لوازم کوهنوردی </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    <span>
                      <PiDressLight size={20} /> مد و پوشاک
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="[&_li]:text-xs ps-3 border-s-1 border-gray-200 ms-2 ">
                      <li>
                        <Link href="#"> لباس زنانه </Link>
                      </li>
                      <li>
                        <Link href="#"> ساعت مچی </Link>
                      </li>
                      <li>
                        <Link href="#"> کیف و کفش </Link>
                      </li>
                      <li>
                        <Link href="#">بهداشت و مراقبت</Link>
                      </li>
                      <li>
                        <Link href="#"> لباس مردانه </Link>
                      </li>
                      <li>
                        <Link href="#"> عینک افتابی </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
