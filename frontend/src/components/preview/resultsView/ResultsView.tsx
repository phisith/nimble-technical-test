import TableUltimate from "../../tables/tableUltimate/Table";
import { ResultViewProps } from "./prop";
import { useContext } from "react";
import { LayoutContext } from "../../layouts";

const ResultsView = (props: ResultViewProps) => {
  const { state } = useContext(LayoutContext);
  return (
    <>
      <div className={"flex flex-col gap-2 h-[75.5vh]"}>
        <label className={"text-xl font-bold"}>{props?.title}</label>
        {props?.title === "Review" ? (
          state.results.length > 0 && <TableUltimate />
        ) : (
          <TableUltimate fetchOnStart={props.fetchOnStart} />
        )}
      </div>
    </>
  );
};
export default ResultsView;
