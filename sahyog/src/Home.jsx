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
            Welcome. <span class="text-muted">Glad to have you!</span>
          </h2>
          <p class="lead">
            <br></br>
            SAHYOG is an initiative which provides you a platform where you can
            find and post various volunteering opportunities. You can find
            something interesting to do in your spare time as well as helping
            others at the same time. You can also provide monetary help to
            various organisations. You'll always smile after helping someone :)
            <br></br>
            Giving back and assisting others is the basis of community service
            or volunteering. Thus, it teaches us how significant it is to help
            the ones in need, the ones who are less fortunate than us. The
            importance of community service lies in the fact that it connects us
            to the community by improving it, and making it a better place for
            all of us to live in.
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
