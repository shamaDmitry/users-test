import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "./Pages/Home";
import Page_404 from "./Pages/Page_404";
import Users from "./Pages/Users";
import UserDetails from "./Pages/UserDetails";
import BasicLayout from "./Layouts/BasicLayout";

let router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "/home",
        index: true,
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <UserDetails />,
      },
    ]
  },
  {
    path: "*",
    element: <Page_404 />,
  },
]);

export default router;