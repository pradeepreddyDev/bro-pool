import React, { useState } from "react";
import "./custom.css"; // Import your custom CSS for consistent styling
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const ridesData = [
  {
    id: 1,
    driverName: "Anwar Jibawi",
    carMakeModel: "Make Model",
    availableSeats: 3,
    date: "10 June, 2024",
    time: "9:00 AM",
    pickupLocation: "8946 Eswx St. Sunnyside, IN 46321",
    dropoffLocation: "9000 Esss St. Sunnyside, IN 46321",
    profilePic: `${process.env.PUBLIC_URL}/images/driver-profile.png`
  },
  {
    id: 2,
    driverName: "Anwar Jibawi",
    carMakeModel: "Make Model",
    availableSeats: 2,
    date: "10 June, 2024",
    time: "9:00 AM",
    pickupLocation: "8946 Eex St. Sunnyside, IN 46321",
    dropoffLocation: "9000 Ess St. Sunnyside, IN 46321",
    profilePic: `${process.env.PUBLIC_URL}/images/driver-profile.png`
  },
];

const FindRide = () => {
  const [search, setSearch] = useState("");

  const handleRequestRide = () => {
    console.log("Ride requested!");
  };

  const handleSelectRide = (rideId) => {
    console.log(`Selected Ride ID: ${rideId}`);
  };

  return (
    <div className="find-ride-container">
      <div className="header">
        <h2>5 Rides Available</h2>
        <a href="#" className="filter-link">
          Filter by Date
        </a>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by driver name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
        />
        <FaSearch className="search-icon" />
      </div>

      {/* Ride Cards */}
      {ridesData
        .filter((ride) =>
          ride.driverName.toLowerCase().includes(search.toLowerCase())
        )
        .map((ride) => (
          <div key={ride.id} className="ride-card">
            <div className="ride-card-header">
              <img
                src={ride.profilePic}
                alt={ride.driverName}
                className="driver-profile-pic"
              />
              <div className="ride-info">
                <h3 className="driver-name">{ride.driverName}</h3>
                <p className="car-model">{ride.carMakeModel}</p>
                <p className="ride-date-time">
                  {ride.date} at {ride.time}
                </p>
                <span className="available-seats">
                  {ride.availableSeats} seats available
                </span>
              </div>
            </div>
            <div className="ride-card-body">
              <p>
                {/* <FaMapMarkerAlt className="location-icon" /> */}
                 {ride.pickupLocation}
              </p>
              <p>
                {/* <FaMapMarkerAlt className="location-icon" />  */}
                {ride.dropoffLocation}
              </p>
            </div>
            <button
              className="custom-button small-button"
              onClick={() => handleSelectRide(ride.id)}
            >
              Select
            </button>
          </div>
        ))}

      {/* Request a Ride Button */}
      <button className="custom-button request-ride-button" onClick={handleRequestRide}>
        Request a Ride
      </button>
    </div>
  );
};

export default FindRide;
