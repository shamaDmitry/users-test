import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import Home from "./Pages/Home";
import Page_404 from "./Pages/Page_404";
import Users from "./Pages/Users";
import UserDetails from "./Pages/UserDetails";
import BasicLayout from "./Layouts/BasicLayout";
import UserEdit from "./Pages/UserEdit";

let router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<BasicLayout />}>
      <Route index element={<Home />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<UserDetails />} />
      <Route path="users/:id/edit" element={<UserEdit />} />
    </Route>

    <Route path="*" element={<Page_404 />} />
  </Route>
));

export default router;