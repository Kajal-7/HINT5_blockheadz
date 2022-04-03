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
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Authentication child={
        <Router> 
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/home" element={ <PrivateRoute child={<Home />}></PrivateRoute> } />
          <Route path="/donate" element={ <PrivateRoute child={<Donate />}></PrivateRoute> }/>
          <Route path="/find-opp" element={ <PrivateRoute child={<FindOpp />}></PrivateRoute> } />
          <Route path="/recruit-volunteers" element={ <PrivateRoute child={<RecruitVolunteers />}></PrivateRoute> }/>
          <Route path="/faq"element={ <PrivateRoute child={<Queries/>}></PrivateRoute> } />
          <Route path="/form" element={ <PrivateRoute child={<Form />}></PrivateRoute> } />
        
        </Routes>
      </Router>
      }/>
    </div>
  );
}

export default App;
