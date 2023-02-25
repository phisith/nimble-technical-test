import Button from "../../components/button";

const SignIn = () => {
  return (
    <>
      <div className={"h-full flex flex-col justify-center items-center"}>
        <div
          className={
            "flex w-full h-full max-w-xs flex-col gap-4 justify-center items-center"
          }
        >
          <div className={"flex flex-col justify-center text-center"}>
            <img src={"/nimble-symbol.png"} className={"mx-auto h-12 w-auto"} />
            <h1 className={"mt-6 text-3xl font-bold tracking-tight"}>
              Nimble technical test
            </h1>
            <p className={"mt-2 text-small text-gray-600"}>
              Create by{" "}
              <span className={"text-violet-900"}> Phisith Lengsavath</span>
            </p>
          </div>
          <form className={"flex w-full flex-col gap-6"}>
            <div className={"flex flex-col shadow rounded"}>
              <input
                className={
                  "px-3 py-2 w-full border rounded-t rounded-b-none text-sm focus:border-violet-900 focus:outline-none focus:ring-violet-900"
                }
                placeholder={"Username"}
              />
              <input
                type={"password"}
                className={
                  "px-3 py-2 w-full border rounded-b rounded-t-none text-sm focus:border-violet-900 focus:outline-none"
                }
                placeholder={"Password"}
              />
            </div>
            <Button title={"Sign in"} />
          </form>
        </div>
        <div className={"bottom-0 flex items-center gap-4 py-6"}>
          <p className={"text-sm text-gray-600"}>Don't have an account?</p>
          <Button title={"Sign up"} color={"clear"} />
        </div>
      </div>
    </>
  );
};
export default SignIn;
