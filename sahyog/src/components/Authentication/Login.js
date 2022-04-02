import React, { useState } from "react";
import "../../styles/register.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../data/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();

    try {
      await signIn(email, pass);
      navigate("/home");
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
              LOGIN
            </h5>
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
              <i class="fa fa-lock"></i>
              <input
                type="password"
                class="form-control"
                placeholder="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                {" "}
                Remember me{" "}
              </label>
            </div>
            <button class="btn btn-primary mt-4 signup" onClick={handleSubmit}>
              Log In
            </button>
            <div class="text-center mt-4">
              {" "}
              <span>Don't have an account?</span>{" "}
              <Link to={"/register"}>Register here</Link>
            </div>
            <div class="text-center mt-4">
              <span>Forget password?</span>{" "}
              <Link to={"#"}>Click to reset password</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
