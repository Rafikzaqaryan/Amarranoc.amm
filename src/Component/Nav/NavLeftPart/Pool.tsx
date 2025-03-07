import { useState } from "react";
import { useFilter } from "../../../FilterContext";

export default function Pool() {
  const { setPoolFilters } = useFilter();
  const [activeButton, setActiveButton] = useState("all");

  const handlePoolFilter = (value: string | "all") => {
    if (value === "all") {
      setPoolFilters("");
    } else {
      setPoolFilters(value);
    }
    setActiveButton(value);
  };

  const buttonClasses = (value: string) =>
    `h-[50px] border rounded-[40px] border-[#d8d9dc] cursor-pointer ${
      activeButton === value
        ? "bg-black text-white"
        : "bg-white text-black hover:bg-[#eeee]"
    }`;

  return (
    <div className="pt-[30px]">
      <h1 className="text-[black]">Լողավազան</h1>
      <div className="flex flex-wrap gap-x-4 gap-y-1 pt-[10px]">
        <button
          onClick={() => handlePoolFilter("all")}
          className={buttonClasses("all") + " px-6"}
        >
          Բոլորը
        </button>
        <button
          onClick={() => handlePoolFilter("Բաց")}
          className={buttonClasses("Բաց") + " px-5"}
        >
          Բաց
        </button>
        <button
          onClick={() => handlePoolFilter("Փակ")}
          className={buttonClasses("Փակ") + " px-5"}
        >
          Փակ
        </button>
        <button
          onClick={() => handlePoolFilter("Տաքացվող")}
          className={buttonClasses("Տաքացվող") + " px-6"}
        >
          Տաքացվող
        </button>
        <button
          onClick={() => handlePoolFilter("Առանց լողավազանի")}
          className={buttonClasses("Առանց լողավազանի") + " px-4"}
        >
          Առանց լողավազանի
        </button>
      </div>
    </div>
  );
}
