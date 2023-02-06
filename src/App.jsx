import {
  useRoutes,
} from "react-router-dom";

import Home from "./Pages/Home";
import Page_404 from "./Pages/Page_404";
import Users from "./Pages/Users";
import UserDetails from "./Pages/UserDetails";
import BasicLayout from "./Layouts/BasicLayout";
import UserEdit from "./Pages/UserEdit";

const App = () => {
  let router = [
    {
      path: "/",
      element: <BasicLayout />,
      children: [
        {
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
        {
          path: "/users/:id/edit",
          element: <UserEdit />,
        },
      ]
    },
    {
      path: "*",
      element: <Page_404 />,
    },
  ];

  let element = useRoutes(router);

  return element;
}

export default App;
