import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useVerify = () => {
  const navigation = useNavigate();
  const verify = () => {
    axios
      .get("http://localhost:8000/simple-verify")
      .then((res) => console.log(res))
      .catch((err) => {
        toast.error("Please login again");
        navigation("/");
      });
  };
  return { verify };
};
