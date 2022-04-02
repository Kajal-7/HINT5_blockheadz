import React from "react";
import { Authentication } from "./data/auth"; //Provider
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "./GetStarted";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Home from "./Home"
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Authentication child={
        <Router> 
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/home" element={<PrivateRoute child={<Home/>}></PrivateRoute>} />
        </Routes>
      </Router>
      }/>
    </div>
  );
}

export default App;
