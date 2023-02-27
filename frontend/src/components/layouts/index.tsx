import { LayoutProps } from "./type";
import { LayoutProvider, LayoutContext } from "./reducer";
import Nav from "../nav";

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutProvider>
      <div className={"min-h-full"}>
        <Nav />
        <main className={"py-6"}>{children}</main>
      </div>
    </LayoutProvider>
  );
};

export { Layout, LayoutProvider, LayoutContext };
