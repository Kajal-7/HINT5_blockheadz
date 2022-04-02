import React, { useState } from "react";
import "../../styles/register.css";
import { Link, useNavigate} from "react-router-dom";
import { useAuthContext } from "../../data/auth";
export default function Register() {
  const [email, setEmail] = useState();
  const [pass, setpass] = useState();
  const [fullName, setFullName] = useState();
  const [error, setError] = useState();
  const { signUp } = useAuthContext();
  const navigate =useNavigate();

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();

    try {
      await signUp(email, pass);
      navigate("/login");
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div class="container mt-5 mb-5">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-6">
          <div class="card px-5 py-5">
            <h5 class="mt-3" style={{ textAlign: "center", fontSize: "30px" }}>
              REGISTER
            </h5>
            <small class="mt-2 text-muted">
              Let's join hands and make this earth a better place to live
              through community service
            </small>
            {error && (
              <div class="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <div class="form-input">
              <i class="fa fa-envelope"></i>
              <input
                type="text"
                class="form-control"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-input">
              <i class="fa fa-user"></i>
              <input
                type="text"
                class="form-control"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div class="form-input">
              <i class="fa fa-lock"></i>
              <input
                type="password"
                class="form-control"
                placeholder="password"
                value={pass}
                onChange={(e) => setpass(e.target.value)}
              />
            </div>
            <button class="btn btn-primary mt-4 signup" onClick={handleSubmit}>
              Register
            </button>

            <div class="text-center mt-4">
              {" "}
              <span>Already a member?</span> <Link to={"/login"}>Login</Link>
            </div>
            <div class="text-center mt-4">
              {" "}
              <Link to={"/"}>Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
