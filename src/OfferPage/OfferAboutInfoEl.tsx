interface OfferAboutInfoElProps {
  img: string;
  text: string;
}

export default function OfferAboutInfoEl({ img, text }: OfferAboutInfoElProps) {
  if (!img || !text) return null;

  return (
    <div className="flex flex-col items-center text-center gap-2">
      <img src={img} alt={text} className="w-[40px] h-[40px] object-contain" />
      <p className="text-sm font-medium text-gray-700">{text}</p>
    </div>
  );
}
