import React, { useState } from "react";
import "./custom.css"; // Custom CSS for this page

const SignUp = () => {
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carColor, setCarColor] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    // Password matching validation
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    // Handle Sign-Up Logic
    console.log("Signed Up:", { name, school, email, phone, carMake, carModel, carColor, password });
  };

  return (
    <div className="login-container">
      <div className="logo" style={{ paddingTop:"60px"}}>
        <img src="images/bro-pool-logo.png" alt="BroPool Logo" />
      </div>
      <form onSubmit={handleSignUp} className="login-form">
        <h2 className="text-center mb-3">Join <span style={{color: '#EA3A2B'}}>BroPool</span> Today</h2>
        <p className="subtitle text-center mb-4">Fill in the following details to create your account with us</p>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your full name*"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <select
            className="form-control"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
          >
            <option value="" disabled>
              Select your School*
            </option>
            <option value="School 1">School 1</option>
            <option value="School 2">School 2</option>
            <option value="School 3">School 3</option>
          </select>
        </div>
        <div className="input-group">
          <input
            type="email"
            placeholder="Enter your school email*"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="tel"
            placeholder="Enter your phone number*"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Car Make"
            className="form-control"
            value={carMake}
            onChange={(e) => setCarMake(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Car Model"
            className="form-control"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Car Color"
            className="form-control"
            value={carColor}
            onChange={(e) => setCarColor(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Enter Password*"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Confirm Password*"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="custom-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
