import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/signIn";
import { ModalSignUpProvider } from "../components/modals/modalSignUp";
import React from "react";
import Home from "../pages/home";
import { Layout } from "../components/layouts";
import History from "../pages/history";

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
    path: "/home",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/history",
    element: (
      <Layout>
        <History />
      </Layout>
    ),
  },
]);
