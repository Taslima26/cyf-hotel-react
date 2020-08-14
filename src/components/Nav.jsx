import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.css";
import "./Heading";

const NavBar = () => {
  const navStyle = { color: "wheat" };
  return (
    <nav className="nav">
      <header className="App-header">
        <img
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
          alt="hotel log"
          className="logo"
        />
        <h3 className="Title">CYF Hotel</h3>
      </header>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/bookings">
          <li>Booking</li>
        </Link>
        <Link style={navStyle} to="/restaurants">
          <li>Restaurant</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
