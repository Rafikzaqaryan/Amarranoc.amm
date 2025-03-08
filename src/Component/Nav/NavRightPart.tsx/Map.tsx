import { SetStateAction, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useFilter } from "../../../FilterContext";
import { FiX } from "react-icons/fi";
import Location from "../NavLeftPart/Location";
import MinMaxFilter from "../NavLeftPart/MinMaxFilter";
import Overnight from "../NavLeftPart/Overnight";
import Rooms from "../NavLeftPart/Rooms";
import Bathroom from "../NavLeftPart/Bathroom";
import Pool from "../NavLeftPart/Pool";

export default function Map() {
  const { searchQuery, setSearchQuery } = useFilter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const openMapModal = () => {
    setIsMapModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeMapModal = () => {
    setIsMapModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleDateChange = (newDate: SetStateAction<Date>) => {
    setDate(newDate);
  };
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    document.body.style.overflow = !open ? "hidden" : "auto";
  };

  return (
    <div>
      <div className="pl-[25px] pr-[10px] [@media(max-width:596px)]:  flex gap-2 [@media(max-width:601px)]:justify-center  [@media(min-width:599px)]:justify-start">
        <button
          className="w-[160px] h-[45px] border border-black rounded-[40px] flex gap-[10px] justify-center items-center  [@media(min-width:1280px)]:hidden [@media(max-width:611px)]:rounded-[30px] [@media(max-width:601px)]:w-[45px] "
          onClick={toggleMenu}
        >
          <p className="[@media(max-width:601px)]:hidden"> Ֆիլտր</p>
          {open ? (
            <FiX />
          ) : (
            <img src="https://amaranoc.am/images/filter-icon.svg" />
          )}
        </button>

        {open && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={toggleMenu}
          />
        )}

        <section
          className={`fixed top-0 left-0 bg-white w-3/4 sm:w-1/2 md:w-1/3 h-full py-24 pl-4 overflow-y-auto transition-transform duration-500 ease-in-out shadow-lg rounded-r-lg z-20 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Location />
          <MinMaxFilter />
          <Overnight />
          <Rooms />
          <Bathroom />
          <Pool />
        </section>

        <div
          className="w-[144px] h-[45px] border border-black rounded-[40px] flex gap-[10px] justify-center items-center [@media(max-width:600px)]:w-[45px] [@media(max-width:600px)]:hidden "
          onClick={openMapModal}
        >
          <p className="[@media(max-width:601px)]:hidden">Քարտեզ</p>
          <img
            src="https://amaranoc.am/images/map.svg"
            className="w-[16px] h-[16px]"
          />
        </div>
        <div className=" [@media(min-width:601px)]:hidden  ">
          <div className="flex items-center w-auto h-[45px] border border-gray-300 rounded-[40px] px-3 py-2 [@media(max-width:768px)]:w-[70vw]">
            <input
              type="text"
              placeholder="Որոնում"
              className="flex-grow outline-none text-gray-700 bg-inherit"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div
          className="w-[42px] h-[42px] border border-black rounded-[40px] flex justify-center items-center"
          onClick={openModal}
        >
          <img src="https://amaranoc.am/images/calendar.svg" />
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-[rgb(16,22,35,.2)]  bg-opacity-0.5 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-lg w-[400px] max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-xl">Նշեք Ձեր ցանկալի օրերը</h1>

            <div className="mt-4">
              <Calendar onChange={() => handleDateChange} value={date} />
            </div>
            <button onClick={closeModal} className="mt-4 px-4 py-2 rounded">
              Փակել
            </button>
          </div>
        </div>
      )}

      {isMapModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-[rgb(16,22,35,.2)]  bg-opacity-0.5 z-50"
          onClick={closeMapModal}
        >
          <div
            className="bg-white p-4 rounded-lg w-[400px] max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-xl">Քարտեզի դիտում</h1>
            <p>Ահա ձեր քարտեզի մոդալը:</p>
            <button onClick={closeMapModal} className="mt-4 px-4 py-2 rounded">
              Փակել
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
