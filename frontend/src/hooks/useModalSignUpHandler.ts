import { useContext } from "react";
import { ModalSignUpContext } from "../components/modals/modalSignUp";
import { useNavigate } from "react-router-dom";
import request from "../lil/request";
import myToast from "../lil/toast";

export const useModalSignUpHandler = () => {
  const modalSignUpContext = useContext(ModalSignUpContext);
  const navigate = useNavigate();
  const modalSignUpSwitcher = () => {
    modalSignUpContext.dispatch({
      type: "SET",
      payload: { isOpen: !modalSignUpContext.state.isOpen },
    });
  };

  const createUser = async (userInfo: any) => {
    myToast("promise")
      .promise(
        request.post("http://localhost:8000/createUser", {
          userInfo,
        }),
        {
          loading: "Loading...",
          success: "User created",
          error: "Something went wrong",
        }
      )
      .then((res: any) => {
        modalSignUpSwitcher();
        return res;
      });
  };

  const login = (userInfo: any) => {
    myToast("promise")
      .promise(
        request.get("http://localhost:8000/login", {
          params: { userInfo: userInfo },
        }),
        {
          loading: "Loading...",
          success: "Welcome!",
          error: "Username or password might be wrong",
        }
      )
      .then((res: { data: { key: string } }) => {
        sessionStorage.setItem("key", res.data.key);
        request.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${sessionStorage.getItem("key")}`;
        navigate("/home");
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return { modalSignUpSwitcher, createUser, login };
};
