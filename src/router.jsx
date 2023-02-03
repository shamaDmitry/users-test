import { createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Page_404 from "./Pages/Page_404";
import Users from "./Pages/Users";
import UserDetails from "./Pages/UserDetails";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Users />,
    // children: [
    //   {
    //     path: "/users/test",
    //     element: <UserDetails />,
    //   },
    // ],
  },
  {
    path: "/users/:id",
    element: <UserDetails />,
  },
  {
    path: "*",
    element: <Page_404 />,
  },
]);

export default router;