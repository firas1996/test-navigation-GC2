import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/profile", { state: { hello: "world" } });
  };
  return (
    <div>
      <h1 style={{ cursor: "pointer" }} onClick={goToProfile}>
        Home Page
      </h1>
    </div>
  );
};

export default Home;
