import React from "react";
import { useLocation } from "react-router-dom";

const CreateUser = () => {
  const payload = useLocation();
  const { name } = payload.state;
  return (
    <div>
      <h1>Hi, {name} </h1>
      <h1>Create New User</h1>
    </div>
  );
};

export default CreateUser;
