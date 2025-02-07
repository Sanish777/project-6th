import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setErrorMessage("All fields are required.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    console.log("User signed up:", { name, email, password });

    navigate("/");
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp} className="signup-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
      <p className="login-link">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default SignUp;
