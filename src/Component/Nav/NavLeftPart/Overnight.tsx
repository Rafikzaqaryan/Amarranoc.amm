import { useState } from "react";
import { useFilter } from "../../../FilterContext";

export default function Overnight() {
  const { setOvernightFilters } = useFilter();
  const [activeFilter, setActiveFilter] = useState("all");

  const handleOvernightFilters = (value: string | "all") => {
    setActiveFilter(value);
    if (value === "all") {
      setOvernightFilters("");
    } else {
      setOvernightFilters(value);
    }
  };

  const buttonStyle = (value: string, width: string) =>
    `${width} h-[50px] border rounded-[40px] border-[#d8d9dc] cursor-pointer ${
      activeFilter === value
        ? "bg-black text-white"
        : "bg-white text-black hover:bg-[#eeee]"
    }`;

  return (
    <div className="pt-[30px]">
      <h1 className="text-[black]">Գիշերակացի առկայություն</h1>
      <div className="grid grid-cols-2 gap-2 pt-[10px] w-[200px]">
        <button
          className={buttonStyle("all", "w-[100px]")}
          onClick={() => handleOvernightFilters("all")}
        >
          Բոլորը
        </button>
        <button
          className={buttonStyle("Այո", "w-[70px]")}
          onClick={() => handleOvernightFilters("Այո")}
        >
          Այո
        </button>
        <button
          className={buttonStyle("Ոչ", "w-[70px]")}
          onClick={() => handleOvernightFilters("Ոչ")}
        >
          Ոչ
        </button>
      </div>
    </div>
  );
}
