export interface LayoutProps {
  children: any;
}

export interface LayoutState {
  data: [{}];
}

export interface LayoutAction {
  type: "SET";
  payload: LayoutState;
}
