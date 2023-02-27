import ImportCSV from "../../components/controls/importCSV/ImportCSV";
import PreviewKeywords from "../../components/preview/previewKeywords/PreviewKeywords";

const Home = () => {
  return (
    <>
      <div className={"mx-auto container grid grid-cols-3 gap-6"}>
        <div className={"flex flex-col gap-2"}>
          <ImportCSV />
          <PreviewKeywords />
        </div>
      </div>
    </>
  );
};
export default Home;
