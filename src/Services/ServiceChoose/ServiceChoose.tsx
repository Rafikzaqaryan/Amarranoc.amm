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
    { label: "Սպասարկում", value: "Սպասարկում", img: "service.svg" },
    { label: "Շոու", value: "Շոու", img: "services1.svg" },
    { label: "Միջոցառումներ", value: "Միջոցառումներ", img: "services2.svg" },
    { label: "Տեխնիկա", value: "Տեխնիկա", img: "services3.svg" },
    {
      label: "Օրավարձով գույք",
      value: "Օրավարձով գույք",
      img: "services4.svg",
    },
    { label: "Նկարահանում", value: "Նկարահանում", img: "services5.svg" },
    {
      label: "Ուղևորափոխադրում",
      value: "Ուղևորափոխադրում",
      img: "services6.svg",
    },
  ];

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
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
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 384,
        settings: {
          slidesToShow: 3,

          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center">
      <div className="w-[90vw]">
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
  );
}
