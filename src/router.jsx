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
import UserForm from "./Pages/UserForm";
import Login from './Pages/Login';
import SignUp from './Pages/Register';
import ProtectedRoute from './Components/ProtectedRoute';

import { userCreateLoader, userEditLoader } from './loaders/userLoaders';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<BasicLayout />}>
    <Route index element={<Home />} />

    <Route path="login" element={<Login />} />
    <Route path="register" element={<SignUp />} />

    <Route element={<ProtectedRoute />}>
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<UserDetails />} />
      <Route
        path="users/:id/edit"
        element={<UserForm />}
        loader={userEditLoader}
      />
      <Route
        path="users/create"
        element={<UserForm />}
        loader={userCreateLoader}
      />
    </Route>

    <Route path="*" element={<Page_404 />} />
  </Route>
));

export default router;