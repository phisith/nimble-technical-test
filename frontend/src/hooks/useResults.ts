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

  return { setResult };
};
