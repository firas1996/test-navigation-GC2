import React from "react";
import { useLocation, useOutletContext } from "react-router-dom";

const CreateUser = () => {
  const payload = useLocation();
  const { abc } = useOutletContext();
  const { name } = payload.state;
  return (
    <div>
      <h1>Hi, {name} </h1>
      <h1>Create New User : {abc} </h1>
    </div>
  );
};

export default CreateUser;
