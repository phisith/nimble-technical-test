import TableUltimate from "../../tables/tableUltimate/Table";

const ResultsView = () => {
  return (
    <>
      <div className={"flex flex-col gap-2 h-[76.5vh]"}>
        <label className={"text-xl font-bold"}>Result</label>
        <TableUltimate />
      </div>
    </>
  );
};
export default ResultsView;
