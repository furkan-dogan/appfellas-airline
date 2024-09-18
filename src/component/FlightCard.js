import React from "react";

const FlightCard = ({ flight }) => {
  return (
    <div className="flight-card">
      <div className="flight-info">
        <h3>
          {flight.departureCity} - {flight.arrivalCity}
        </h3>
        <div className="flight-details">
          <div className="flight-time">
            <p>🛫 Departure</p>
            <p>{flight.departureTime}</p>
            <p>Airport: {flight.departureAirport}</p>
          </div>
          <div className="flight-duration">
            <p>{flight.duration}</p>
          </div>
          <div className="flight-time">
            <p>🛬 Arrival</p>
            <p>{flight.arrivalTime}</p>
            <p>Airport: {flight.arrivalAirport}</p>
          </div>
        </div>
      </div>
      <div className="flight-price">
        <p>Price: ${flight.price}</p>
        <p>Round Trip</p>
        <button className="book-flight-button">Book Flight</button>
      </div>
      <div className="flight-details-link">
        <a href="#">Check the details</a>
      </div>
    </div>
  );
};

export default FlightCard;
