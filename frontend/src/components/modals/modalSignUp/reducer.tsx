import { ModalSignUpAction, ModalSignUpState } from "./type";
import React, { createContext, useReducer } from "react";

const initialState: ModalSignUpState = {
  isOpen: false,
};

export const modalSignUpReducer = (
  state: ModalSignUpState,
  action: ModalSignUpAction
) => {
  switch (action.type) {
    case "SET":
      state.isOpen = action.payload.isOpen;
      return { ...state };
    default:
      return state;
  }
};

export const ModalSignUpContext = createContext<{
  state: ModalSignUpState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => {},
});
export const ModalSignUpProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(modalSignUpReducer, initialState);
  return (
    <ModalSignUpContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalSignUpContext.Provider>
  );
};
