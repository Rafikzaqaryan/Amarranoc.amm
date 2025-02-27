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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div
      className="cursor-pointer shadow-md w-full sm:w-72 md:w-80 rounded-lg overflow-hidden pt-[20px]"
      onClick={() => navigate(`/offer/${id}`)}
    >
      <Slider {...settings}>
        <img
          src={image}
          className="w-full h-[220px] sm:h-[250px] md:h-[270px] rounded-[10px]"
          alt="offer"
        />
        <img
          src={img2}
          className="w-full h-[220px] sm:h-[250px] md:h-[270px] rounded-[10px]"
          alt="offer"
        />
        <img
          src={img3}
          className="w-full h-[220px] sm:h-[250px] md:h-[270px] rounded-[10px]"
          alt="offer"
        />
        <img
          src={img4}
          className="w-full h-[220px] sm:h-[250px] md:h-[270px] rounded-[10px]"
          alt="offer"
        />
        <img
          src={img5}
          className="w-full h-[220px] sm:h-[250px] md:h-[270px] rounded-[10px]"
          alt="offer"
        />
      </Slider>

      <div className="flex flex-wrap gap-4 pt-4 text-[18px] pl-[15px] sm:pl-[20px]">
        <div className="flex gap-2 items-center">
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
      <div className="flex gap-7 pl-[15px] sm:pl-[20px] pt-[30px] sm:pt-[40px]">
        <div className="flex items-center gap-2">
          <img src="https://amaranoc.am/images/price.svg" alt="Price" />
          <strong>
            <p className="text-[18px] sm:text-[22px] text-[#575b65]">
              {price}֏
            </p>
          </strong>
          <div
            className={`cursor-pointer ${
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
