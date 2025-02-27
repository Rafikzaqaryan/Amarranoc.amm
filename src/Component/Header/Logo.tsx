import { useNavigate } from "react-router-dom";

export default function Logo() {
  const nav = useNavigate();
  return (
    <div
      className=" h-[44px]  [@media(min-width:1390px)]:w-auto"
      onClick={() => {
        nav("/");
      }}
    >
      <img src="https://amaranoc.am/images/logo.svg" className="w-[160px]" />
    </div>
  );
}
