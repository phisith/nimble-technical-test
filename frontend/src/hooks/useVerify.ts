import { useNavigate } from "react-router-dom";
import request from "../lil/request";
import myToast from "../lil/toast";

export const useVerify = () => {
  const navigation = useNavigate();
  const verify = () => {
    request.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${sessionStorage.getItem("key")}`;
    request
      .get("http://localhost:8000/simple-verify")
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
        myToast("custom_error", "Please login again");
        navigation("/");
      });
  };
  return { verify };
};
