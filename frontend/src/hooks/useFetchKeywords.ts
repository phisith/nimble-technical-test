import toast from "react-hot-toast";
import { useContext } from "react";
import { LayoutContext } from "../components/layouts";
import { useResults } from "./useResults";
import { useBlockUi } from "./useBlockUi";
import { formatSorting, removeEmptyObj } from "../helper/format";
import { SortingState } from "@tanstack/react-table";
import { useModalResult } from "./useModalResult";
import request from "../lil/request";

export const useFetchKeywords = () => {
  const { state } = useContext(LayoutContext);
  const { blockUiSwitcher } = useBlockUi();
  const { setResult, setTotalKeyword } = useResults();
  const { setSelectedDataResult } = useModalResult();

  const fetchKeywords = (filter: {}, sorting?: SortingState) => {
    blockUiSwitcher();
    // setResult([]);
    let config = {
      searchKey: removeEmptyObj({ insertCode: state.insertCode, ...filter }),
      sortingBy: formatSorting(sorting),
    };
    request
      .get("http://localhost:8000/searchKeywords", {
        timeout: 600000,
        params: config,
      })
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        blockUiSwitcher();
        console.log(err);
      })
      .finally(() => {
        request
          .get("http://localhost:8000/totalKeyword", {
            params: config,
          })
          .then((res) => {
            setTotalKeyword(res.data);
          })
          .catch((err) => {
            toast.error("Something went wrong!");
            blockUiSwitcher();
            console.log(err);
          })
          .finally(() => {
            blockUiSwitcher();
          });
      });
  };

  const fetchKeywordFull = (idx: number | string | any) => {
    blockUiSwitcher();
    request
      .get("http://localhost:8000/searchKeywordFull", {
        params: { idx: state.results[idx]["id"] },
      })
      .then((res) => {
        setSelectedDataResult(res.data);
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        blockUiSwitcher();
        console.log(err);
      })
      .finally(() => {
        blockUiSwitcher();
      });
  };

  const fetchMoreKeywords = (
    filter: {},
    sorting?: SortingState,
    skip?: number
  ) => {
    blockUiSwitcher();
    let config = {
      searchKey: removeEmptyObj({ insertCode: state.insertCode, ...filter }),
      sortingBy: formatSorting(sorting),
      skip: skip,
    };
    request
      .get("http://localhost:8000/searchKeywords", {
        params: config,
      })
      .then((res) => {
        let newResult = state.results.concat(res.data);
        setResult(newResult);
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        blockUiSwitcher();
        console.log(err);
      })
      .finally(() => {
        blockUiSwitcher();
      });
  };
  return { fetchKeywords, fetchKeywordFull, fetchMoreKeywords };
};
