import { MobileMenu } from "./MobileMenu";
import Auth from "./Auth";
import Brand from "@modules/components/ui/brand";
import SearchInpute from "./SearchInpute";
import ShopingCart from "./ShopingCart";
function MoblilePage() {
  return (
    <div className="flex flex-col gap-4 md:hidden">
      <div className="flex items-center justify-between">
        <MobileMenu />
        <Brand />
        <Auth />
      </div>
      <div className="flex gap-4  ">
        <SearchInpute />
        <ShopingCart />
      </div>
    </div>
  );
}

export default MoblilePage;
