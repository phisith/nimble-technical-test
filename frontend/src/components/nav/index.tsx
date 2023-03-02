import Button from "../button";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useResults } from "../../hooks/useResults";

const pages = [
  { title: "Home", path: "/home" },
  { title: "History", path: "/history" },
];
const Nav = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigation = useNavigate();
  const { resetAll } = useResults();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const currentPage = pages.filter((val) => {
      return val.path === path;
    });
    setPageTitle(currentPage[0]["title"]);
  }, []);

  const handleNavigation = (path: string, title: string) => {
    resetAll();
    navigation(path);
    setPageTitle(title);
  };

  const handleSignOut = () => {
    sessionStorage.removeItem("key");
    navigation("/");
  };

  return (
    <>
      <nav className={"bg-primary"}>
        <div className={"flex w-full justify-between items-center px-8 py-4"}>
          <div className={"flex gap-2"}>
            <div className={"mr-4"}>
              <a href={"/home"}>
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
                  action={() => handleNavigation(val.path, val.title)}
                />
              );
            })}
          </div>
          <div className={"flex gap-2 items-center"}>
            <div></div>
            <Button
              title={"Sign out"}
              color={"error"}
              action={() => handleSignOut()}
            />
          </div>
        </div>
      </nav>
      <header className={"bg-white shadow"}>
        <div className={"w-full px-8 py-6"}>
          <h1 className={"text-3xl font-bold tracking-tight"}>{pageTitle}</h1>
        </div>
      </header>
    </>
  );
};

export default Nav;
