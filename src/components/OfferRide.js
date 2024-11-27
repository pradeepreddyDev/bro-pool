import React, { useState } from "react";
import "./custom.css"; // Import your custom CSS
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa"; // Icons for location, date, time

const OfferRide = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [passengers, setPassengers] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleOfferRide = (e) => {
    e.preventDefault();
    console.log("Ride Details:", { pickup, destination, passengers, date, time });
  };

  return (
    <div className="offer-ride-container">
      {/* Top Map View */}
      <div className="map-view">
        {/* Add a map image or embed a map component here */}
        <img src={`${process.env.PUBLIC_URL}/images/Map.png`} alt="Map View" className="map-image" />
      </div>

      {/* Bottom Card */}
      <div className="ride-form-container">
        <div className="form-handle"></div> {/* Handle on top of the form */}
        <h2 className="form-title">Where are you going now?</h2>
        <form onSubmit={handleOfferRide}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Pickup Point*"
              className="form-control"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              required
            />
            <FaMapMarkerAlt className="input-icon" />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Destination*"
              className="form-control"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
            <FaMapMarkerAlt className="input-icon" />
          </div>
          <div className="input-group">
            <input
              type="number"
              placeholder="Number of Passengers"
              className="form-control"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <FaCalendarAlt className="input-icon" />
          </div>
          <div className="input-group">
            <input
              type="time"
              className="form-control"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
            <FaClock className="input-icon" />
          </div>
          <button type="submit" className="custom-button">
            Offer Ride
          </button>
        </form>
      </div>
    </div>
  );
};

export default OfferRide;
