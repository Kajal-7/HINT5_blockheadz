import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "./GetStarted";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
