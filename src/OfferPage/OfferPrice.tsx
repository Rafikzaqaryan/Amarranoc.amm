import { useState } from "react";

interface Offer {
  location: string;
  price: number;
  overNightPrice: number;
}

type CurrencySymbol = "֏" | "$" | "€" | "₽";

export default function OfferPrice({ offer }: { offer: Offer | null }) {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const buttonValue: CurrencySymbol[] = ["֏", "$", "€", "₽"];

  const conversionRates: Record<CurrencySymbol, number> = {
    "֏": 1,

    $: 0.0026,
    "€": 0.0024,
    "₽": 0.19,
  };

  const getConvertedPrice = (price: number) => {
    if (activeButton === null) return price;

    const currencySymbol = buttonValue[activeButton];

    const conversionRate = conversionRates[currencySymbol];
    return Math.floor(price * conversionRate);
  };

  if (!offer) {
    return <p className="text-center text-gray-500">No images available</p>;
  }

  const priceInfo = [
    {
      label: "Արժեք",
      value: getConvertedPrice(offer.price),
    },
    {
      label: "Արժեքը գիշերակացով`",
      value: getConvertedPrice(offer.overNightPrice),
    },
  ];

  const handleClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <div className="border border-[#d8d9dc] rounded-[10px] w-[88vw] h-[86px] flex justify-between pl-[30px] pr-[30px]  [@media(max-width:1200px)]:flex-col  [@media(max-width:600px)]:items-start  [@media(max-width:1200px)]:h-auto">
      <div className="flex items-center gap-2  [@media(max-width:1200px)]:pt-[10px]">
        <img
          src="https://amaranoc.am/images/location-filled.svg"
          className="w-[24px] h-[24px]"
        />
        <strong>
          <p className="text-[28px]">{offer.location}</p>
        </strong>
      </div>
      <div className="flex items-center gap-7  [@media(max-width:1200px)]:justify-between  [@media(max-width:1200px)]:pb-[20px]  [@media(max-width:601px)]:flex-col [@media(max-width:601 px)]:items-start">
        <div className="flex gap-7">
          {priceInfo.map((field, index) =>
            field.value ? (
              <div key={index} className="flex flex-col justify-center">
                <p className="text-[12px]">{field.label}</p>
                <strong>
                  <span className="text-[24px] text-[#fd993a]">
                    {field.value}
                  </span>
                </strong>
              </div>
            ) : null
          )}
        </div>

        <div className="flex gap-2 [@media(max-width:600px)]:pb-[20px] ">
          {buttonValue.map((value, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`w-[44px] h-[44px] border flex justify-center items-center rounded-[30px] text-[18px] cursor-pointer border-[#d8d9dc] [@media(max-width:800px)]:w-[34px] [@media(max-width:800px)]:h-[34px]
            ${
              activeButton === index
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
