export default function Bathroom() {
  return (
    <div className="pt-[30px]">
      <h1 className="text-[black]">Սանհանգույցների քանակ</h1>
      <div className="flex flex-wrap gap-x-3 gap-y-1  pt-[10px] ">
        <button
          className={`w-[98px] h-[50px] border rounded-[40px] border-[#d8d9dc] cursor-pointer `}
        >
          Բոլորը
        </button>
        <button
          className={`w-[54px] h-[50px] border rounded-[40px] border-[#d8d9dc] cursor-pointer 
          `}
        >
          1
        </button>
        <button
          className={`w-[54px] h-[50px] border rounded-[40px] border-[#d8d9dc] cursor-pointer 
           
          `}
        >
          2
        </button>
        <button
          className={`w-[54px] h-[50px] border rounded-[40px] border-[#d8d9dc] cursor-pointer 
          `}
        >
          3+
        </button>
      </div>
    </div>
  );
}
