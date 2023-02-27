import { ButtonProps } from "./type";

const setColor = (color?: string, isSelected?: boolean) => {
  switch (color) {
    case "error":
      return "bg-error hover:bg-error/80 text-white";
    case "clear":
      return "bg-transparent border border-gray-300 hover:border-gray-600 text-black";
    case "onNav":
      return `bg-primary hover:bg-primary/80 text-white ${
        isSelected && "bg-secondary/40"
      } hover:bg-secondary/80`;
    default:
      return "bg-primary hover:bg-primary/80 text-white ";
  }
};
const Button = (props: ButtonProps) => {
  return (
    <>
      <button
        key={props?.key}
        type={props?.type ? props.type : "button"}
        className={`${setColor(
          props.color,
          props?.isSelected
        )} px-3 py-2 rounded text-sm`}
        onClick={(e) => (props?.type !== "submit" ? props.action(e) : null)}
      >
        {props.title}
      </button>
    </>
  );
};
export default Button;
