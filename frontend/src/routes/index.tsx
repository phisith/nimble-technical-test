import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/signIn";

export const router = createBrowserRouter([
  { path: "/", element: <SignIn /> },
  { path: "/signIn", element: <SignIn /> },
]);
