import Bathroom from "./Bathroom";
import Location from "./Location";
import MinMaxFilter from "./MinMaxFilter";
import Overnight from "./Overnight";
import Pool from "./Pool";
import Rooms from "./Rooms";

export default function NavLeftPart() {
  return (
    <section className="w-[288px] h-[1180px] ml-[60px] pl-[10px] font-medium border border-[#d8d9dc] text-[#d2d3d6] rounded-2xl  [@media(min-width:1301px)]:block hidden ">
      <Location />
      <MinMaxFilter />
      <Overnight />
      <Rooms />
      <Bathroom />
      <Pool />
    </section>
  );
}
