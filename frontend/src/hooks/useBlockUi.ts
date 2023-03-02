import { useContext } from "react";
import { LayoutContext } from "../components/layouts";

export const useBlockUi = () => {
  const layoutContext = useContext(LayoutContext);
  const blockUiSwitcher = () => {
    layoutContext.dispatch({
      type: "SET_LOADING",
      payload: { isLoading: !layoutContext.state.isLoading },
    });
  };

  return { blockUiSwitcher };
};
