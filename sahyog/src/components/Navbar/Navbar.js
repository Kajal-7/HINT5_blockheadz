import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link to="/home">
            <span>
              <img
                src={logo}
                alt="tgt "
                style={{
                  height: "60px",
                  width: "90px",
                  marginRight: "2rem",
                  marginBottom: "0.5rem",
                }}
              ></img>
            </span>
          </Link>
          <span className="fmargin">SAHYOG</span>

          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="col">
              <Link to="/find-opp" style={{ textDecoration: "none" }}>
                <li class="nav-item" className="navitem">
                  Find an Opportunity
                </li>
              </Link>
              <Link to="/recruit-volunteers" style={{ textDecoration: "none" }}>
                <li class="nav-item" className="navitem">
                  Recruit Volunteers
                </li>
              </Link>

              <Link to="/faq" style={{ textDecoration: "none" }}>
                <li class="nav-item" className="navitem">
                  FAQs
                </li>
              </Link>

           

              <Link to="/donate" style={{ textDecoration: "none" }}>
                <li class="nav-item" className="navitem" id="last">
                  Donate
                </li>
              </Link>

              <li><button><i class="fa fa-sign-out" aria-hidden="true"></i></button></li>

              
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
