import NavLeftPart from "./NavLeftPart/NavLeftPart";
import NavRightPart from "./NavRightPart.tsx/NavRightPart";

export default function Nav() {
  return (
    <div className=" pt-[20px] flex gap-5 justify-center">
      <NavLeftPart />
      <NavRightPart />
    </div>
  );
}
