import React from "react";
import "./styles/GetStarted.css";
import { Link } from "react-router-dom";
import together from "./assets/holding_hands.png";
import feature1 from "./assets/feature1.png";
import feature2 from "./assets/feature2.png";
import feature3 from "./assets/feature3.png";
import "./styles/Carousel.css";

function GetStarted() {
  return (
    <div>
      <div className="top-part">
        <div className="p1">
          <button
            type="button"
            class="btn btn-outline-primary btn-lg gs-btns"
            style={{ marginRight: "100px" }}
          >
            Contact
          </button>
          <button type="button" class="btn btn-outline-primary btn-lg gs-btns">
            Help
          </button>
        </div>
        <div className="p2">
          <h1>Lorem Ipsum</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h4>
          <Link to={"/login"}>
            <button
              type="button"
              class="btn btn-primary btn-lg flow-btns"
              style={{
                marginRight: "20px",
                borderColor: "#24a0ed",
                marginLeft: "100px",
              }}
            >
              Login
            </button>
          </Link>
          <Link to={"/register"}>
            <button
              type="button"
              class="btn btn-outline-primary btn-lg flow-btns"
              style={{ marginLeft: "20px" }}
            >
              Register
            </button>
          </Link>
          <img src={together} alt="tgt img"></img>
        </div>
      </div>
      <div className="mid-part">
        <br></br>
        <br></br>
        <br></br>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading" style={{ marginTop: "50px" }}>
              First featurette heading.{" "}
              <span class="text-muted">It'll blow your mind.</span>
            </h2>
            <p class="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div class="col-md-5">
            <img
              class="featurette-image img-fluid mx-auto"
              src={feature1}
              alt="Generic placeholder"
            ></img>
          </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2
              class="featurette-heading"
              style={{ marginLeft: "0px", marginTop: "30px" }}
            >
              Oh yeah, it's that good.{" "}
              <span class="text-muted">See for yourself.</span>
            </h2>
            <p class="lead" style={{ marginLeft: "0px" }}>
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <img
              class="featurette-image img-fluid mx-auto"
              src={feature2}
              alt="Generic placeholder"
            ></img>
          </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              And lastly, this one. <span class="text-muted">Checkmate.</span>
            </h2>
            <p class="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div class="col-md-5">
            <img
              class="featurette-image img-fluid mx-auto"
              src={feature3}
              alt="Generic placeholder"
            ></img>
          </div>
        </div>

        {/* <hr class="featurette-divider"></hr> */}
      </div>
      <div className="bot-part">

      </div>
    </div>
  );
}

export default GetStarted;