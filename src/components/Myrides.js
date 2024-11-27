import React from 'react';
import './custom.css'; // Assuming you have custom CSS for styling
import { FaMapMarkerAlt } from 'react-icons/fa'; // Location icon

const MyRides = () => {
  const rides = [
    {
      id: 1,
      driverName: 'Anwar Jibawi',
      seatsAvailable: '3 seats available',
      date: '10 June, 2024',
      time: '9:00AM',
      address: '8946 Essex St. Sunnyside, IN 46321',
      image: 'images/profile-placeholder.png',
    },
    {
      id: 2,
      driverName: 'Anwar Jibawi',
      seatsAvailable: '3 seats available',
      date: '10 June, 2024',
      time: '9:00AM',
      address: '8946 Essex St. Sunnyside, IN 46321',
      image: 'images/profile-placeholder.png',
    },
    {
      id: 3,
      driverName: 'Anwar Jibawi',
      seatsAvailable: '3 seats available',
      date: '10 June, 2024',
      time: '9:00AM',
      address: '8946 Essex St. Sunnyside, IN 46321',
      image: 'images/profile-placeholder.png',
    },
  ];

  const handleCancel = (id) => {
    console.log(`Ride ${id} canceled`);
  };

  return (
    <div className="my-rides-container">
      <h2 className="text-center">My Rides</h2>
      <div className="rides-list">
        {rides.map((ride) => (
          <div key={ride.id} className="ride-card">
            <div className="ride-info">
              <img src={ride.image} alt="Driver" className="ride-driver-img" />
              <div className="ride-details">
                <h5>{ride.driverName}</h5>
                <p className="ride-seats">{ride.seatsAvailable}</p>
                <p>{ride.date} at {ride.time}</p>
                <div className="ride-address">
                  {/* <FaMapMarkerAlt className="location-icon" /> */}
                  <span>{ride.address}</span>
                </div>
              </div>
            </div>
            <button className="custom-button small-button" onClick={() => handleCancel(ride.id)}>
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRides;
