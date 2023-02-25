import Button from "../../components/button";
import { useModalSignUpHandler } from "../../hooks/useModalSignUpHandler";
import { ModalSignUp } from "../../components/modals/modalSignUp";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { modalSignUpSwitcher } = useModalSignUpHandler();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: {}) => {
    navigate("/homePage");
    console.log(data);
  };

  return (
    <>
      <div className={"h-full flex flex-col justify-center items-center"}>
        <div
          className={
            "flex w-full h-full max-w-xs flex-col gap-4 justify-center items-center"
          }
        >
          <div className={"flex flex-col justify-center text-center"}>
            <img
              alt={"nimble-logo"}
              src={"/nimble-symbol.png"}
              className={"mx-auto h-12 w-auto"}
            />
            <h1 className={"mt-6 text-3xl font-bold tracking-tight"}>
              Nimble technical test
            </h1>
            <p className={"mt-2 text-small text-gray-600"}>
              Create by{" "}
              <span className={"text-violet-900"}> Phisith Lengsavath</span>
            </p>
          </div>
          <form
            className={"flex w-full flex-col gap-6"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={"flex flex-col gap-4 text-center"}>
              <div className={"shadow rounded"}>
                <input
                  type={"text"}
                  className={`px-3 py-2 relative w-full border border-gray-300 rounded-t rounded-b-none text-sm focus:z-10 focus:border-violet-900 focus:outline-none focus:ring-violet-900 ${
                    errors?.username && "border-red-600 ring-red-600"
                  }`}
                  placeholder={"Username"}
                  {...register("username", { required: true })}
                />
                <input
                  type={"password"}
                  className={`px-3 py-2 relative w-full border border-gray-300 rounded-b rounded-t-none text-sm focus:z-10 focus:border-violet-900 focus:outline-none focus:ring-violet-900 ${
                    errors?.password && "border-red-600 ring-red-600"
                  }`}
                  placeholder={"Password"}
                  {...register("password", { required: true })}
                />
              </div>
              {errors.username?.type === "required" && (
                <p className={"text-sm text-red-600"}>username is required</p>
              )}
              {errors.password?.type === "required" && (
                <p className={"text-sm text-red-600"}>password is required</p>
              )}
            </div>
            <Button type={"submit"} title={"Sign in"} />
          </form>
        </div>
        <div className={"bottom-0 flex items-center gap-4 py-6"}>
          <p className={"text-sm text-gray-600"}>Don't have an account?</p>
          <Button
            title={"Sign up"}
            color={"clear"}
            action={() => modalSignUpSwitcher()}
          />
        </div>
      </div>
      <ModalSignUp />
    </>
  );
};
export default SignIn;
