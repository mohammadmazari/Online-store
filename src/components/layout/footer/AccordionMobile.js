import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@modules/components/ui/accordion";
import Link from "next/link";

export function AccordionMobile() {
  return (
    <div className="container mt-5 px-4 md:hidden">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem
          className="border-none outline-none text-white"
          value="item-1"
        >
          <AccordionTrigger className=" *:text-white">
            با دیری شاپ
          </AccordionTrigger>
          <AccordionContent>
            <ul className="text-xs [&_li]:py-2  [&_li]:ps-4 [&_li]:border-r">
              <li>
                <Link href="#">اتاق خبر دیری شاپ</Link>
              </li>
              <li>
                <Link href="#">گزارش تخلف در دیری شاپ</Link>
              </li>
              <li>
                <Link href="#">تماس با دیری شاپ</Link>
              </li>
              <li>
                <Link href="#">درباره دیری شاپ</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="border-none " value="item-2">
          <AccordionTrigger className=" *:text-white">
            خدمات مشتریان
          </AccordionTrigger>
          <AccordionContent>
            <ul className="text-xs [&_li]:py-2  [&_li]:ps-4 [&_li]:border-r">
              <li>
                <Link href="#">پاسخ به پرسش های متداول</Link>
              </li>
              <li>
                <Link href="#">رویه بازگرداندن کالا</Link>
              </li>
              <li>
                <Link href="#">شرایط استفاده</Link>
              </li>
              <li>
                <Link href="#">حریم خصوصی</Link>
              </li>
              <li>
                <Link href="#">گزارش باگ</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="border-none" value="item-3">
          <AccordionTrigger className=" *:text-white">
            راهنمای خرید از دیری شاپ
          </AccordionTrigger>
          <AccordionContent>
            <ul className="text-xs [&_li]:py-2  [&_li]:ps-4 [&_li]:border-r">
              <li>
                <Link href="#">نحوه ثبت سفارش</Link>
              </li>
              <li>
                <Link href="#">رویه ارسال کالا</Link>
              </li>
              <li>
                <Link href="#">شیوه های پرداخت </Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="border-none" value="item-4">
          <AccordionTrigger className=" *:text-white">
            دسترسی سریع
          </AccordionTrigger>
          <AccordionContent>
            <ul className="text-xs [&_li]:py-2  [&_li]:ps-4 [&_li]:border-r">
              <li>
                <Link href="#">بلاگ</Link>
              </li>
              <li>
                <Link href="#">خرید لوازم خانگی</Link>
              </li>
              <li>
                <Link href="#">خرید کالای دیجیتال </Link>
              </li>
              <li>
                <Link href="#"> خردی لوازم بهداشتی</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
