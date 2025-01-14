import { ChangeEventHandler, FC } from "react";

export interface InputProps {
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  classNames?: string;
}

const Input: FC<InputProps> = ({
  classNames,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      placeholder={placeholder}
      className={`bg-blue-950 inline-block p-2 ${classNames}`}
      type="text"
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Input;
