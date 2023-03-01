import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { LayoutContext } from "../components/layouts";
import { useResults } from "./useResults";
import { useBlockUi } from "./useBlockUi";
import { removeEmptyObj } from "../helper/format";

export const useFetchKeywords = () => {
  const { state } = useContext(LayoutContext);
  const { blockUiSwitcher } = useBlockUi();
  const { setResult } = useResults();

  const fetchKeywords = (filter: {}, sorting?: []) => {
    blockUiSwitcher();
    let config = { insertCode: state.insertCode, ...filter };
    axios
      .get("http://localhost:8000/searchKeywords", {
        params: removeEmptyObj(config),
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
  return { fetchKeywords };
};
