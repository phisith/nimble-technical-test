import { Dialog, Transition } from "@headlessui/react";
import Button from "../../button";
import { Fragment, useContext } from "react";
import InputWithLabel from "../../controls/inputs/inputWithLabel/Input";
import { ModalSignUpContext, ModalSignUpProvider } from "./reducer";
import { useModalSignUpHandler } from "../../../hooks/useModalSignUpHandler";
import { useForm } from "react-hook-form";

const ModalSignUp = () => {
  const { state } = useContext(ModalSignUpContext);
  const { modalSignUpSwitcher } = useModalSignUpHandler();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data: {}) => console.log(data);

  return (
    <Transition.Root show={state.isOpen} as={Fragment}>
      <Dialog
        onClose={() => {
          reset();
          modalSignUpSwitcher();
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
              className={"relative w-full max-w-md rounded bg-white"}
            >
              <div className={"flex flex-col gap-2 p-6 pb-0"}>
                <Dialog.Title className={"text-xl font-bold"}>
                  SignUp
                </Dialog.Title>
                <Dialog.Description className={"text-sm text-gray-600"}>
                  Please fill up all fields
                </Dialog.Description>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={"grid grid-cols-2 gap-6 p-6 pt-4"}>
                  <InputWithLabel
                    title={"First name"}
                    form={{ ...register("firstName", { required: true }) }}
                    error={errors.firstName}
                  />
                  <InputWithLabel
                    title={"Last name"}
                    form={{ ...register("lastName", { required: true }) }}
                    error={errors.lastName}
                  />
                  <InputWithLabel
                    title={"Username"}
                    form={{ ...register("username", { required: true }) }}
                    error={errors.username}
                  />
                  <InputWithLabel
                    title={"Password"}
                    type={"password"}
                    form={{ ...register("password", { required: true }) }}
                    error={errors.password}
                  />
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
                      reset();
                      modalSignUpSwitcher();
                    }}
                  />
                  <Button type={"submit"} title={"Sign up"} />
                </div>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export { ModalSignUp, ModalSignUpContext, ModalSignUpProvider };
