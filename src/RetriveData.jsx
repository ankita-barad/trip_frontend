import React from "react";

function RetriveData({ trips, deleteTrip }) {
  return (
    <div className="card">
      <h1>Trips</h1>
      {trips.map((trip) => (
        <div key={trip._id}>
          <h1>{trip.name}</h1>
          <p>{trip.email}</p>
          <h4>{trip.destination}</h4>
          <p>{trip.noOfTravelers}</p>
          <p>{trip.budgetPerPerson}</p>
          <button onClick={() => deleteTrip(trip._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default RetriveData;
