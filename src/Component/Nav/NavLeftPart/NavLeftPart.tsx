import Location from "./Location";
import MinMaxFilter from "./MinMaxFilter";
import Overnight from "./Overnight";

export default function NavLeftPart() {
  return (
    <div>
      <Location />
      <MinMaxFilter />
      <Overnight />
    </div>
  );
}
