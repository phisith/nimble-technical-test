import Button from "../button";
import { useLocation, useNavigate } from "react-router-dom";

const pages = [
  { title: "Home", path: "/app" },
  { title: "History", path: "/app/history" },
];
const Nav = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigation = useNavigate();

  return (
    <>
      <nav className={"bg-primary"}>
        <div className={"flex w-full justify-between items-center px-8 py-4"}>
          <div className={"flex gap-2"}>
            <div className={"mr-4"}>
              <a href={"/app"}>
                <img
                  alt={"nimble-icon"}
                  src={"./nimble-symbol.png"}
                  className={"mx-auto h-8 w-auto"}
                />
              </a>
            </div>
            {pages.map((val, index) => {
              return (
                <Button
                  key={index}
                  title={val?.title}
                  color={"onNav"}
                  isSelected={path === val.path && true}
                  action={() => navigation(val.path)}
                />
              );
            })}
          </div>
          <div className={"flex gap-2 items-center"}>
            <div>
              <p>Jojo</p>
            </div>
            <Button title={"Sign out"} color={"error"} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
