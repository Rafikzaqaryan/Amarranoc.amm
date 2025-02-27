import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router";
export default function Heart() {
  const navigate = useNavigate();
  const handleLikedClick = () => {
    navigate("/liked");
  };
  return (
    <div onClick={handleLikedClick} className="cursor-pointer w-5 h-5 ">
      <CiHeart />
    </div>
  );
}
