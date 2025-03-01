import Department from "./Department";
import Logo from "./Logo";
import RightPart from "./RightPart";

export default function Header() {
  return (
    <div className="flex justify-evenly gap-[100px] items-center  py-[24px] [@media(max-width:524px)]:gap-[10px]  [@media(max-width:824px)]:justify-between">
      <Logo />
      <Department />
      <RightPart />
    </div>
  );
}
