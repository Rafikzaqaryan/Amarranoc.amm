import { SetStateAction, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useFilter } from "../../../FilterContext";

export default function Map() {
  const { searchQuery, setSearchQuery } = useFilter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openMapModal = () => setIsMapModalOpen(true);
  const closeMapModal = () => setIsMapModalOpen(false);

  const handleDateChange = (newDate: SetStateAction<Date>) => {
    setDate(newDate);
  };

  return (
    <div>
      <div className="[@media(max-width:596px)]:  flex gap-2 [@media(max-width:768px)]:justify-center">
        <div
          className="w-[144px] h-[45px] border border-black rounded-[40px] flex gap-[10px] justify-center items-center [@media(max-width:596px)]:w-[45px] "
          onClick={openMapModal}
        >
          <p className="sm:block hidden">Քարտեզ</p>
          <img
            src="https://amaranoc.am/images/map.svg"
            className="w-[16px] h-[16px]"
          />
        </div>
        <div className="sm:hidden  ">
          <div className="flex items-center w-auto h-[45px] border border-gray-300 rounded-[40px] px-3 py-2 [@media(max-width:768px)]:w-[50vw]">
            <input
              type="text"
              placeholder="Որոնում"
              className="flex-grow outline-none text-gray-700 bg-inherit"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img
              src="https://amaranoc.am/images/header/search.svg"
              className="w-[16px] h-[16px]"
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
            className="bg-white p-4 rounded-lg w-[400px]"
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
            className="bg-white p-4 rounded-lg w-[400px]"
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
