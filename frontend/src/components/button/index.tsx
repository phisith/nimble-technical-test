import { ButtonProps } from "./type";

const setColor = (color?: string) => {
  switch (color) {
    case "primary":
      return "bg-violet-900 hover:bg-violet-700";
    case "clear":
      return "bg-transparent border border-gray-300 hover:border-gray-600 text-black";
    default:
      return "bg-violet-900 hover:bg-violet-700";
  }
};
const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${setColor(
        props.color
      )} px-3 py-2 rounded text-sm text-white`}
    >
      {props.title}
    </button>
  );
};
export default Button;
