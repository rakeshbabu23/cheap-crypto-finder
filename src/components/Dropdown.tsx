import { FC, ChangeEvent } from "react";

type DropdownProps = {
  options: string[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Dropdown: FC<DropdownProps> = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-32 bg-blue-950 text-white text-xl p-2 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
