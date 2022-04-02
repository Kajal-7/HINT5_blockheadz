import React from "react";
import Accordionn from "./components/FAQ/Accordion";
import Navbar from "./components/Navbar/Navbar";

const Queries= () => {
    return ( 
        <div className="Queries">
          <Navbar />
          <div  className="mt-5">
          <Accordionn />
          </div>
        </div>
     );
}
 
export default Queries;