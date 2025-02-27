import { useNavigate } from "react-router";

export default function SignIcon() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <img
      onClick={handleLoginClick}
      src="https://amaranoc.am/images/header/user.svg"
      className="w-10 h-10"
      alt="User"
    />
  );
}
