import Bathroom from "./Bathroom";
import Location from "./Location";
import MinMaxFilter from "./MinMaxFilter";
import Overnight from "./Overnight";
import Rooms from "./Rooms";

export default function NavLeftPart() {
  return (
    <div>
      <Location />
      <MinMaxFilter />
      <Overnight />
      <Rooms />
      <Bathroom />
    </div>
  );
}
