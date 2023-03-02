import { useContext } from "react";
import { LayoutContext } from "../components/layouts";

export const useResults = () => {
  const layoutContext = useContext(LayoutContext);
  const setResult = (data: []) => {
    layoutContext.dispatch({
      type: "SET_RESULT",
      payload: { results: data },
    });
  };

  const setTotalKeyword = (total: number) => {
    layoutContext.dispatch({
      type: "SET_TOTAL_KEYWORD",
      payload: { totalKeyword: total },
    });
  };

  const resetAll = () => {
    layoutContext.dispatch({
      type: "RESET",
      payload: {},
    });
  };

  return { setResult, resetAll, setTotalKeyword };
};
