export interface ModalSignUpProps {}

export interface ModalSignUpState {
  isOpen: boolean;
}

export interface ModalSignUpAction {
  type: "SET";
  payload: ModalSignUpState;
}
