import React from "react";
import "./styles/GetStarted.css";

import wordspic from "./assets/words_pic.png";
import "./styles/Carousel.css";
import "./styles/Home.css";
import Navbar from "./components/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            First featurette heading.{" "}
            <span class="text-muted">It'll blow your mind.</span>
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo. Donec ullamcorper nulla non metus auctor fringilla.
            Vestibulum id ligula porta felis euismod semper. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
            tellus ac cursus commodo. Donec ullamcorper nulla non metus auctor
            fringilla. Vestibulum id ligula porta felis euismod semper. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur. Fusce
            dapibus, tellus ac cursus commodo.
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="featurette-image img-fluid mx-auto"
            src={wordspic}
            alt="Generic placeholder"
            style={{ height: "100%", width: "100%", marginTop: "40px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
