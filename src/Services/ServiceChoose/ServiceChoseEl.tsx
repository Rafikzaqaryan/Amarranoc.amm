import { FC } from "react";

interface ServiceChoseElProps {
  img: string;
  text: string;
  className?: string;
}

const ServiceChoseEl: FC<ServiceChoseElProps> = ({ img, text }) => {
  return (
    <div
      className={`flex cursor-pointer flex-col justify-center items-center gap-2 `}
    >
      <img src={img} alt={text} className="w-[40px] h-[40px] object-contain" />
      <p className="text-[16px] text-center">{text}</p>
    </div>
  );
};

export default ServiceChoseEl;
