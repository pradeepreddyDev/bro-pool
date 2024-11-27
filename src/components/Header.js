import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css"; // Assuming custom CSS for styling the sidebar

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div className="header-bar">
        <FaBars className="menu-icon" onClick={toggleSidebar} />
        <h1 className="header-title">BroPool</h1>
      </div>
      <nav className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>BroPool Menu</h2>
          <FaTimes className="close-icon" onClick={toggleSidebar} />
        </div>
        <ul className="sidebar-links">
          <li>
            <Link to="/" onClick={toggleSidebar}>Login</Link>
          </li>
          <li>
            <Link to="/signup" onClick={toggleSidebar}>Sign Up</Link>
          </li>
          <li>
            <Link to="/profile" onClick={toggleSidebar}>Profile</Link>
          </li>
          <li>
            <Link to="/offer-ride" onClick={toggleSidebar}>Offer Ride</Link>
          </li>
          <li>
            <Link to="/find-ride" onClick={toggleSidebar}>Find Ride</Link>
          </li>
          <li>
            <Link to="/reset-password" onClick={toggleSidebar}>Reset Password</Link>
          </li>
          <li>
            <Link to="/enable-location" onClick={toggleSidebar}>Enable Location</Link>
          </li>
          <li>
            <Link to="/my-rides" onClick={toggleSidebar}>My Rides</Link>
          </li>
          <li>
            <Link to="/request-ride" onClick={toggleSidebar}>Request Ride</Link>
          </li>
        </ul>
      </nav>
      <div className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`} onClick={toggleSidebar}></div>
    </div>
  );
};

export default Header;
