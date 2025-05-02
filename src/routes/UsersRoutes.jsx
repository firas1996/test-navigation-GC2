import React from "react";
import { Link, Outlet } from "react-router-dom";

const UsersRoutes = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/users/create" state={{ name: "Test" }}>
            Create
          </Link>
        </li>
        <li>
          <Link to="/users/1">User 1</Link>
        </li>
        <li>
          <Link to="/users/2">User 2</Link>
        </li>
      </ul>
      <Outlet context={{ abc: 123 }} />
    </>
  );
};

export default UsersRoutes;
