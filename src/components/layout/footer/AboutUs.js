import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import { SiAparat } from "react-icons/si";
function AboutUs() {
  return (
    <div className="container mt-5 border-t md:border-none  border-gray-300 pt-4">
      <h2 className="md:text-[19px] font-bold">ارتباط با ما</h2>
      <div className="flex flex-col gap-5 mt-5 text-sm md:flex-row md:justify-between">
        <div className="flex gap-5 ">
          <p>تلفن:</p>
          <p>۶۱۹۳۰۰۰ - ۰۲۱ | ۰۲۱-۹۱۰۰۱۰۰</p>
        </div>
        <div className="flex gap-5 items-center">
          <p>شبکه های اجتماعی</p>
          <Link href="#">
            <FaInstagram className="text-[20px] md:text-[30px]" />
          </Link>
          <Link href="#">
            <LiaTelegramPlane className="text-[20px] md:text-[30px]" />
          </Link>
          <Link href="#">
            <SiAparat className="text-[20px] md:text-[30px]" />
          </Link>
        </div>
        <div className="flex gap-5">
          <p>ایمیل:</p>
          <p>info@dairyshop.ir</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
