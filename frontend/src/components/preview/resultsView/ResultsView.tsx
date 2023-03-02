import TableUltimate from "../../tables/tableUltimate/Table";
import { ResultViewProps } from "./prop";

const ResultsView = (props: ResultViewProps) => {
  return (
    <>
      <div className={"flex flex-col gap-2 h-[75.5vh]"}>
        <label className={"text-xl font-bold"}>{props?.title}</label>
        <TableUltimate />
      </div>
    </>
  );
};
export default ResultsView;
