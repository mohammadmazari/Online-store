import CategoryCarousel from "@components/homepage/CategoryCarousel";
import CategoryList from "@components/homepage/CategoryList";
import FestivalSection from "@components/homepage/FestivalSection";
import HomeCategoryBanner from "@components/homepage/HomeCategoryBanner";
import ProductsSlider from "@components/homepage/ProductsSlider";
import ShopByCategory from "@components/homepage/ShopByCategory";

function Homepage() {
  
  return (
    <div>
      <CategoryList />
      <ProductsSlider />
      <CategoryCarousel />
      <FestivalSection />
      <HomeCategoryBanner />
      <ShopByCategory />
    </div>
  );
}

export default Homepage;
