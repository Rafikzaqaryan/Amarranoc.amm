import { useFilter } from "../../FilterContext";

export default function Search() {
  const { searchQuery, setSearchQuery } = useFilter();
  return (
    <div className="flex items-center w-[240px] h-[45px] border border-gray-300 rounded-[40px] px-3 py-2">
      <input
        type="text"
        placeholder="Որոնում"
        className="flex-grow outline-none text-[#dcdddf] bg-inherit "
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <img
        src="https://amaranoc.am/images/header/search.svg"
        className="w-[16px] h-[16px]"
      />
    </div>
  );
}
