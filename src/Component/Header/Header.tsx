import Department from "./Department";
import Logo from "./Logo";
import RightPart from "./RightPart";

export default function Header() {
  return (
    <div className="flex justify-between items-center pl-[40px] pr-[40px] py-[24px]  [@media(max-width:1300px)]:pr-[100px]  [@media(max-width:601px)]:pl-[10px] [@media(min-width:601px)]:pt-[24px] [@media(max-width:601px)]:pr-[0] [@media(max-width:524px)]:gap-[10px]  [@media(max-width:824px)]:justify-between">
      <Logo />
      <Department />
      <RightPart />
    </div>
  );
}
