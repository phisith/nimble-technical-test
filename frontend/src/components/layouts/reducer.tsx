import { LayoutAction, LayoutState } from "./type";
import React, { createContext, useReducer } from "react";

const initialState: LayoutState = {
  data: [{}],
  isLoading: false,
  results: [],
  insertCode: "",
};

export const LayoutReducer = (state: LayoutState, action: LayoutAction) => {
  switch (action.type) {
    case "SET":
      state.data = action.payload.data;
      return { ...state };
    case "SET_LOADING":
      state.isLoading = action.payload.isLoading;
      return { ...state };
    case "SET_RESULT":
      state.results = action.payload.results;
      return { ...state };
    case "SET_INSERT_CODE":
      state.insertCode = action.payload.insertCode;
      return { ...state };
    default:
      return state;
  }
};

export const LayoutContext = createContext<{
  state: LayoutState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const LayoutProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(LayoutReducer, initialState);
  return (
    <LayoutContext.Provider value={{ state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};
