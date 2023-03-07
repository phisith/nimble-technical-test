import { useContext } from "react";
import { LayoutContext } from "../components/layouts";
import { randomNumber } from "../helper/randomNumber";
import { getTodayFull } from "../helper/moment";
import { useBlockUi } from "./useBlockUi";
import { useResults } from "./useResults";
import { formatSorting } from "../helper/format";
import request from "../lil/request";
import myToast from "../lil/toast";

export const useSendCSV = () => {
  const { state, dispatch } = useContext(LayoutContext);
  const { blockUiSwitcher } = useBlockUi();
  const { setResult, setTotalKeyword } = useResults();
  let randomNum = randomNumber();
  let todayFull = getTodayFull();
  let insertCode = randomNum + todayFull;

  const setInsertCode = (code: string) => {
    dispatch({ type: "SET_INSERT_CODE", payload: { insertCode: code } });
  };

  const sendCSV = () => {
    if (state.data && state.data.length > 0) {
      blockUiSwitcher();
      request
        .post("http://localhost:8000/import_csv", {
          data: state.data,
          insertCode: insertCode,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          myToast("error");
          blockUiSwitcher();
          return;
        })
        .finally(() => {
          let config = {
            searchKey: { insertCode: insertCode },
            sortingBy: formatSorting(),
          };

          request
            .get("http://localhost:8000/searchKeywords", {
              params: config,
            })
            .then((res) => {
              setResult(res.data);
              setTotalKeyword(res.data.length);
            })
            .catch((err) => {
              myToast("error");
              blockUiSwitcher();
              console.log(err);
            })
            .finally(() => {
              setInsertCode(insertCode);
              blockUiSwitcher();
            });
        });
    } else {
      myToast("custom_error", "There is no data to send");
      return;
    }
  };
  return { sendCSV };
};
