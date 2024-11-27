import React from "react";
import "./custom.css"; // Import your custom CSS
import { FaUserEdit, FaLock, FaTrashAlt, FaCarSide } from "react-icons/fa"; // Icons for profile options

const Profile = () => {
  const handleLogout = () => {
    console.log("Logged out!");
  };

  return (
    <div className="profile-container">
      {/* Profile Information */}
      <div className="profile-info">
        <div className="profile-picture">
          <img src={`${process.env.PUBLIC_URL}/images/profile-placeholder.png`} alt="Profile" />
        </div>
        <h3 className="profile-name">Daniel Austin</h3>
        <p className="profile-number">+1-202-202-4333</p>
      </div>

      {/* Options */}
      <div className="profile-options">
        <div className="profile-option">
          <FaUserEdit className="option-icon" />
          <span>Edit Profile</span>
        </div>
        <div className="profile-option">
          <FaLock className="option-icon" />
          <span>Change Password</span>
        </div>
        <div className="profile-option">
          <FaTrashAlt className="option-icon" />
          <span>Delete Account</span>
        </div>
        <div className="profile-option">
          <FaCarSide className="option-icon" />
          <span>My Rides</span>
        </div>
      </div>

      {/* Logout Button */}
      <div className="logout-button-container">
        <button className="custom-button logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
