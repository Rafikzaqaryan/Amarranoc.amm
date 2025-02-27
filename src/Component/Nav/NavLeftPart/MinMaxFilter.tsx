import { useState } from "react";

export default function MinMaxFilter() {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const buttonValue = ["֏", "$", "€", "₽"];
  return (
    <div>
      <div className="flex gap-2 pl-2 pt-[40px]">
        <p className="text-[black]">Արժեք</p>
        {buttonValue.map((value, index) => (
          <button
            key={index}
            className={`w-[34px] h-[34px] border flex justify-center items-center rounded-[20px] text-[18px] cursor-pointer border-[#d8d9dc] 
      ${
        activeButton === index ? "bg-black text-white" : "bg-white text-black"
      }`}
          >
            {value}
          </button>
        ))}
        <div className="flex gap-2 items-center pt-[20px]">
          <input
            type="number"
            placeholder="Սկսած"
            className="w-[120px] h-[42px] border rounded-[5px] pl-[10px] text-[14px] border-[#d8d9dc] text-[#a9a3af]"
            min="0"
          />
          -
          <input
            type="number"
            placeholder="Մինչև"
            className="w-[120px] h-[42px] border rounded-[5px] pl-[10px] text-[14px] border-[#d8d9dc] text-[#a9a3af]"
            min="0"
          />
        </div>
      </div>
    </div>
  );
}
