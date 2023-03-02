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

  const resetAll = () => {
    layoutContext.dispatch({
      type: "RESET",
      payload: {},
    });
  };

  return { setResult, resetAll };
};
