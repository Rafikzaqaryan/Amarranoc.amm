import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";

interface ChooseProps {
  setClickedChoose: (value: string) => void;
}

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { onClick } = props;
  return (
    <div className="[@media(min-width:601px)]:block hidden ">
      <div
        className="cursor-pointer  shadow-lg w-[30px] h-[30px] rounded-full flex items-center justify-center absolute right-2 top-1/2 transform -translate-y-1/2 z-10 "
        style={{ display: "block" }}
        onClick={onClick}
      >
        <SlArrowRightCircle size={30} color="#575b65" />
      </div>
    </div>
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { onClick } = props;
  return (
    <div className="[@media(min-width:601px)]:block hidden ">
      <div
        className="cursor-pointer shadow-lg w-[30px] h-[30px] rounded-full flex items-center justify-center absolute left-2 top-1/2 transform -translate-y-1/2 z-10 "
        style={{ display: "block" }}
        onClick={onClick}
      >
        <SlArrowLeftCircle size={30} color="#575b65" />
      </div>
    </div>
  );
}

export default function Choose({ setClickedChoose }: ChooseProps) {
  const [active, setActive] = useState<string>();
  const options = [
    { label: "Առանձնատներ", value: "Առանձնատներ", img: "home.svg" },
    { label: "Frame houses", value: "Frame houses", img: "frame_house.svg" },
    { label: "Տնակներ", value: "Տնակներ", img: "cabins.svg" },
    { label: "Փակլողավազան", value: "Փակլողավազան", img: "close_pool.svg" },
    {
      label: "Աղմուկից հեռու",
      value: "Աղմուկից հեռու",
      img: "far_from_noise.svg",
    },
    { label: "Շքեղ տեսարան", value: "Շքեղ տեսարան", img: "view.svg" },
    { label: "Պահանջված", value: "Պահանջված", img: "nobel.svg" },
    { label: "Լճի ափին", value: "Լճի ափին", img: "along_lake.svg" },
    { label: "Տաղավար", value: "Տաղավար", img: "pavilion.svg" },
    { label: "Հյուրանոցներ", value: "Հյուրանոցներ", img: "hotel.svg" },
    { label: "Դիզայն", value: "Դիզայն", img: "designed.svg" },
    { label: "Նոր", value: "Նոր", img: "new.svg" },
    { label: "Բնակարաններ", value: "Բնակարաններ", img: "house.svg" },
  ];

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6.5,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: (
      <SampleNextArrow
        style={undefined}
        onClick={undefined}
        className={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4.5,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 384,
        settings: {
          slidesToShow: 3.5,

          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center">
      <div className="w-[1075px] [@media(max-width:1280px)]:w-[100vw] relative">
        <div className="h-[100px] w-[70vw] [@media(max-width:1300px)]:w-[94vw]  ">
          <Slider {...settings}>
            {options.map(({ label, value, img }) => (
              <div
                key={value}
                onClick={() => {
                  setClickedChoose(value);
                  setActive(value);
                }}
                className={`cursor-pointer border-b-1 transition-all duration-300 px-4 py-2  ${
                  active === value
                    ? "border-orange-500"
                    : "border-transparent hover:border-orange-500"
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={`https://api.amaranoc.am/${img}`}
                    alt={label}
                    className="w-[40px] h-[40px] "
                  />
                  <p className="text-[14px] font-medium text-center">{label}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
