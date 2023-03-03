import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  Row,
} from "@tanstack/react-table";
import { ResultType, TableUltimateProps } from "./type";
import { LayoutContext } from "../../layouts";
import Button from "../../button";
import ColFilter from "../../controls/colFilter/Filter";
import { useFetchKeywords } from "../../../hooks/useFetchKeywords";
import ModalResult from "../../modals/modalResult/Modal";
import { useModalResult } from "../../../hooks/useModalResult";
import { useVirtual } from "react-virtual";
const TableUltimate = () => {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const { state } = useContext(LayoutContext);
  const { modalSwitcher, setSelectedIndex } = useModalResult();
  const { fetchKeywords, fetchMoreKeywords } = useFetchKeywords();
  const columns = useMemo<ColumnDef<ResultType | any>[]>(
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
  const [skip, setSkip] = useState(0);

  // useEffect(() => {
  //   setSkip(0);
  //   if (!props.fetchOnStart) {
  //     state.data.length > 0 && fetchKeywords(filter, sorting);
  //   } else {
  //     fetchKeywords(filter, sorting);
  //   }
  //   countRef.current++;
  // }, [sorting]);

  useEffect(() => {
    onFilterKeyword();
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

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 10,
  });
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;
  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
      : 0;

  const onFilterKeyword = () => {
    setSkip(0);
    fetchKeywords(filter, sorting);
  };

  const calFetchMorePage = () => {
    let nextSkip = skip + 100;
    fetchMoreKeywords(filter, sorting, nextSkip);
    setSkip(nextSkip);
  };

  const fetchMorePage = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        // console.log(state.totalKeyword > state.results.length);
        if (
          scrollHeight - scrollTop - clientHeight < 300 &&
          state.totalKeyword > state.results.length &&
          !state.isLoading
        ) {
          console.log(state.totalKeyword > state.results.length);
          calFetchMorePage();
        }
      }
    },
    [calFetchMorePage]
  );

  return (
    <>
      <div className={"flex justify-between items-center"}>
        <p className={"text-md font-bold"}>Total: {state.totalKeyword}</p>
        <Button title={"Search"} action={() => onFilterKeyword()} />
      </div>
      <div
        className={"bg-white shadow rounded overflow-auto"}
        onScroll={(e) => fetchMorePage(e.target as HTMLDivElement)}
        ref={tableContainerRef}
      >
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
            {paddingTop > 0 && (
              <tr>
                <td style={{ height: `${paddingTop}px` }} />
              </tr>
            )}
            {virtualRows.map((virtualRow) => {
              const row = rows[virtualRow.index] as Row<ResultType>;
              return (
                <tr
                  key={row.id}
                  className={"border-b cursor-pointer hover:bg-gray-50"}
                  onClick={() => {
                    setSelectedIndex(row.id);
                    modalSwitcher();
                  }}
                >
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
            {paddingBottom > 0 && (
              <tr>
                <td style={{ height: `${paddingBottom}px` }} />
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ModalResult />
    </>
  );
};
export default TableUltimate;
