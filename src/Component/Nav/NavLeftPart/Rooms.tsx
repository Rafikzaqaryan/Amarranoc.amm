export default function Rooms() {
  return (
    <div className="pt-[30px]">
      <h1 className="text-[black]">Սենյակների քանակ</h1>
      <div className="flex flex-wrap gap-x-3 gap-y-1 pt-[10px] ">
        <button>Բոլորը</button>
        {[1, 2, 3, 4, 5].map((roomCount) => (
          <button key={roomCount}>{roomCount}</button>
        ))}
        <button>6 և ավելի</button>
      </div>
    </div>
  );
}
