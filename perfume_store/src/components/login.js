import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"; // Custom styling for the login page

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    if (email === "user@example.com" && password === "password123") {
      navigate("/"); 
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <div className="login-card">
              <h2 className="text-center">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p>
                  Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
