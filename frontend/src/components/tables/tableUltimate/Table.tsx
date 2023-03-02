import { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
} from "@tanstack/react-table";
import { ResultType } from "./type";
import { LayoutContext } from "../../layouts";
import Button from "../../button";
import ColFilter from "../../controls/colFilter/Filter";
import { useFetchKeywords } from "../../../hooks/useFetchKeywords";
const TableUltimate = () => {
  const { state } = useContext(LayoutContext);
  const { fetchKeywords } = useFetchKeywords();
  const columns = useMemo<ColumnDef<ResultType | {}>[]>(
    () => [
      { accessorKey: "keyword", header: "Keyword" },
      { accessorKey: "adWords", header: "Total AdWord" },
      { accessorKey: "totalLink", header: "Total Link" },
      {
        accessorKey: "result",
        header: "Result",
        cell: (info) => (
          <>{Number(info.getValue()).toLocaleString("en-US") || 0}</>
        ),
      },
      { accessorKey: "resultTime", header: "Result time" },
    ],
    []
  );
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filter, setFilter] = useState<ResultType | any | string>({
    keyword: "",
    adWords: "",
    totalLink: "",
    result: "",
    resultTime: "",
  });

  useEffect(() => {
    state.data.length > 0 && fetchKeywords(filter, sorting);
  }, [sorting]);

  const onSorting = (e: any) => {
    setSorting(e);
  };

  const table = useReactTable({
    data: state.results,
    columns,
    state: {
      sorting,
    },
    onSortingChange: onSorting,
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
    manualFiltering: true,
  });

  const onFilterKeyword = () => {
    fetchKeywords(filter, sorting);
  };

  return (
    <>
      <div className={"flex justify-between items-center"}>
        <p className={"text-md font-bold"}>Total: {state.data.length}</p>
        <Button title={"Search"} action={() => onFilterKeyword()} />
      </div>
      <div className={"bg-white shadow rounded overflow-auto"}>
        <table className={"text-left w-full h-full"}>
          <thead
            className={"sticky top-0 uppercase bg-gray-100 text-sm font-bold"}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                <th></th>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      scope={"col"}
                      className={"px-6 py-3 whitespace-nowrap"}
                    >
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none"
                                : "",
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {{
                              asc: " 🔼",
                              desc: " 🔽",
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                          {header.column.getCanFilter() ? (
                            <>
                              <ColFilter
                                value={filter[header.column.id]}
                                onValueChange={(
                                  e: ChangeEvent<HTMLInputElement>
                                ) => {
                                  setFilter({
                                    ...filter,
                                    [header.column.id]: e.target.value,
                                  });
                                }}
                              />
                            </>
                          ) : null}
                        </>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody className={"text-gray-600 text-sm"}>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className={"border-b"}>
                  <td className={"text-center px-6 py-4"}>
                    {Number(row.id) + 1}
                  </td>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        className={"px-6 py-4 whitespace-nowrap"}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TableUltimate;
