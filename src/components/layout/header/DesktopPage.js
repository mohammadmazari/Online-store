import Brand from "@modules/components/ui/brand";
import SearchInpute from "./SearchInpute";
import ShopingCart from "./ShopingCart";
import LogingAuth from "./Auth";
function DesktopPage() {
  return (
    <div className=" hidden md:flex gap-4 mt-4 items-center ">
      <Brand />
      <SearchInpute />
      <LogingAuth />
      <ShopingCart />
    </div>
  );
}

export default DesktopPage;
