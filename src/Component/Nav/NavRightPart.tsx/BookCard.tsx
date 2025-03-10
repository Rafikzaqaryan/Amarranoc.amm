import { useNavigate } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import useLikedStore from "../../../Liked/Store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface BookCardProps {
  id: string;
  location: string;
  image: string;
  price: number;
  people: number;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
}

export default function BookCard({
  id,
  location,
  image,
  price,
  people,
  img2,
  img3,
  img4,
  img5,
}: BookCardProps) {
  const navigate = useNavigate();
  const { likedOffers, toggleLike } = useLikedStore();

  const isLiked = likedOffers.some((offer: { id: string }) => offer.id === id);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLike({ id, location, image, price, people, title: location });

    const message = isLiked
      ? "Offer removed from likes"
      : "Offer added to likes";
    toast(message);
  };

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3.7,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 710,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 703,
        settings: {
          slidesToShow: 3.4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 3.3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 671,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 648,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 612,
        settings: {
          slidesToShow: 2.9,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 569,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 548,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 525,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 505,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 464,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 446,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 409,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 386,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 366,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 346,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 326,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 306,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div
      //  className="cursor-pointer shadow-md w-full h-[390px] sm:w-72 md:w-[22vw] rounded-lg overflow-hidden pt-[20px]"
      className="cursor-pointer w-[370px] shadow-md h-[390px] rounded-lg overflow-hidden pt-[20px] [@media(max-width:1024px)]:w-[99.9vw]  [@media(max-width:800px)]:h-[300px] "
      // className="cursor-pointer shadow-md w-full h-[390px]  md:w-80  [@media(max-width:1024px)]:w-full [@media(max-width:801px)]:w-full  rounded-lg overflow-hidden pt-[20px]"
      onClick={() => navigate(`/offer/${id}`)}
    >
      <Slider {...settings}>
        <img
          src={image}
          className="w-full h-[220px] sm:h-[250px]  rounded-[10px]  [@media(max-width:1024px)]:w-[99.9vw] [@media(max-width:800px)]:!w-[200px]  [@media(max-width:800px)]:h-[145px] "
          alt="offer"
        />
        <img
          src={img2}
          className="w-full h-[220px]  rounded-[10px] sm:h-[250px]  [@media(max-width:1024px)]:w-[99.9vw] [@media(max-width:800px)]:!w-[200px]  [@media(max-width:800px)]:h-[145px] "
          alt="offer"
        />
        <img
          src={img3}
          className="w-full h-[220px]  rounded-[10px] sm:h-[250px]  [@media(max-width:1024px)]:w-[99.9vw] [@media(max-width:800px)]:!w-[200px]  [@media(max-width:800px)]:h-[145px] "
          alt="offer"
        />
        <img
          src={img4}
          className="w-full h-[220px]   rounded-[10px] sm:h-[250px]   [@media(max-width:1024px)]:w-[99.9vw] [@media(max-width:800px)]:!w-[200px]  [@media(max-width:800px)]:h-[145px] "
          alt="offer"
        />
        <img
          src={img5}
          className="w-full h-[220px]   rounded-[10px] sm:h-[250px]  [@media(max-width:1024px)]:w-[99.9vw] [@media(max-width:800px)]:!w-[200px]  [@media(max-width:800px)]:h-[145px]  "
          alt="offer"
        />
      </Slider>

      <div className="flex flex-col pl-[15px] pt-4 gap-4">
        <div className="flex gap-5 text-[18px] ">
          <div className="flex gap-1 items-center">
            <img
              src="https://amaranoc.am/images/location-outlined.svg"
              alt="location"
            />
            <strong>
              <p className="text-[14px]">{location}</p>
            </strong>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-[#fd993a]">
              <HiOutlineUsers />
            </div>

            <strong>
              <p className="text-[14px]">{people}</p>
            </strong>
          </div>
        </div>

        <div className="flex items-center justify-between pr-[10px]">
          <div className="flex gap-1">
            <img src="https://amaranoc.am/images/price.svg" alt="Price" />
            <strong>
              <p className="text-[18px] sm:text-[22px] text-[#575b65]">
                {price}֏
              </p>
            </strong>
          </div>
          <div
            className={`cursor-pointer text-[20px] w-[30px] h-[30px] border rounded-[30px] flex items-center justify-center ${
              isLiked ? "text-red-500" : "text-gray-400"
            }`}
            onClick={handleLike}
          >
            <CiHeart />
          </div>
        </div>
      </div>
    </div>
  );
}
