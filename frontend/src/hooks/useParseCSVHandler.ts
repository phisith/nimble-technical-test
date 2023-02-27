import { useContext } from "react";
import { LayoutContext } from "../components/layouts";

export const useParseCSVHandler = () => {
  const layoutContext = useContext(LayoutContext);
  const setData = (data: unknown[] | null) => {
    layoutContext.dispatch({ type: "SET", payload: { data: data } });
  };

  return { setData };
};
