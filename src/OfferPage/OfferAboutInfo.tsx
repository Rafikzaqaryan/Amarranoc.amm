import { HiOutlineUsers } from "react-icons/hi2";

interface Offer {
  code: string;
  adreess: string;
  overnight: string;
  buildingarea: number;
  commonarea: number;
  PeopleOvernight: number;
  bathrooms: number;
  pool: string;
  rooms: number;
  people: number;
}

export default function OfferAboutInfo({ offer }: { offer: Offer | null }) {
  if (!offer)
    return <p className="text-center text-gray-500">No images available</p>;

  return (
    <div className="w-[88vw] h-[470px] border  border-[#d8d9dc] rounded-2xl pl-[20px] pr-[20px] pt-[20px]">
      <h1 className="text-[16px]">Հայտարարության մասին</h1>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <img
              className="w-[16px] h-[16px]"
              src="https://amaranoc.am/images/code.svg"
            />
            <p>Կոդ</p>
          </div>
          <p>{offer.code}</p>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <img
              className="w-[16px] h-[16px]"
              src="https://amaranoc.am/images/location-outlined.svg"
            />
            <p>Հասցե</p>
          </div>
          <p>{offer.adreess}</p>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <img
              className="w-[16px] h-[16px]"
              src="https://amaranoc.am/images/overnight.svg"
            />
            <p>Գիշերակաց</p>
          </div>
          <p>{offer.overnight}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex  items-center gap-1">
            <img
              className="w-[16px] h-[16px]"
              src="https://amaranoc.am/images/building-area.svg"
            />
            <p>Շինության մակերես</p>
          </div>
          <p>{offer.buildingarea} քմ</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <img
              className="w-[16px] h-[16px]"
              src="https://amaranoc.am/images/common-area.svg"
            />
            <p>Ընդհանուր մակերես</p>
          </div>
          <p>{offer.commonarea} քմ</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <div className="text-[#fd993a]">
              <HiOutlineUsers />
            </div>
            <p>Մարդկանց թույլատրելի քանակ</p>
          </div>
          <p>{offer.people}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex  items-center gap-1">
            <img
              className="w-[16px] h-[16px]"
              src="https://amaranoc.am/images/peoples-count-overnight.svg"
            />
            <p>Մարդկանց թույլատրելի քանակը գիշերակացով</p>
          </div>
          <p>{offer.PeopleOvernight}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <img
              className="w-[16px] h-[16px]"
              src="https://amaranoc.am/images/rooms-count.svg"
            />
            <p>Սենյակների քանակ</p>
          </div>
          <p>{offer.rooms}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <img
              className="w-[16px] h-[16px]"
              src="https://amaranoc.am/images/bathrooms-count.svg"
            />
            <p>Սանհանգույցների քանակ</p>
          </div>
          <p>{offer.bathrooms}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center  gap-1">
            <img
              className="w-[16px] h-[16px]"
              src="https://amaranoc.am/images/pool.svg"
            />
            <p>Լողավազան</p>
          </div>
          <p>{offer.pool}</p>
        </div>
      </div>
    </div>
  );
}
