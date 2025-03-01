import Heart from "./Heart";
import Search from "./Search";
import SignIcon from "./SignIcon";

export default function RightPart() {
  return (
    <div className="flex gap-2 items-center">
      <img
        src="https://amaranoc.am/images/header/globus.svg"
        className="w-5 h-5"
      />
      <SignIcon />
      <Heart />
      <Search />
    </div>
  );
}
