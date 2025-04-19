import Image from "next/image";
import Link from "next/link";

function ShopByCategory() {
  return (
    <div className="container mt-15 md:px-9">
      <h2 className="text-sm md:text-lg text-center py-3 font-bold">
        دسته بندی های دیری شاپ
      </h2>
      <div className="flex flex-wrap gap-x-5 [&_a]:w-[28%] md:[&_a]:w-[20%] gap-y-8 md:gap-x-10 md:gap-y-20 mt-5 justify-center">
        <Link
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-md relative group overflow-hidden flex justify-center"
        >
          <Image
            width={150}
            alt="shop by category"
            height={150}
            src="/img/shopByCategory/1.png"
          />
          <p className="hidden md:block absolute w-full left-0 -bottom-10 text-center bg-blue-900 text-white py-2 text-sm group-hover:bottom-0 transition-all">
            ابزارالات و تجیزات
          </p>
        </Link>
        <Link
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-md relative group overflow-hidden flex justify-center"
        >
          <Image
            width={150}
            alt="shop by category"
            height={150}
            src="/img/shopByCategory/2.png"
          />
          <p className="hidden md:block absolute w-full left-0 -bottom-10 text-center bg-blue-900 text-white py-2 text-sm group-hover:bottom-0 transition-all">
            آرایشی و بهداشتی
          </p>
        </Link>
        <Link
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-md relative group overflow-hidden flex justify-center"
        >
          <Image
            width={150}
            alt="shop by category"
            height={150}
            src="/img/shopByCategory/3.png"
          />
          <p className="hidden md:block absolute w-full left-0 -bottom-10 text-center bg-blue-900 text-white py-2 text-sm group-hover:bottom-0 transition-all">
            خانه و اشپزخانه
          </p>
        </Link>
        <Link
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-md relative group overflow-hidden flex justify-center"
        >
          <Image
            width={150}
            alt="shop by category"
            height={150}
            src="/img/shopByCategory/4.png"
          />
          <p className="hidden md:block absolute w-full left-0 -bottom-10 text-center bg-blue-900 text-white py-2 text-sm group-hover:bottom-0 transition-all">
            کالای دیجیکتال
          </p>
        </Link>
        <Link
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-md relative group overflow-hidden flex justify-center"
        >
          <Image
            width={150}
            alt="shop by category"
            height={150}
            src="/img/shopByCategory/5.png"
          />
          <p className="hidden md:block absolute w-full left-0 -bottom-10 text-center bg-blue-900 text-white py-2 text-sm group-hover:bottom-0 transition-all">
            ورزش و سفر
          </p>
        </Link>
        <Link
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-md relative group overflow-hidden flex justify-center"
        >
          <Image
            width={150}
            alt="shop by category"
            height={150}
            src="/img/shopByCategory/6.png"
          />
          <p className="hidden md:block absolute w-full left-0 -bottom-10 text-center bg-blue-900 text-white py-2 text-sm group-hover:bottom-0 transition-all">
            مد و پوشاک
          </p>
        </Link>
        <Link
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-md relative group overflow-hidden flex justify-center"
        >
          <Image
            width={150}
            alt="shop by category"
            height={150}
            src="/img/shopByCategory/7.png"
          />
          <p className="hidden md:block absolute w-full left-0 -bottom-10 text-center bg-blue-900 text-white py-2 text-sm group-hover:bottom-0 transition-all">
            کودک
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ShopByCategory;
