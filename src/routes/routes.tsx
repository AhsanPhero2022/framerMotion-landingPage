import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import About from "../pages/About";
import Home from "@/pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
