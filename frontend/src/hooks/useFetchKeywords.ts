import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { LayoutContext } from "../components/layouts";
import { useResults } from "./useResults";
import { useBlockUi } from "./useBlockUi";
import { formatSorting, removeEmptyObj } from "../helper/format";
import { SortingState } from "@tanstack/react-table";
import { useModalResult } from "./useModalResult";

export const useFetchKeywords = () => {
  const { state } = useContext(LayoutContext);
  const { blockUiSwitcher } = useBlockUi();
  const { setResult } = useResults();
  const { setSelectedDataResult } = useModalResult();

  const fetchKeywords = (filter: {}, sorting?: SortingState) => {
    blockUiSwitcher();
    let config = {
      searchKey: removeEmptyObj({ insertCode: state.insertCode, ...filter }),
      sortingBy: formatSorting(sorting),
    };
    axios
      .get("http://localhost:8000/searchKeywords", {
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
        blockUiSwitcher();
      });
  };

  const fetchKeywordFull = (idx: number | string | any) => {
    blockUiSwitcher();
    axios
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
  return { fetchKeywords, fetchKeywordFull };
};
