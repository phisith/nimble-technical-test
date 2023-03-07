import toast from "react-hot-toast";

const myToast: any = (
  mode: "success" | "error" | "custom_error" | "promise",
  msg?: string
) => {
  switch (mode) {
    case "success":
      toast.success("msg");
      break;
    case "error":
      toast.error(`Something went wrong! ${msg || ""}`);
      break;
    case "custom_error":
      toast.error(`${msg}`);
      break;
    case "promise":
      return toast;
    default:
      toast.error("Please give mode for toast");
      return;
  }
};

export default myToast;
