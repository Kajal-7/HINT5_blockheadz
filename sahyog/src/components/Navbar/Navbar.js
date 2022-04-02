import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#" className="fmargin">Sahyog</a> */}
          <Link to="/home">
            <span>
              <img src={logo} alt="tgt image"></img>
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
            {/* <span class="navbar-toggler-icon"></span> */}

            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="col">
              <li class="nav-item" className="navitem">
                <a class="nav-link" href="#" color="#FEBE10">
                  Find an Opportunity
                </a>
              </li>
              <li class="nav-item" className="navitem">
                <a class="nav-link" href="#">
                  Recruit Volunteers
                </a>
              </li>
              <li class="nav-item" className="navitem">
                <a class="nav-link" href="#">
                  FAQs
                </a>
              </li>
              <li class="nav-item" className="navitem">
                <a class="nav-link" href="#">
                  Profile
                </a>
              </li>

              <Link to="/donate">
                <li class="nav-item" className="navitem">
                  <a class="nav-link" href="#">
                    Donate
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
