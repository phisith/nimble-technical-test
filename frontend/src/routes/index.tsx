import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/signIn";
import { ModalSignUpProvider } from "../components/modals/modalSignUp";
import React from "react";

export const signInRouters = createBrowserRouter([
  {
    path: "/",
    element: (
      <ModalSignUpProvider>
        <SignIn />
      </ModalSignUpProvider>
    ),
    children: [
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
]);
