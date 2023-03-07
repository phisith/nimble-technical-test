import React, { Fragment, useContext, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import InputWithLabelNormal from "../../controls/inputs/inputWithLabelNormal/Input";
import Button from "../../button";
import { LayoutContext } from "../../layouts";
import { useModalResult } from "../../../hooks/useModalResult";
import { useFetchKeywords } from "../../../hooks/useFetchKeywords";
import { formatSafeHtml } from "../../../helper/format";

const ModalResult = () => {
  const { modalSwitcher, resultRotation } = useModalResult();
  const { fetchKeywordFull } = useFetchKeywords();
  const { state } = useContext(LayoutContext);

  useEffect(() => {
    if (state.selectedResultIdx !== "") {
      fetchKeywordFull(state.selectedResultIdx);
    }
  }, [state.selectedResultIdx]);

  return (
    <Transition.Root show={state.isOpenModalResult} as={Fragment}>
      <Dialog
        onClose={() => {
          modalSwitcher();
        }}
        className={"relative z-10"}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={"fixed inset-0 bg-black/30 transition-opacity"} />
        </Transition.Child>

        <div
          className={"fixed inset-0 flex flex-col justify-center items-center"}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel
              className={"relative w-full max-w-4xl rounded bg-white"}
            >
              <div className={"flex flex-col gap-2 p-6 pb-0"}>
                <Dialog.Title className={"text-xl font-bold"}>
                  Result
                </Dialog.Title>
                <Dialog.Description className={"text-sm text-gray-600"}>
                  of{" "}
                  <span
                    className={
                      "text-lg text-black font-bold px-2 py-1 bg-primary text-white rounded shadow"
                    }
                  >
                    {state.selectedDataResult?.keyword}
                  </span>
                </Dialog.Description>
                <div className={"grid grid-cols-2 gap-6 p-6 pt-4"}>
                  <InputWithLabelNormal
                    title={"Total AdWord"}
                    value={state.selectedDataResult?.adWords || 0}
                    disable={true}
                  />
                  <InputWithLabelNormal
                    title={"Total Link"}
                    value={state.selectedDataResult?.totalLink || 0}
                    disable={true}
                  />
                  <InputWithLabelNormal
                    title={"Result"}
                    value={
                      Number(state.selectedDataResult?.result).toLocaleString(
                        "en-US"
                      ) || 0
                    }
                    disable={true}
                  />
                  <InputWithLabelNormal
                    title={"Result time (Second)"}
                    value={state.selectedDataResult?.resultTime || 0}
                    disable={true}
                  />
                  <div className={"col-span-2"}>
                    <label
                      className={"block text-sm font-medium text-gray-700"}
                    >
                      Html Code
                    </label>
                    <div
                      className={
                        "h-[30vh] mt-1 overflow-auto border rounded shadow"
                      }
                    >
                      <div className={"p-3 relative"}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: formatSafeHtml(
                              state.selectedDataResult?.htmlCode
                            ),
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  "flex gap-2 px-2 py-3 border-t rounded-b bg-gray-100 justify-end"
                }
              >
                <Button
                  title={"Close"}
                  color={"clear"}
                  action={() => {
                    modalSwitcher();
                  }}
                />
                <Button
                  type={"button"}
                  title={"⬅️ Back"}
                  action={() => resultRotation("back")}
                />
                <Button
                  type={"button"}
                  title={"Next ➡️"}
                  action={() => resultRotation("next")}
                />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalResult;
