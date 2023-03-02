import { LayoutProps } from "./type";
import { LayoutProvider, LayoutContext } from "./reducer";
import Nav from "../nav";
import { BlockUI } from "../blockUi";
import { useEffect } from "react";
import axios from "axios";
import { useVerify } from "../../hooks/useVerify";
const Layout = ({ children }: LayoutProps) => {
  const { verify } = useVerify();
  useEffect(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${sessionStorage.getItem("key")}`;
    verify();
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
