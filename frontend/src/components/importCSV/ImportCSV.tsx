import { useParseCSVHandler } from "../../hooks/useParseCSVHandler";
import { parseCSVToJson } from "../../helper/parseCSV-helper";
import CSVInput from "../controls/csvInput/Input";
import { ChangeEvent } from "react";
import Button from "../button";

const ImportCSV = () => {
  const { setData } = useParseCSVHandler();

  return (
    <>
      <div className={"flex flex-col gap-2"}>
        <label className={"text-xl font-bold"}>Import CSV</label>
        <div className={"flex flex-col gap-4 p-6 bg-white shadow rounded"}>
          <CSVInput
            onValueChange={(e: ChangeEvent<HTMLInputElement>) =>
              parseCSVToJson(e, setData)
            }
          />
          <Button title={"Upload"} />
        </div>
      </div>
    </>
  );
};
export default ImportCSV;
