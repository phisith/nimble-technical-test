import { InputWithLabelProps } from "./type";
import React from "react";

const InputWithLabel = (props: InputWithLabelProps) => {
  return (
    <>
      <div>
        <label className={"block text-sm font-medium text-gray-700"}>
          {props.title}
        </label>
        <input
          type={props?.type ? props.type : "text"}
          className={`mt-1 relative w-full border border-gray-300 rounded text-sm focus:z-10 focus:border-primary focus:outline-none focus:ring-primary ${
            props?.error && "border-red-600 ring-red-600"
          }`}
          disabled={props.disable}
          {...props?.form}
        />
        {props.error?.type === "required" && (
          <p
            className={"text-sm text-red-600"}
          >{`${props.title} is required`}</p>
        )}
      </div>
    </>
  );
};

export default InputWithLabel;
