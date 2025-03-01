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

  const infoFields = [
    {
      label: "Կոդ",
      value: offer.code,
      icon: "https://amaranoc.am/images/code.svg",
    },
    {
      label: "Հասցե",
      value: offer.adreess,
      icon: "https://amaranoc.am/images/location-outlined.svg",
    },
    {
      label: "Գիշերակաց",
      value: offer.overnight,
      icon: "https://amaranoc.am/images/overnight.svg",
    },
    {
      label: "Շինության մակերես",
      value: offer.buildingarea ? `${offer.buildingarea} քմ` : "",
      icon: "https://amaranoc.am/images/building-area.svg",
    },
    {
      label: "Ընդհանուր մակերես",
      value: offer.commonarea ? `${offer.commonarea} քմ` : "",
      icon: "https://amaranoc.am/images/common-area.svg",
    },
    {
      label: "Մարդկանց թույլատրելի քանակ",
      value: offer.people,
      icon: <HiOutlineUsers className="text-[#fd993a]" />,
    },
    {
      label: "Մարդկանց թույլատրելի քանակը գիշերակացով",
      value: offer.PeopleOvernight,
      icon: "https://amaranoc.am/images/peoples-count-overnight.svg",
    },
    {
      label: "Սենյակների քանակ",
      value: offer.rooms,
      icon: "https://amaranoc.am/images/rooms-count.svg",
    },
    {
      label: "Սանհանգույցների քանակ",
      value: offer.bathrooms,
      icon: "https://amaranoc.am/images/bathrooms-count.svg",
    },
    {
      label: "Լողավազան",
      value: offer.pool,
      icon: "https://amaranoc.am/images/pool.svg",
    },
  ];

  return (
    <div className="w-[88vw] h-[470px] border border-[#d8d9dc] rounded-2xl pl-[20px] pr-[20px] pt-[20px]">
      <h1 className="text-[16px]">Հայտարարության մասին</h1>
      <div className="flex flex-col gap-2">
        {infoFields.map((field, index) =>
          field.value ? (
            <div key={index} className="flex justify-between">
              <div className="flex items-center gap-1">
                {typeof field.icon === "string" ? (
                  <img
                    className="w-[16px] h-[16px]"
                    src={field.icon}
                    alt="icon"
                  />
                ) : (
                  field.icon
                )}
                <p>{field.label}</p>
              </div>
              <p>{field.value}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
