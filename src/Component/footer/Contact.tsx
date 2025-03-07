import { CiLocationOn } from "react-icons/ci";

export default function Contact() {
  return (
    <div className="w-full h-auto  bg-[#101623]">
      <div className="text-white text-center text-[20px] md:text-[30px] font-bold">
        Կոնտակտներ
      </div>
      <div className="flex flex-wrap justify-center  pt-[30px] gap-[40px] md:gap-[70px] text-white text-[12px] md:text-[13px]">
        <div className="flex items-center gap-2">
          <img src="https://amaranoc.am/images/social/phone.svg" alt="Phone" />
          <p>041-611-611/044-611-611</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="https://amaranoc.am/images/social/mail.svg" alt="Mail" />
          <p>ADDRESS.AMARANOC@GMAIL.COM</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://amaranoc.am/images/social/instagram.svg"
            alt="Instagram"
          />
          <p>AMARANOC.AM</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://amaranoc.am/images/social/facebook.svg"
            alt="Facebook"
          />
          <p>AMARANOC.AM</p>
        </div>
        <div className="flex items-center gap-2">
          <CiLocationOn />
          <p>ԹՈՒՄԱՆՅԱՆ 5</p>
        </div>
      </div>
      <div className="text-white text-center text-[12px] md:text-[13px] pt-[30px]">
        Գաղտնիության քաղաքականություն
      </div>

      <div className="pt-[30px]  hidden sm:block">
        <img
          src="https://amaranoc.am/_next/image?url=%2Fimages%2Ffooter%2Ffooter-background.png&w=1920&q=75"
          className="w-full h-[160px] "
        />
      </div>
    </div>
  );
}
