import { CiSearch } from "react-icons/ci";

function SearchInpute() {
  return (
    <div className="flex-grow relative">
      <input
        type="text"
        className="bg-gray-200 rounded-sm text-xs h-9 w-full md:w-[70%] text-700 text-gray-800 md:text-sm focus:outline-none px-10 md:h-12"
        placeholder="جستجو در محصولات"
      />
      <CiSearch
        size={27}
        className="absolute top-[10%] right-[1%] text-gray-400"
      />
    </div>
  );
}

export default SearchInpute;
