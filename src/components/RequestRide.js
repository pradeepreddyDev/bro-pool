import React, { useState } from "react";
import "./custom.css"; // Assuming you have custom CSS for styling
import { FaMapMarkerAlt } from "react-icons/fa"; // Location icon for inputs

const RequestRide = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSchedule = (e) => {
    e.preventDefault();
    console.log("Ride Scheduled:", { pickup, destination, date, time });
  };

  const handleCancel = () => {
    console.log("Ride Scheduling Cancelled");
  };

  return (
    <div className="request-ride-container">
      <h2 className="text-center">Request a Ride</h2>
      <form className="ride-form" onSubmit={handleSchedule}>
        <h5>Where are you going now?</h5>
        <div className="input-group">
          <div className="input-icon">
            <FaMapMarkerAlt className="input-icon-style" />
          </div>
          <input
            type="text"
            placeholder="Pickup Point*"
            className="form-control"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <div className="input-icon">
            <FaMapMarkerAlt className="input-icon-style" />
          </div>
          <input
            type="text"
            placeholder="Destination*"
            className="form-control"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="date"
            placeholder="Date*"
            className="form-control half-width"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="time"
            placeholder="Time*"
            className="form-control half-width"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="custom-button schedule-button">
            Schedule
          </button>
          <button
            type="button"
            className="custom-button cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestRide;
