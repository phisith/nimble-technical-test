import { ChangeEvent } from "react";
import Papa from "papaparse";
import myToast from "../lil/toast";

export const parseCSVToJson = (
  e: ChangeEvent<HTMLInputElement>,
  setFunction: any
) => {
  const file = e.target.files;
  if (file && file.length > 1) {
    myToast("custom_error", "This upload only one file");
    return;
  }

  if (file) {
    Papa.parse(file[0], {
      header: true,
      skipEmptyLines: true,
      worker: true,
      complete(results) {
        if (results.data.length > 100) {
          myToast("custom_error", "Keywords is more than 100");
          return;
        }
        setFunction(results.data);
      },
    });
  }
};
