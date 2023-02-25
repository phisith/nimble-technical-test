import { useContext } from "react";
import { ModalSignUpContext } from "../components/modals/modalSignUp";

export const useModalSignUpHandler = () => {
  const modalSignUpContext = useContext(ModalSignUpContext);
  const modalSignUpSwitcher = () => {
    modalSignUpContext.dispatch({
      type: "SET",
      payload: { isOpen: !modalSignUpContext.state.isOpen },
    });
  };

  return { modalSignUpSwitcher };
};
