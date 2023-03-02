import { useContext } from "react";
import { LayoutContext } from "../components/layouts";
import toast from "react-hot-toast";

export const useModalResult = () => {
  const layoutContext = useContext(LayoutContext);

  const modalSwitcher = () => {
    layoutContext.dispatch({
      type: "SET_MODAL",
      payload: { isOpenModalResult: !layoutContext.state.isOpenModalResult },
    });
  };

  const setSelectedIndex = (idx: number | string) => {
    layoutContext.dispatch({
      type: "SET_SELECTED_INDEX",
      payload: { selectedResultIdx: idx },
    });
  };

  const setSelectedDataResult = (data: any) => {
    layoutContext.dispatch({
      type: "SET_SELECTED_RESULT",
      payload: { selectedDataResult: data },
    });
  };

  const resultRotation = (direction: "next" | "back") => {
    if (direction === "next") {
      let nextIdx = Number(layoutContext.state.selectedResultIdx) + 1;
      if (nextIdx >= layoutContext.state.results.length) {
        toast.error("No more result to view, Please get search more");
        return;
      }
      setSelectedIndex(nextIdx);
    } else {
      let nextIdx = Number(layoutContext.state.selectedResultIdx) - 1;

      if (nextIdx === -1) {
        toast.error("No more result to view, Please get search more");
        return;
      }
      setSelectedIndex(nextIdx);
    }
  };
  return {
    modalSwitcher,
    setSelectedIndex,
    setSelectedDataResult,
    resultRotation,
  };
};
