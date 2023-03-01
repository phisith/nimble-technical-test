export interface LayoutProps {
  children: any;
}

export interface LayoutState {
  data: [{}];
  isLoading: boolean;
  results: [];
}

export interface LayoutAction {
  type: "SET" | "SET_LOADING" | "SET_RESULT";
  payload: LayoutState;
}
