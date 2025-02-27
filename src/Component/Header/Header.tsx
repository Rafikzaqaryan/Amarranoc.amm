import Department from "./Department";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  return (
    <div className="flex justify-around gap-2 items-center  py-[24px] [@media(max-width:524px)]:gap-[10px]">
      <Logo />
      <Department />
      <Search />
    </div>
  );
}
