import { useContext } from "react";
import { ModalSignUpContext } from "../components/modals/modalSignUp";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
        axios.post("http://localhost:8000/createUser", {
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
        axios.get("http://localhost:8000/login", {
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
        navigate("/home");
        axios.defaults.headers.common["Authorization"] = res.data.key;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { modalSignUpSwitcher, createUser, login };
};
