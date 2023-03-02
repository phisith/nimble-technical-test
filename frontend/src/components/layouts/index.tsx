import { LayoutProps } from "./type";
import { LayoutProvider, LayoutContext } from "./reducer";
import Nav from "../nav";
import { BlockUI } from "../blockUi";
import { useEffect } from "react";
import axios from "axios";
const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("key")}`;
  }, []);

  return (
    <LayoutProvider>
      <BlockUI />
      <div className={"min-h-full max-h-full"}>
        <Nav />
        <main className={"py-6"}>{children}</main>
      </div>
    </LayoutProvider>
  );
};

export { Layout, LayoutProvider, LayoutContext };
