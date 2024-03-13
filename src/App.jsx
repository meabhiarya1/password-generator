import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./Comp/Login/Login";
import Home from "./Comp/Home/Home";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
