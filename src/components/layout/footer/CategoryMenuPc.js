import Link from "next/link";
function CategoryMenuPc() {
  return (
    <div className=" hidden  container md:flex mt-10 justify-between px-10">
      <div>
        <p className="text-[19px] font-bold">با دیری شاپ</p>
        <ul className="text-sm [&_li]:py-2 mt-5 ">
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
      </div>

      <div>
        <p className="text-[19px] font-bold"> خدمات مشتریان</p>
        <ul className="text-sm [&_li]:py-2 mt-5 ">
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
      </div>

      <div>
        <p className="text-[19px] font-bold"> راهنمای خرید از دیری شاپ </p>
        <ul className="text-sm [&_li]:py-2 mt-5 ">
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
      </div>

      <div>
        <p className="text-[19px] font-bold"> دسترسی سریع</p>
        <ul className="text-sm [&_li]:py-2 mt-5 ">
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
      </div>
    </div>
  );
}

export default CategoryMenuPc;
