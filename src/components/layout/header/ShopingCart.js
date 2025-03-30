import { CiShoppingCart } from "react-icons/ci";
function ShopingCart() {
  return (
    <div>
      <button className="bg-white md:px-2 md:text-gray-900 md:border-1 md:p-2 md:text-center md:rounded-md ">
        <CiShoppingCart size={30} />
      </button>
    </div>
  );
}

export default ShopingCart;
