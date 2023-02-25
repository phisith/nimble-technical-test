import { Dialog, Transition } from "@headlessui/react";
import Button from "../../button";
import { ModalSignUpProps } from "./type";
import { Fragment, useContext } from "react";
import InputWithLabel from "../../controls/inputs/inputWithLabel/Input";
import { ModalSignUpContext, ModalSignUpProvider } from "./reducer";
import { useModalSignUpHandler } from "../../../hooks/useModalSignUpHandler";

const ModalSignUp = () => {
  const { state } = useContext(ModalSignUpContext);
  const { modalSignUpSwitcher } = useModalSignUpHandler();

  return (
    <Transition.Root show={state.isOpen} as={Fragment}>
      <Dialog onClose={() => console.log("close")} className={"relative z-10"}>
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
              className={"relative w-full max-w-md rounded bg-white"}
            >
              <div className={"flex flex-col gap-4 p-6"}>
                <div className={"flex flex-col gap-2"}>
                  <Dialog.Title className={"text-xl font-bold"}>
                    SignUp
                  </Dialog.Title>
                  <Dialog.Description className={"text-sm text-gray-600"}>
                    Please fill up all fields
                  </Dialog.Description>
                </div>
                <form className={"grid grid-cols-2 gap-6"}>
                  <InputWithLabel title={"First name"} />
                  <InputWithLabel title={"Last name"} />
                  <InputWithLabel title={"Username"} />
                  <InputWithLabel title={"Password"} type={"password"} />
                </form>
              </div>
              <div
                className={
                  "flex gap-2 px-2 py-3 border-t rounded-b bg-gray-100 justify-end"
                }
              >
                <Button
                  title={"Close"}
                  color={"clear"}
                  action={() => modalSignUpSwitcher()}
                />
                <Button title={"Sign up"} />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export { ModalSignUp, ModalSignUpContext, ModalSignUpProvider };
