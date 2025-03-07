import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import Heart from "./Heart";
import Search from "./Search";
import SignIcon from "./SignIcon";

interface MenuItem {
  path: string;
  label: string;
}

const menuItems: MenuItem[] = [
  { path: "/", label: "Գլխավոր" },
  { path: "/discount", label: "Զեղչեր" },
  { path: "/services", label: "Ծառայություններ" },
  { path: "/about", label: "Մերմասին" },
  { path: "/login", label: "Պրոֆիլ" },
  { path: "/liked", label: "Հավանածներ" },
];

export default function RightPart() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [active, setActive] = useState<string>(pathname);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const toggleMenu = () => {
    setOpen(!open);
    document.body.style.overflow = !open ? "hidden" : "auto";
  };

  const handleClick = (path: string) => {
    navigate(path);
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  const renderMenuItems = (isMobile: boolean) =>
    menuItems.map(({ path, label }) => (
      <div
        key={path}
        className={`cursor-pointer py-3 px-6 font-semibold transition-all duration-300 ease-in-out ${
          isMobile
            ? "text-lg text-gray-800 hover:text-orange-500"
            : "text-base text-gray-700 hover:text-orange-500 hover:border-b-2 border-orange-500"
        } ${active === path ? "text-orange-500 border-orange-500" : ""}`}
        onClick={() => handleClick(path)}
      >
        {label}
      </div>
    ));

  return (
    <div className="flex gap-2 items-center">
      <img
        src="https://amaranoc.am/images/header/globus.svg"
        className="w-6 h-6"
        alt="Globus"
      />
      <SignIcon />
      <div className="[@media(min-width:801px)]:block hidden">
        <Heart />
      </div>
      <div className="[@media(min-width:801px)]:block hidden">
        <Search />
      </div>
      <nav className="lg:hidden">
        <div className="border border-[#e1e1e3] w-[44px] h-[44px] rounded-[30px] flex  justify-center">
          <button
            className="text-3xl focus:outline-none hover:text-orange-500 transition-colors duration-200"
            onClick={toggleMenu}
          >
            {open ? (
              <FiX />
            ) : (
              <img
                src="https://amaranoc.am/images/header/menu.svg"
                alt="Menu"
              />
            )}
          </button>
        </div>

        {open && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={toggleMenu}
          />
        )}

        <div
          className={`flex flex-col  gap-[50px] fixed top-0 right-0 bg-white w-3/4 sm:w-1/2 md:w-1/3 h-full py-24 pl-4 overflow-y-auto transition-transform duration-500 ease-in-out shadow-lg rounded-l-lg z-20 ${
            open ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <Search />
          {renderMenuItems(true)}
        </div>
      </nav>
    </div>
  );
}
