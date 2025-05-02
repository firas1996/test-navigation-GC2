import { Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <NavBar />
      <MainRoutes />
    </>
  );
}

export default App;
