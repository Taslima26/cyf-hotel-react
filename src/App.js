import React, { useState } from "react";

import Bookings from "./components/Bookings";
import Header from "./components/Heading";
import DisplayTouristCard from "./components/DisplayTouristCard";

import "./components/TouristInfoCard";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";
import Nav from "./components/Nav";

import AddCustomerForm from "./components/AddCustomerForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={DisplayTouristCard} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/restaurants" component={Restaurant} />
        </Switch>
      </Router>

      <Footer
        footerData={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
