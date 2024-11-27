import React, { useState } from "react";
import "./custom.css"; // Custom CSS for this page

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logged In:", { email, password });
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/images/bro-pool-logo.png`} alt="BroPool Logo" />
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Enter Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="forgot-password">
          <a href="/reset-password">Forgot Password?</a>
        </div>
        <button type="submit" className="custom-button">
          Sign in
        </button>
        <div className="signup-link">
          Don’t have an account? <a href="/signup">Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
