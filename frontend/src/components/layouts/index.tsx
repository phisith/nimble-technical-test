import { LayoutProps } from "./type";
import Nav from "../nav";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={"min-h-full"}>
        <Nav />
        <header></header>
        <main>{children}</main>
      </div>
    </>
  );
};
export default Layout;
