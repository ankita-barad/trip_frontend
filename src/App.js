import "./App.css";
import React, { useState, useEffect } from "react";
import PostData from "./PostData";
import RetriveData from "./RetriveData";

function App() {
  const [trips, setTrips] = useState([]);
  const [filterDestination, setFilterDestination] = useState("All");
  const [sortBudget, setSortBudget] = useState("");

  const fetchData = async () => {
    let apiURL = "https://trip-backend-9h3h.onrender.com/api/get-trip";

    if (filterDestination !== "All") {
      apiURL = `https://trip-backend-9h3h.onrender.com/api/filter-trip/${filterDestination}`;
    }

    if (sortBudget) {
      apiURL = `https://trip-backend-9h3h.onrender.com/api/sort-trip/${sortBudget}`;
    }

    const response = await fetch(apiURL);
    const data = await response.json();
    setTrips(data);
  };

  const addData = async (newData) => {
    const response = await fetch(
      `https://trip-backend-9h3h.onrender.com/api/add-trip`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    );
    const data = await response.json();
    setTrips([...trips, data]);
  };

  const deleteData = async (id) => {
    await fetch(
      `https://trip-backend-9h3h.onrender.com/api/delete-trip/${id}`,
      {
        method: "DELETE",
      }
    );
    setTrips(trips.filter((trip) => trip._id !== id));
  };

  useEffect(() => {
    fetchData();
  }, [filterDestination, sortBudget]);

  const filteredAndSortedData = trips
    .filter(
      (trip) =>
        filterDestination === "All" || trip.destination === filterDestination
    )
    .sort((a, b) => {
      if (sortBudget === "asc") {
        return a.budgetPerPerson - b.budgetPerPerson;
      } else if (sortBudget === "desc") {
        return b.budgetPerPerson - a.budgetPerPerson;
      } else {
        return 0;
      }
    });

  return (
    <div className="App">
      <div className="nav">
        <h1>Plan My Trip </h1>
      </div>
      <div className="form_card_container">
        <PostData addData={addData} />

        <div className="filetr_sort_container">
          <h1>Filter By Destination</h1>
          <select
            name="destination"
            value={filterDestination}
            onChange={(e) => setFilterDestination(e.target.value)}
          >
            <option value="All">All</option>
            <option value="India">India</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
          </select>

          <h1>Sort By Budget</h1>
          <select
            name="budget"
            value={sortBudget}
            onChange={(e) => setSortBudget(e.target.value)}
          >
            <option value=""></option>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </select>
        </div>

        <RetriveData trips={filteredAndSortedData} deleteTrip={deleteData} />
      </div>
    </div>
  );
}

export default App;
