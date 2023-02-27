import { LayoutProps } from "./type";
import Nav from "../nav";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={"min-h-full"}>
        <Nav />
        <main className={"py-6"}>{children}</main>
      </div>
    </>
  );
};
export default Layout;
