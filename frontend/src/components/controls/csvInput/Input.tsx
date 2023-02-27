import {CSVInputProps} from "./type";

const CSVInput = (props: CSVInputProps) => {
    return (
        <>
            <input
                type={"file"}
                accept={"text/csv"}
                className={
                    "file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-bold file:bg-violet-200 " +
                    "file:text-secondary hover:file:bg-violet-100 file:cursor-pointer focus:outline-none"
                }
                onChange={(e) => props?.onValueChange(e)}
            />
        </>
    );
};
export default CSVInput;
