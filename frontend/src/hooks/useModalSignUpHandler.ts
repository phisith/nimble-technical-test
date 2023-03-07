import { useContext } from "react";
import { ModalSignUpContext } from "../components/modals/modalSignUp";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import request from "../lil/request";

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
    toast
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
      .then((res) => {
        return res;
      });
  };

  const login = (userInfo: any) => {
    toast
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
      .then((res) => {
        sessionStorage.setItem("key", res.data.key);
        request.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${sessionStorage.getItem("key")}`;
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { modalSignUpSwitcher, createUser, login };
};
