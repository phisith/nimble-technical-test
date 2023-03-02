export interface LayoutProps {
  children: any;
}

export interface LayoutState {
  data: [];
  isLoading: boolean;
  results: [];
  insertCode: string;
  isOpenModalResult: boolean;
  selectedResultIdx: number | string;
  selectedDataResult: {} | any;
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
    | "SET_SELECTED_RESULT";
  payload: LayoutState;
}
