import { InputWithLabelNormalProps } from "./type";
import React from "react";

const InputWithLabelNormal = (props: InputWithLabelNormalProps) => {
  return (
    <>
      <div>
        <label className={"block text-sm font-medium text-gray-700"}>
          {props.title}
        </label>
        <input
          type={props?.type ? props.type : "text"}
          className={`mt-1 relative w-full border border-gray-300 rounded text-sm focus:z-10 focus:border-primary focus:outline-none focus:ring-primary`}
          disabled={props.disable}
          value={props.value}
        />
      </div>
    </>
  );
};
export default InputWithLabelNormal;
