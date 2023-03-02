export interface LayoutProps {
  children: any;
}

export interface LayoutState {
  data: [] | [{}];
  isLoading: boolean;
  results: any | [];
  insertCode: string;
  isOpenModalResult: boolean;
  selectedResultIdx: number | string;
  selectedDataResult: {} | any;
  totalKeyword: number;
}

export interface LayoutAction {
  type:
    | "SET"
    | "SET_LOADING"
    | "SET_RESULT"
    | "SET_INSERT_CODE"
    | "RESET"
    | "SET_MODAL"
    | "SET_SELECTED_INDEX"
    | "SET_SELECTED_RESULT"
    | "SET_TOTAL_KEYWORD";
  payload: LayoutState;
}
