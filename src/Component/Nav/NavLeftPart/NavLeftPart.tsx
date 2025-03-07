import Bathroom from "./Bathroom";
import Location from "./Location";
import MinMaxFilter from "./MinMaxFilter";
import Overnight from "./Overnight";
import Pool from "./Pool";
import Rooms from "./Rooms";

export default function NavLeftPart() {
  return (
    <section className="w-[288px] h-[1180px] ml-[100px] pl-[10px] border border-[#d8d9dc] text-[#d2d3d6] rounded-2xl xl:block hidden ">
      <Location />
      <MinMaxFilter />
      <Overnight />
      <Rooms />
      <Bathroom />
      <Pool />
    </section>
  );
}
