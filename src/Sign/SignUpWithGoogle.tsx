import { useNavigate } from "react-router";
import { auth } from "../Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function SignUpWithGoogle() {
  const nav = useNavigate();

  async function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Login successful:", result);
      nav("/"); // Navigate to the main page only after successful login
    } catch (error) {
      console.error("Login error:", error);
      alert("Մուտքի սխալ։ Խնդրում ենք ստուգել տվյալները։");
    }
  }

  return (
    <div
      onClick={handleGoogleLogin}
      className="w-[480px] h-[57px] border border-[#fd993a] rounded-[40px] flex justify-center items-center gap-4"
    >
      <img
        src="https://amaranoc.am/_next/image?url=%2Fimages%2Fgoogle-logo.png&w=16&q=75"
        alt="Google Logo"
      />
      Մուտք Google-ի միջոցով
    </div>
  );
}
