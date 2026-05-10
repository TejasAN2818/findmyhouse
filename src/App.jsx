import { useState } from "react";
import allRooms from "./data/rooms";

export default function App() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [rentFilter, setRentFilter] = useState("All");
  const [depositFilter, setDepositFilter] = useState("All");

  // Group rooms by location
  const groupedRooms = {
    Whitefield: allRooms.filter((room) => room.location === "Whitefield"),
    Marathahalli: allRooms.filter(
      (room) => room.location === "Marathahalli"
    ),
    Bellandur: allRooms.filter((room) => room.location === "Bellandur"),
    "Electronic City": allRooms.filter(
      (room) => room.location === "Electronic City"
    ),
  };

  // Filtered rooms
  const filteredRooms = allRooms.filter((room) => {
    return (
      (typeFilter === "All" || room.type === typeFilter) &&
      (locationFilter === "All" || room.location === locationFilter) &&
      (rentFilter === "All" || room.rent <= Number(rentFilter)) &&
      (depositFilter === "All" || room.deposit <= Number(depositFilter))
    );
  });

  // Show vertical rooms only after sorting/filtering
  const showFilteredRooms =
    typeFilter !== "All" ||
    locationFilter !== "All" ||
    rentFilter !== "All" ||
    depositFilter !== "All";

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <h1>FindMyHouse</h1>
        <p>Find Best Rental Rooms Near You</p>
      </header>

      {/* SORT OPTIONS BELOW HEADER */}
      <div className="top-filters">
        {/* ROOM TYPE BUTTONS */}
        <div className="type-buttons">
          {["All", "1 RK", "1BHK", "2BHK", "3BHK"].map((type) => (
            <button
              key={type}
              className={typeFilter === type ? "active" : ""}
              onClick={() => setTypeFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* FILTERS */}
        <div className="filters">
          <select onChange={(e) => setLocationFilter(e.target.value)}>
            <option value="All">All Locations</option>
            <option value="Whitefield">Whitefield</option>
            <option value="Marathahalli">Marathahalli</option>
            <option value="Bellandur">Bellandur</option>
            <option value="Electronic City">Electronic City</option>
          </select>

          <select onChange={(e) => setRentFilter(e.target.value)}>
            <option value="All">Max Rent</option>
            <option value="10000">Below ₹10,000</option>
            <option value="20000">Below ₹20,000</option>
            <option value="30000">Below ₹30,000</option>
          </select>

          <select onChange={(e) => setDepositFilter(e.target.value)}>
            <option value="All">Max Deposit</option>
            <option value="50000">Below ₹50,000</option>
            <option value="100000">Below ₹1,00,000</option>
            <option value="150000">Below ₹1,50,000</option>
          </select>
        </div>
      </div>

      {/* HORIZONTAL LOCATION ROOMS */}
      {!showFilteredRooms && (
        <div className="location-sections">
          {Object.entries(groupedRooms).map(([location, rooms]) => (
            <div key={location} className="location-block">
              <h2 className="location-title">{location} Rooms</h2>

              <div className="horizontal-scroll">
                {rooms.map((room) => (
                  <div key={room.id} className="scroll-card">
                    <img src={room.image} alt={room.type} />

                    <div className="scroll-content">
                      <h3>{room.type}</h3>
                      <p>₹{room.rent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FILTERED VERTICAL ROOMS */}
      {showFilteredRooms && (
        <div className="room-list">
          {filteredRooms.map((room) => (
            <div key={room.id} className="room-card">
              <img src={room.image} alt={room.type} />

              <div className="room-content">
                <h2>{room.type}</h2>

                <p>
                  <strong>Location:</strong> {room.location}
                </p>

                <p>
                  <strong>Rent:</strong> ₹{room.rent}
                </p>

                <p>
                  <strong>Deposit:</strong> ₹{room.deposit}
                </p>

                <button>View Details</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}