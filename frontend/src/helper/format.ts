import { SortingState } from "@tanstack/react-table";

export const removeEmptyObj = (obj: {} | any) => {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];
    const value = obj[key];
    if (value === null || value === undefined || value === "") {
      delete obj[key];
    }
  }
  return obj;
};

export const formatSorting = (sorting?: SortingState | undefined) => {
  let result: any = {};
  if (sorting && sorting.length > 0) {
    if (sorting[0].desc) {
      result[sorting[0]["id"]] = "desc";
    } else {
      result[sorting[0]["id"]] = "asc";
    }
    return result;
  } else {
    return { id: "asc" };
  }
};
