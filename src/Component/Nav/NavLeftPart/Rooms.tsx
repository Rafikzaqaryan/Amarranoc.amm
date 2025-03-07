import { useFilter } from "../../../FilterContext";
import { useState } from "react";

export default function Rooms() {
  const { setRoomFilters } = useFilter();
  const [activeFilter, setActiveFilter] = useState("all");
  const handleRoomFilter = (value: any | "all") => {
    setActiveFilter(value);
    if (value === "all") {
      setRoomFilters([]);
    } else {
      setRoomFilters([value]);
    }
  };

  const getButtonWidth = (value: number | string): string => {
    switch (value) {
      case "all":
        return "w-[98px]";
      case 1:
        return "w-[54px]";
      case 2:
        return "w-[54px]";
      case 3:
        return "w-[54px]";
      case 4:
        return "w-[54px]";
      case 5:
        return "w-[54px]";
      case "6 և ավելի":
        return "w-[120px]";
      default:
        return "w-[54px]";
    }
  };

  const buttonStyle = (value: number | string) => {
    return `${getButtonWidth(
      value
    )} h-[50px] border rounded-[40px] border-[#d8d9dc] cursor-pointer ${
      activeFilter === value
        ? "bg-black text-white"
        : "bg-white text-black hover:bg-[#eeee]"
    }`;
  };

  return (
    <div className="pt-[30px]">
      <h1 className="text-[black]">Սենյակների քանակ</h1>
      <div className="flex flex-wrap gap-x-3 gap-y-1 pt-[10px] ">
        <button
          onClick={() => handleRoomFilter("all")}
          className={buttonStyle("all")}
        >
          Բոլորը
        </button>
        {[1, 2, 3, 4, 5].map((roomCount) => (
          <button
            key={roomCount}
            onClick={() => handleRoomFilter(roomCount)}
            className={buttonStyle(roomCount)}
          >
            {roomCount}
          </button>
        ))}
        <button
          onClick={() => handleRoomFilter("6 և ավելի")}
          className={buttonStyle("6 և ավելի")}
        >
          6 և ավելի
        </button>
      </div>
    </div>
  );
}
