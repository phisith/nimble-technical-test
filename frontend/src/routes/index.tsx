import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/signIn";
import { ModalSignUpProvider } from "../components/modals/modalSignUp";
import React from "react";
import Home from "../pages/home";
import Layout from "../components/layouts";

export const routers = createBrowserRouter([
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
  {
    path: "/app",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    children: [{ path: "/app/home", element: <Home /> }],
  },
]);
