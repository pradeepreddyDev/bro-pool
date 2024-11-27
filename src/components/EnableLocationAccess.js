import React from "react";
import "./custom.css"; // Custom CSS for consistent styling
import { FaMapMarkerAlt } from "react-icons/fa"; // Using react-icons for location icon

const EnableLocationAccess = () => {
  const handleAllowAccess = () => {
    console.log("Location Access Allowed");
    // You can add logic to ask for user's location here
  };

  const handleMaybeLater = () => {
    console.log("Location Access Denied");
    // Redirect or handle skipping location access here
  };

  return (
    <div className="login-container">
      <div className="text-center mb-5">
        <FaMapMarkerAlt className="location-icon" />
      </div>
      <h2 className="text-center mb-3">Enable Location Access</h2>
      <p className="subtitle text-center mb-4">
        To ensure a seamless and efficient experience, allow us access to your location.
      </p>
      <button className="custom-button mb-3" onClick={handleAllowAccess}>
        Allow Location Access
      </button>
      <div className="text-center mt-3">

        <button className="maybe-later-button" onClick={handleMaybeLater} style={{ paddingTop: "20px"}}>
          Maybe Later
        </button>
      </div>
    </div>
  );
};

export default EnableLocationAccess;
