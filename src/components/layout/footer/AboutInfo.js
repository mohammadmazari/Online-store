"use client"
import Brand from "@modules/components/ui/brand";
import { FaAngleUp } from "react-icons/fa6";

function AboutInfo() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-between items-center  container border-b pb-5 md:pb-10">
      <p className="text-sm md:text-lg"> فروشگاه اینترنتی دیری شاپ</p>
      <button
        onClick={scrollToTop}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 border border-gray-200 shadow-sm md:text-lg"
      >
        بازگشت به بالا
        <FaAngleUp className="w-4 h-4" />
      </button>
    </div>
  );
}

export default AboutInfo;
