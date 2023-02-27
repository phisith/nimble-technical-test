import { ChangeEvent } from "react";
import toast from "react-hot-toast";
import Papa from "papaparse";

export const parseCSVToJson = (
  e: ChangeEvent<HTMLInputElement>,
  setFunction: any
) => {
  const file = e.target.files;
  if (file && file.length > 1) {
    toast.error("This upload only one file");
    return;
  }

  if (file) {
    Papa.parse(file[0], {
      header: true,
      skipEmptyLines: true,
      worker: true,
      complete(results) {
        setFunction(results.data);
      },
    });
  }
};
