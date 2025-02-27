interface Offer {
  location: string;
  price: number;
  overNightPrice: number;
}

export default function OfferPrice({ offer }: { offer: Offer | null }) {
  if (!offer)
    return <p className="text-center text-gray-500">No images available</p>;
  return (
    <div className="border border-[#d8d9dc] rounded-[10px] w-[88vw] h-[86px] flex justify-between  pl-[30px] pr-[30px] ">
      <div className="flex items-center">
        <img
          src="https://amaranoc.am/images/location-filled.svg"
          className="w-[24px] h-[24px]"
        />
        <p className="text-[30px]">{offer.location}</p>
      </div>
      <div className="flex items-center gap-7">
        <p className="text-[12px]">
          Արժեք <br />
          <span className="text-[24px] text-[#fd993a]">{offer.price}֏</span>
        </p>
        <p className="text-[12px]">
          Արժեքը գիշերակացով` <br />
          <span className="text-[24px] text-[#fd993a]">
            {offer.overNightPrice}֏
          </span>
        </p>
      </div>
    </div>
  );
}
