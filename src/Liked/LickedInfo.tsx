import useLikedStore from "./Store";
import { BsFillPeopleFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function LikedInfo() {
  const { likedOffers, toggleLike } = useLikedStore();
  const navigate = useNavigate();

  return (
    <div className="flex gap-[20px] flex-wrap justify-center">
      {likedOffers.length > 0 ? (
        likedOffers.map((el) => (
          <div
            key={el.id}
            className="shadow-md w-[460px] h-[400px] rounded-[10px] bg-white cursor-pointer"
            onClick={() => navigate(`/offer/${el.id}`)}
          >
            <img
              src={el.image}
              className="w-[460px] h-[270px] rounded-[10px] object-cover"
            />
            <div className="flex gap-10 pt-6 text-[16px] px-5">
              <div className="flex gap-2 items-center">
                <img
                  src="https://amaranoc.am/images/location-outlined.svg"
                  alt="Location Icon"
                />
                <strong>{el.location}</strong>
              </div>
              <div className="flex gap-2 items-center">
                <div className="text-orange-500">
                  <BsFillPeopleFill />
                </div>
                <strong>{el.people}</strong>
              </div>
            </div>
            <div className="flex justify-between items-center pt-6 px-5">
              <div className="flex items-center gap-2">
                <img
                  src="https://amaranoc.am/images/price.svg"
                  alt="Price Icon"
                />
                <strong className="text-[20px] text-[#575b65]">
                  {el.price}֏
                </strong>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(el);
                }}
                className="w-6 h-6 text-red-500 cursor-pointer"
              >
                <CiHeart />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 text-lg col-span-3">
          No liked offers yet.
        </p>
      )}
    </div>
  );
}
