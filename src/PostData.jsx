import React, { useState } from "react";

function PostData({ addData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "India",
    noOfTravelers: "",
    budgetPerPerson: "",
  });

  const handleSubmit = () => {
    addData(formData);
    setFormData({
      name: "",
      email: "",
      destination: "India",
      noOfTravelers: "",
      budgetPerPerson: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="form_Container">
      <h1 className="trip_form_heading">Form</h1>
      <form className="trip_form" onSubmit={handleSubmit}>
        <div className="form_input">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label htmlFor="destination">Destination: </label>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          >
            <option value="India">India</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
          </select>
        </div>
        <div className="form_input">
          <label htmlFor="noOfTravelers">No of Travelers: </label>
          <input
            type="number"
            name="noOfTravelers"
            value={formData.noOfTravelers}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label htmlFor="budgetPerPerson">Budget Per Person: </label>
          <input
            type="number"
            name="budgetPerPerson"
            value={formData.budgetPerPerson}
            onChange={handleChange}
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default PostData;
