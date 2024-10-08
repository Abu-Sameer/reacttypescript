import { createBrowserRouter, Navigate } from "react-router-dom";
import Com from "./Com";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import SignOut from "./SignOut";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "",
    element: <Com />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signout",
        element: <SignOut />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
