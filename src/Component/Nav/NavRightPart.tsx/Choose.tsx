import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

interface ChooseProps {
  setClickedChoose: (value: string) => void;
}

export default function Choose({ setClickedChoose }: ChooseProps) {
  const [active, setActive] = useState<string>();
  const options = [
    { label: "Առանձնատներ", value: "Առանձնատներ", img: "home.svg" },
    { label: "Frame houses", value: "Frame houses", img: "frame_house.svg" },
    { label: "Տնակներ", value: "Տնակներ", img: "cabins.svg" },
    { label: "Փակ լողավազան", value: "Փակ լողավազան", img: "close_pool.svg" },
    {
      label: "Աղմուկից հեռու",
      value: "Աղմուկից հեռու",
      img: "far_from_noise.svg",
    },
    { label: "Շքեղ տեսարան", value: "Շքեղ տեսարան", img: "view.svg" },
    { label: "Պահանջված", value: "Պահանջված", img: "nobel.svg" },
    { label: "Լճի ափին", value: "Լճի ափին", img: "along_lake.svg" },
  ];

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000, // auto-slide every 2 seconds
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center">
      <div className="h-[50px] w-[70vw] ">
        <Slider {...settings}>
          {options.map(({ label, value, img }) => (
            <div
              key={value}
              onClick={() => {
                setClickedChoose(value);
                setActive(value);
              }}
              className={`cursor-pointer border-b-1 transition-all duration-300 ${
                active === value
                  ? "border-orange-500"
                  : "border-transparent hover:border-gray-200 "
              }`}
            >
              <div className="flex flex-col items-center ">
                <img
                  src={`https://api.amaranoc.am/${img}`}
                  alt={label}
                  className="w-[40px] h-[40px]"
                />
                <p className="text-[14px]">{label}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
