import { FC } from "react";

type ButtonProps = {
  title: string;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="capitalize  bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      {title}
    </button>
  );
};

export default Button;
