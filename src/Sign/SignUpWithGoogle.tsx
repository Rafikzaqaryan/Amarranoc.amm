import { auth } from "../Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function SignUpWithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
    });
  }
  return (
    <div
      onClick={googleLogin}
      className="w-[480px] h-[57px] border border-[#fd993a] rounded-[40px] flex justify-center items-center gap-4"
    >
      <img src="	https://amaranoc.am/_next/image?url=%2Fimages%2Fgoogle-logo.png&w=16&q=75" />
      Մուտք Google-ի միջոցով
    </div>
  );
}
