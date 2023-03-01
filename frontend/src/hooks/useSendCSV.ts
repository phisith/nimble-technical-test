import { useContext } from "react";
import { LayoutContext } from "../components/layouts";
import toast from "react-hot-toast";
import axios from "axios";
import { randomNumber } from "../helper/randomNumber";
import { getTodayFull } from "../helper/moment";
import { useBlockUi } from "./useBlockUi";
import { useResults } from "./useResults";

export const useSendCSV = () => {
  const { state } = useContext(LayoutContext);
  const { blockUiSwitcher } = useBlockUi();
  const { setResult } = useResults();
  let randomNum = randomNumber();
  let todayFull = getTodayFull();
  let insertCode = randomNum + todayFull;

  const sendCSV = () => {
    blockUiSwitcher();
    if (state.data && state.data.length > 0) {
      axios
        .post("http://localhost:8000/import_csv", {
          data: state.data,
          insertCode: insertCode,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong!");
          blockUiSwitcher();
          return;
        })
        .finally(() => {
          axios
            .get("http://localhost:8000/searchKeywords", {
              params: { insertCode: insertCode },
            })
            .then((res) => {
              setResult(res.data);
            })
            .catch((err) => {
              toast.error("Something went wrong!");
              blockUiSwitcher();
              console.log(err);
            })
            .finally(() => {
              blockUiSwitcher();
            });
        });
    } else {
      toast.error("There is no data to send");
      return;
    }
  };
  return { sendCSV };
};
