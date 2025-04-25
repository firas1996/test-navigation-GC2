import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Users from "./screens/Users";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
