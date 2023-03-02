import React, { ChangeEvent } from "react";
import { ColFilterProp } from "./prop";

const ColFilter = (props: ColFilterProp) => {
  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    return props.onValueChange(e);
  };
  return (
    <>
      <input
        type="text"
        value={props.value}
        className={`mt-1 relative w-full border border-gray-300 rounded text-sm font-normal focus:z-10 focus:border-primary focus:outline-none focus:ring-primary`}
        onChange={(e) => onValueChange(e)}
      />
    </>
  );
};
export default ColFilter;
