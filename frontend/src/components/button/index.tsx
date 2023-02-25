import { ButtonProps } from "./type";

const setColor = (color?: string) => {
  switch (color) {
    case "primary":
      return "bg-violet-900 hover:bg-violet-700 text-white";
    case "clear":
      return "bg-transparent border border-gray-300 hover:border-gray-600 text-black";
    default:
      return "bg-violet-900 hover:bg-violet-700 text-white";
  }
};
const Button = (props: ButtonProps) => {
  return (
    <>
      <button
        className={`${setColor(props.color)} px-3 py-2 rounded text-sm`}
        onClick={(e) => props.action(e)}
      >
        {props.title}
      </button>
    </>
  );
};
export default Button;
