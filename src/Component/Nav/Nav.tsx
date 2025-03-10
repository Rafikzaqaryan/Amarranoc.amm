import NavLeftPart from "./NavLeftPart/NavLeftPart";
import NavRightPart from "./NavRightPart.tsx/NavRightPart";

export default function Nav() {
  return (
    <div className=" pt-[40px] gap-2 flex justify-center">
      <NavLeftPart />
      <NavRightPart />
    </div>
  );
}
