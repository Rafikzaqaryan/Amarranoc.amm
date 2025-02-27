import { FC, ChangeEvent } from "react";

interface InputProps {
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const Input: FC<InputProps> = ({
  type = "text",
  onChange,
  placeholder = "",
  className = "",
  ...rest
}) => {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={`border border-gray-300 rounded-md px-3 py-2 outline-none ${className}`}
      {...rest}
    />
  );
};

export default Input;
