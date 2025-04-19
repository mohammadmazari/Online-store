import Image from "next/image";
import Link from "next/link";
function HomeCategoryBanner() {
  return (
    <div className="container">
      <div className="flex gap-3 mt-10 md:mt-15 justify-between [&_img]:rounded-3xl [&_a]:w-[45%] flex-wrap md:flex-nowrap [&_img]:w-[95%]">
        <Link href="#">
          <Image
            src="/img/HomecategoryBanners/1.webp"
            width={300}
            height={300}
            alt="cagetgoryBanner"
          />
        </Link>
        <Link href="#">
          <Image
            src="/img/HomecategoryBanners/2.webp"
            width={300}
            height={300}
            alt="cagetgoryBanner"
          />
        </Link>
        <Link href="#">
          <Image
            src="/img/HomecategoryBanners/3.webp"
            width={300}
            height={300}
            alt="cagetgoryBanner"
          />
        </Link>
        <Link href="#">
          <Image
            src="/img/HomecategoryBanners/4.webp"
            width={300}
            height={300}
            alt="cagetgoryBanner"
          />
        </Link>
      </div>
    </div>
  );
}

export default HomeCategoryBanner;
