import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import SignUpWithGoogle from "./SignUpWithGoogle";
import Input from "./Input";
import Header from "../Component/Header/Header";
import Footer from "../Component/footer/Footer";

export default function Login() {
  const nav = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Խնդրում ենք լրացնել բոլոր դաշտերը։");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successfully");
      nav("/");
    } catch (error: any) {
      setError("Մուտքի սխալ։ Խնդրում ենք ստուգել տվյալները։");
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 pt-[80px] pb-[120px]"
        >
          <strong className="flex justify-center text-[18px]">Մուտք</strong>

          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Էլ․ հասցե կամ հեռախոսահամար"
            className="w-[480px] h-[43px] border rounded-lg pl-[15px]"
            aria-label="Էլ․ հասցե կամ հեռախոսահամար"
          />

          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Գաղտնաբառ"
            className="w-[480px] h-[43px] border rounded-lg pl-[15px]"
            aria-label="Գաղտնաբառ"
          />

          {error && <p className="text-red-500 text-center">{error}</p>}

          <Link to="/forgot-password" className="text-center text-blue-500">
            Մոռացել եք Գաղտնաբա՞ռը։
          </Link>

          <button
            type="submit"
            className="w-[480px] h-[57px] bg-[#fd993a] rounded-[40px] text-white font-semibold"
          >
            Մուտք
          </button>

          <p className="text-[#878a91] flex justify-center text-[15px]">կամ</p>

          <SignUpWithGoogle />

          <p className="flex justify-center gap-3">
            Դեռ գրանցված չե՞ք։
            <Link to="/register" className="text-[#fd993a]">
              Գրանցում
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
