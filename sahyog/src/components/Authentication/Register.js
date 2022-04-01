import React from "react";
import "../../styles/register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div class="container mt-5 mb-5">
    <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-6">
            <div class="card px-5 py-5"> 
                <h5 class="mt-3" style={{textAlign: "center", fontSize: "30px"}}>REGISTER</h5> 
                <small class="mt-2 text-muted">Let's join hands and make this earth a better place to live through community service</small>
                <div class="form-input"> 
                <i class="fa fa-envelope"></i>  
                <input type="text" class="form-control" placeholder="Email address" /> 
                </div>
                <div class="form-input"> 
                <i class="fa fa-user"></i> 
                <input type="text" class="form-control" placeholder="Full name" />
                </div>
                <div class="form-input">
                <i class="fa fa-lock"></i> 
                <input type="text" class="form-control" placeholder="password" /> 
                </div> 
                <button class="btn btn-primary mt-4 signup">Register</button>
                <div class="text-center mt-4"> <span>Already a member?</span> <Link to={"/login"}>Login</Link></div>
                <div class="text-center mt-4" > <Link to={"/"}>Back to Home</Link></div>
            </div>
        </div>
    </div>
</div>
  );
}
