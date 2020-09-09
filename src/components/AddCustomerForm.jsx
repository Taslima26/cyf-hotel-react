import React, { useState } from "react";
import "./AddCustomerForm.css";

const AddCustomerForm = props => {
  const initUser = {
    id: null,
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: " ",
    checkInDate: "",
    checkOutDate: ""
  };

  const [state, setState] = useState(initUser);

  const handleChange = event => {
    const updateCustomer = {
      ...state,
      [event.target.name]: event.target.value
    };
    setState(updateCustomer);
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`https://taslima-hotel-server.glitch.me/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: state.firstName,
        surname: state.surname,
        email: state.email,
        roomId: state.roomId,
        checkInDate: state.checkInDate,
        checkOutDate: state.checkOutDate,
        title: state.title
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("success:", data);
        //handleMessage();
      })
      .catch(error => {
        console.error("Error:", error);
      });
    state.title = "";
    state.firstName = "";
    state.surname = "";
    state.checkInDate = "";
    state.checkOutDate = "";
    state.roomId = "";
  };

  return (
    <form class="form-group">
      <div>
        <label className="form-row">Title</label>
        <input
          className="form-group"
          type="text"
          value={state.title}
          name="title"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="form-row">First-Name</label>
        <input
          className="u-full-width"
          type="text"
          value={state.firstName}
          name="firstName"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="form-row">surname</label>
        <input
          className="u-full-width"
          type="text"
          value={state.surname}
          name="surname"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="form-row">email</label>
        <input
          className="u-full-width"
          type="text"
          value={state.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="form-row">Room-id</label>
        <input
          className="u-full-width"
          type="number"
          value={state.roomId}
          name="roomId"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="form-row">CheckIn</label>
        <input
          className="u-full-width"
          type="date"
          value={state.checkInDate}
          name="checkInDate"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="form-row">CheckOut</label>
        <input
          className="u-full-width"
          type="date"
          value={state.checkOutDate}
          name="checkOutDate"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="button-primary" type="submit" onClick={handleSubmit}>
          Add user
        </button>
      </div>
    </form>
  );
};

export default AddCustomerForm;
