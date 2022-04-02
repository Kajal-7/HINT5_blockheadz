import React from "react";
import { Authentication } from "./data/auth"; //Provider
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "./GetStarted";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import RecruitVolunteers from "./RecruitVolunteers";
import FindOpp from "./FindOpp";
import Home from "./Home";
import Form from "./components/Form/Form.js";
import Donate from "./Donate";
import Queries from "./Queries";

function App() {
  return (
    <div className="App">
      <Authentication child={
        <Router> 
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="/find-opp" element={<FindOpp/>} />
          <Route path="/recruit-volunteers" element={<RecruitVolunteers/>} />
          <Route path="/faq" element={<Queries/>} />
          <Route path="/form" element={<Form/>} />
        
        </Routes>
      </Router>
      }/>
    </div>
  );
}

export default App;
