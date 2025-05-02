import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Users from "../screens/Users";
import UserDetails from "../screens/UserDetails";
import NotFound from "../screens/NotFound";
import CreateUser from "../screens/CreateUser";
import UsersRoutes from "./UsersRoutes";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/users" element={<UsersRoutes />}>
        <Route index element={<Users />} />
        <Route path=":id" element={<UserDetails />} />
        <Route path="create" element={<CreateUser />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
