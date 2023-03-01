import PreviewKeywords from "../../components/preview/previewKeywords/PreviewKeywords";
import ImportCSV from "../../components/importCSV/ImportCSV";
import ResultsView from "../../components/preview/resultsView/ResultsView";

const Home = () => {
  return (
    <>
      <div className={"mx-auto container grid grid-cols-3 gap-6"}>
        <div className={"flex flex-col gap-2"}>
          <ImportCSV />
          <PreviewKeywords />
        </div>
        <div className={"col-span-2"}>
          <ResultsView />
        </div>
      </div>
    </>
  );
};
export default Home;
