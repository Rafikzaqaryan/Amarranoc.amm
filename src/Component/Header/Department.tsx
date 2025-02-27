import { useState } from "react";
interface MenuItem {
  path: string;
  label: string;
}
export default function Department() {
  const [active, setActive] = useState<string>();
  const menuItems: MenuItem[] = [
    { path: "/", label: "Գլխավոր" },
    { path: "/discount", label: "Զեղչեր" },
    { path: "/services", label: "Ծառայություններ" },
    { path: "/about", label: "Մերմասին" },
  ];
  return (
    <div className="[@media(min-width:1301px)]:block hidden">
      <div className="flex  gap-[40px] text-[16px] text-[#101623]">
        {menuItems.map((item) => (
          <div
            key={item.path}
            className={`cursor-pointer border-b-1 transition-all duration-300 ${
              active === item.path
                ? " border-orange-500"
                : "border-transparent hover:border-orange-500"
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
