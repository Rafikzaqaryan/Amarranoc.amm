import { useState, useEffect } from "react";

interface Offer {
  img: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
}

export default function OferImgs({ offer }: { offer: Offer | null }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!offer)
    return <p className="text-center text-gray-500">No images available</p>;

  return (
    <div className="flex gap-4  [@media(max-width:1200px)]:flex-col">
      <div>
        <img
          src={offer.img}
          alt="Main Offer Image"
          className="w-[53.9vw] h-[600px] rounded-2xl object-cover  [@media(max-width:1200px)]:w-[88vw]  [@media(max-width:1200px)]:h-[264px]"
        />
      </div>

      <div className="grid grid-cols-2 gap-3  [@media(max-width:1200px)]:flex">
        <img
          src={offer.img2}
          className="w-[250px] h-[294px] rounded-2xl object-cover [@media(max-width:1200px)]:w-[28.3vw]  [@media(max-width:1200px)]:h-[128px]  [@media(max-width:460px)]:h-[100px]"
        />
        <img
          src={offer.img3}
          className="w-[250px] h-[294px] rounded-2xl object-cover [@media(max-width:1200px)]:w-[28.3vw]  [@media(max-width:1200px)]:h-[128px]  [@media(max-width:460px)]:h-[100px]"
        />
        <img
          src={offer.img4}
          className="w-[250px] h-[294px] rounded-2xl object-cover [@media(max-width:1200px)]:w-[28.3vw]  [@media(max-width:1200px)]:h-[128px]  [@media(max-width:460px)]:h-[100px] "
        />
        <img
          src={offer.img5}
          className="w-[250px] h-[294px] rounded-2xl object-cover [@media(max-width:1200px)]:hidden"
        />
      </div>
    </div>
  );
}
