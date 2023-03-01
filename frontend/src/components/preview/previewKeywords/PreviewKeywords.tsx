import TableSimple from "../../tables/tableSimple/Table";

const PreviewKeywords = () => {
  return (
    <>
      <div
        className={"flex flex-col gap-2 p-6 bg-white rounded shadow h-[55vh]"}
      >
        <label className={"text-lg font-bold"}>Preview</label>
        <TableSimple />
      </div>
    </>
  );
};
export default PreviewKeywords;
