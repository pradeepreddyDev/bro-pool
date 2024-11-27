import React, { useState } from "react";
import "./custom.css"; // Custom CSS for consistent styling

const ResetPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();

    // Validation to check if new passwords match
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match. Please try again.");
      return;
    }

    // Handle Reset Password Logic
    console.log("Reset Password:", { oldPassword, newPassword });
  };

  return (
    <div className="login-container">
      {/* <div className="logo">
        <img src="images/bro-pool-logo.png" alt="BroPool Logo" />
      </div> */}
      <form onSubmit={handleResetPassword} className="login-form">
        <h2 className="text-center mb-3">Secure Your Account</h2>
        <p className="subtitle text-center mb-4">
          Reset your password to secure your account
        </p>

        <div className="input-group">
          <input
            type="password"
            placeholder="Enter old password"
            className="form-control"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Enter new password"
            className="form-control"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Confirm new password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="custom-button">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
