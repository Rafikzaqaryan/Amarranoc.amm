import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import SignUpWithGoogle from "./SignUpWithGoogle";
import Input from "./Input";
import Footer from "../Components/footer/Footer";
import Header from "../Components/Header/Header";

export default function Register() {
  const nav = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fnlname, setFnLname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password || !fnlname || !phone) {
      setError("Խնդրում ենք լրացնել բոլոր դաշտերը։");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Account created:", userCredential.user);
      nav("/login");
    } catch (error: any) {
      setError(error.message);
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
          <strong className="flex justify-center text-[18px]">Գրանցում</strong>

          <Input
            type="text"
            onChange={(e) => setFnLname(e.target.value)}
            className="w-[480px] h-[43px] border rounded-lg pl-[15px]"
            placeholder="Անուն Ազգանուն"
            aria-label="Անուն Ազգանուն"
          />

          <Input
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
            className="w-[480px] h-[43px] border rounded-lg pl-[15px]"
            placeholder="Հեռախոսահամար"
          />

          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Էլ․ հասցե"
            className="w-[480px] h-[43px] border rounded-lg pl-[15px]"
            aria-label="Էլ․ հասցե"
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
            Գրանցվել
          </button>

          <SignUpWithGoogle />

          <p className="flex justify-center gap-3">
            Արդեն գրանցված ե՞ք։
            <Link to="/login" className="text-[#fd993a]">
              Մուտք
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
