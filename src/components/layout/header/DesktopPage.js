import Brand from "@modules/components/ui/brand";
import SearchInpute from "./SearchInpute";
import ShopingCart from "./ShopingCart";
import LogingAuth from "./Auth";
function DesktopPage() {
  return (
    <div className="  hidden md:flex fixed left-0 px-5 -top-5 bg-white z-50 py-5 w-full 2xl:container 2xl:left-auto gap-4 mt-4 items-center ">
      <Brand />
      <SearchInpute />
      <LogingAuth />
      <ShopingCart />
    </div>
  );
}

export default DesktopPage;
