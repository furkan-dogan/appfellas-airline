import React, { useState, useEffect } from "react";
import axios from "axios";
import FlightCard from "./component/FlightCard";

function App() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/flights");
        const flightsData = response.data.map((flight) => ({
          departureCity: "Milano", // Uçuş API'daki veriye göre düzenle
          arrivalCity: "Madrid",
          departureTime: "7:30 AM", // flight.scheduleTime (API'den al)
          arrivalTime: "9:55 AM",
          departureAirport: "MXP", // flight.route.destinations[0] (API'den al)
          arrivalAirport: "MAD",
          duration: "2h 25m (Nonstop)",
          price: Math.floor(Math.random() * 100) + 200, // Örnek fiyat (dinamik hale getir)
        }));
        setFlights(flightsData);
      } catch (error) {
        console.error("Error fetching flights data:", error);
      }
    };

    fetchFlights();
  }, []);

  return (
    <div className="App">
      <h1>Available Flights</h1>
      {flights.map((flight, index) => (
        <FlightCard key={index} flight={flight} />
      ))}
    </div>
  );
}

export default App;
