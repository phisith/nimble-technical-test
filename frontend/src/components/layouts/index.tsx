import { LayoutProps } from "./type";
import { LayoutProvider, LayoutContext } from "./reducer";
import Nav from "../nav";
import { BlockUI } from "../blockUi";
const Layout = ({ children }: LayoutProps) => {
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
