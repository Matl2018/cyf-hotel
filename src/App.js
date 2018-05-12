import React, { Component } from "react";

import Bookings from "./containers/Bookings.js";
import Footer from "./components/Footer.js";
import Logo from "./components/Logo.js";
import SpecialDeals from "./components/SpecialDeals.js";
import "./App.css";
// import Button from "./components/Button.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo title="Welcome to CYF Hotel" />
        <Bookings />
        {/* <Button /> */}
        <SpecialDeals />
        <Footer />
      </div>
    );
  }
}

export default App;
