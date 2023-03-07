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
              startScraping(config);
            });
        });
    } else {
      myToast("custom_error", "There is no data to send");
      return;
    }
  };

  const startScraping = (config: {}) => {
    let newConfig: any = config;
    newConfig["isLongPoll"] = true;
    request
      .get("http://localhost:8000/scrapingJob")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(async () => {
        let errorCheck = false;
        while (true) {
          await request
            .get("http://localhost:8000/searchKeywords", {
              params: newConfig,
            })
            .then((res) => {
              console.log(res);
              setResult(res.data);
              setTotalKeyword(res.data.length);
              let countS = res.data
                ? res.data.filter((element: any) => {
                    return element.status === "s";
                  })
                : 0;
              if (countS.length >= res.data.length) {
                errorCheck = true;
              }
            })
            .catch((err) => {
              errorCheck = true;
              myToast("error");
              console.log(err);
            });
          if (errorCheck) {
            console.log("stop");
            // myToast("error");
            break;
          }
        }
      });
  };
  return { sendCSV };
};
