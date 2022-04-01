import React from "react";
import "../../styles/register.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div class="container mt-5 mb-5">
    <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-6">
            <div class="card px-5 py-5"> 
                <h5 class="mt-3" style={{textAlign: "center", fontSize: "30px"}}>LOGIN</h5> 
                <div class="form-input"> 
                <i class="fa fa-envelope"></i>  
                <input type="text" class="form-control" placeholder="Email address" /> 
                </div>
                <div class="form-input">
                <i class="fa fa-lock"></i> 
                <input type="text" class="form-control" placeholder="password" /> 
                </div>
        
                <div class="form-check"> 
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  /> 
                <label class="form-check-label" for="flexCheckChecked"> Remember me </label> 
                </div> 
                <button class="btn btn-primary mt-4 signup" >Log In</button>
                <div class="text-center mt-4"> <span>Don't have an account?</span> <Link to={"/register"}>Register here</Link></div>
                <div class="text-center mt-4" ><span>Forget password?</span> <Link to={"#"}>Click to reset password</Link></div>
            </div>
        </div>
    </div>
</div>
  );
}
