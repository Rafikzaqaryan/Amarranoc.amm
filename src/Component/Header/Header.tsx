import Department from "./Department";
import Logo from "./Logo";
import RightPart from "./RightPart";

export default function Header() {
  return (
    <div className="flex justify-between gap-[100px] items-center pl-[70px] pr-[70px] py-[24px] [@media(max-width:376px)]:pl-[0px] [@media(max-width:376px)]:pr-[0] [@media(max-width:524px)]:gap-[10px]  [@media(max-width:824px)]:justify-between">
      <Logo />
      <Department />
      <RightPart />
    </div>
  );
}
