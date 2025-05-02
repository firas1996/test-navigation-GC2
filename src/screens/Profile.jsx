import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const payload = useLocation();
  console.log(payload);
  let hello = "aaa";
  if (payload.state) {
    hello = payload.state.hello;
  }
  return (
    <div>
      <h1>Profile Page {hello} </h1>
    </div>
  );
};

export default Profile;
