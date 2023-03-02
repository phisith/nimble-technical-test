import ResultsView from "../../components/preview/resultsView/ResultsView";

const History = () => {
  return (
    <>
      <div className={"mx-auto container w-full"}>
        <ResultsView title={"History"} fetchOnStart={true} />
      </div>
    </>
  );
};
export default History;
