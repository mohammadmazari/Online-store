import CategoryCarousel from "@components/homepage/CategoryCarousel";
import CategoryList from "@components/homepage/CategoryList";
import ProductsSlider from "@components/homepage/ProductsSlider";

function Homepage() {
  return (
    <div>
      <CategoryList />
      <ProductsSlider />
      <CategoryCarousel />
    </div>
  );
}

export default Homepage;
