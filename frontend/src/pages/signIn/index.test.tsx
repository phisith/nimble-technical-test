import { render, screen } from "@testing-library/react";
import SignIn from "./index";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("SignIn component", () => {
  it("should render SignIn component correctly", () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    );
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});

describe("SignIn component", () => {
  it("Button Login click", () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    );
    const buttonElement = screen.getByTitle("Sign in");
    userEvent.click(buttonElement);
  });
});
