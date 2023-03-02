export interface LayoutProps {
  children: any;
}

export interface LayoutState {
  data: [];
  isLoading: boolean;
  results: [];
  insertCode: string;
}

export interface LayoutAction {
  type: "SET" | "SET_LOADING" | "SET_RESULT" | "SET_INSERT_CODE" | "RESET";
  payload: LayoutState;
}
