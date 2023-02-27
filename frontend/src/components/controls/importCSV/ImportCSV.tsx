import { useParseCSVHandler } from "../../../hooks/useParseCSVHandler";
import { parseCSVToJson } from "../../../helper/parseCSV-helper";

const ImportCSV = () => {
  const { setData } = useParseCSVHandler();

  return (
    <>
      <div className={"flex flex-col gap-2"}>
        <label className={"text-xl font-bold"}>Import CSV</label>
        <div className={"flex flex-col gap-4 p-6 bg-white shadow rounded"}>
          <input
            type={"file"}
            accept={"text/csv"}
            className={
              "file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-bold file:bg-violet-200 " +
              "file:text-secondary hover:file:bg-violet-100 file:cursor-pointer focus:outline-none"
            }
            onChange={(e) => parseCSVToJson(e, setData)}
          />
        </div>
      </div>
    </>
  );
};
export default ImportCSV;
