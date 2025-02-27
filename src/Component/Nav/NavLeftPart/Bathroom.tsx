import { useFilter } from "../../../FilterContext";
import { useState } from "react";

export default function Bathroom() {
  const { setBathroomFilters } = useFilter();
  const [selected, setSelected] = useState<number | "all" | null>(null);

  const handleBathroomFilter = (value: number | "all") => {
    setSelected(value);
    if (value === "all") {
      setBathroomFilters([]);
    } else {
      setBathroomFilters([value]);
    }
  };

  return (
    <div className="pt-[30px]">
      <h1 className="text-[black]">Սանհանգույցների քանակ</h1>
      <div className="flex flex-wrap gap-x-3 gap-y-1  pt-[10px] ">
        <button
          onClick={() => handleBathroomFilter("all")}
          className={`w-[98px] h-[50px] border rounded-[40px] border-[#d8d9dc] cursor-pointer ${
            selected === "all"
              ? "bg-black text-white"
              : "bg-white text-black  hover:bg-[#eeee]"
          }`}
        >
          Բոլորը
        </button>
        <button
          onClick={() => handleBathroomFilter(1)}
          className={`w-[54px] h-[50px] border rounded-[40px] border-[#d8d9dc] cursor-pointer ${
            selected === 1
              ? "bg-black text-white"
              : "bg-white text-black  hover:bg-[#eeee]"
          }`}
        >
          1
        </button>
        <button
          onClick={() => handleBathroomFilter(2)}
          className={`w-[54px] h-[50px] border rounded-[40px] border-[#d8d9dc] cursor-pointer ${
            selected === 2
              ? "bg-black text-white"
              : "bg-white text-black  hover:bg-[#eeee]"
          }`}
        >
          2
        </button>
        <button
          onClick={() => handleBathroomFilter(3)}
          className={`w-[54px] h-[50px] border rounded-[40px] border-[#d8d9dc] cursor-pointer ${
            selected === 3
              ? "bg-black text-white"
              : "bg-white text-black  hover:bg-[#eeee]"
          }`}
        >
          3+
        </button>
      </div>
    </div>
  );
}
