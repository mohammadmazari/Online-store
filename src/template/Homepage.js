import CategoryCarousel from "@components/homepage/CategoryCarousel";
import CategoryList from "@components/homepage/CategoryList";
import FestivalSection from "@components/homepage/FestivalSection";
import ProductsSlider from "@components/homepage/ProductsSlider";

function Homepage() {
  return (
    <div>
      <CategoryList />
      <ProductsSlider />
      <CategoryCarousel />
      <FestivalSection />
    </div>
  );
}

export default Homepage;
