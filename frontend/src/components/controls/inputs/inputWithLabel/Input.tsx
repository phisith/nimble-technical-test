import { InputWithLabelProps } from "./type";

const InputWithLabel = (props: InputWithLabelProps) => {
  return (
    <>
      <div>
        <label className={"block text-sm font-medium text-gray-700"}>
          {props.title}
        </label>
        <input
          type={props?.type ? props.type : "text"}
          className={
            "mt-1 relative w-full border border-gray-300 rounded text-sm focus:z-10 focus:border-violet-900 focus:outline-none focus:ring-violet-900"
          }
        />
      </div>
    </>
  );
};

export default InputWithLabel;
