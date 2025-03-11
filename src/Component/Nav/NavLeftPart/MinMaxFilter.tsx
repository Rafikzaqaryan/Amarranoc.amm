import { useState } from "react";
import { useFilter } from "../../../FilterContext";

export default function MinMaxFilter() {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const buttonValue = ["֏", "$", "€", "₽"];
  const { setMinPrice, setMaxPrice, minPrice, maxPrice } = useFilter();
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const handleClick = (index: number) => {
    setActiveButton(index);
  };
  return (
    <div>
      <div className="flex gap-2 pl-2 pt-[40px]">
        <p className="text-[black]">Արժեք</p>
        {buttonValue.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`w-[34px] h-[34px] border flex justify-center items-center rounded-[20px] text-[18px] cursor-pointer border-[#d8d9dc] 
          ${
            activeButton === index
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="flex gap-2 items-center pt-[20px] pr-[10px]">
        <input
          type="number"
          value={minPrice ?? ""}
          placeholder="Սկսած"
          onChange={handleMinPriceChange}
          className="w-[110px] h-[42px] border rounded-[5px] pl-[10px]  text-[14px] border-[#d8d9dc] text-[#a9a3af]"
          min="0"
        />
        -
        <input
          type="number"
          value={maxPrice ?? ""}
          placeholder="Մինչև"
          onChange={handleMaxPriceChange}
          className="w-[110px] h-[42px] border rounded-[5px] pl-[10px] text-[14px] border-[#d8d9dc] text-[#a9a3af]"
          min="0"
        />
      </div>
    </div>
  );
}
