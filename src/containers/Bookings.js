import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
// import FakeBookings from '../data/fakeBookings.json';

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = { multiply: 2 };
  }
  search = () => {
    console.info("TO DO!");
  };
  multiplyByTwo = () => {
    this.setState({ multiply: this.state.multiply * 2 });
  };

  render() {
    return (
      <div className="App-content">
        <button onClick={this.multiplyByTwo}>{this.props.buttonName} </button>
        <p>{this.state.multiply} is your magic number :)</p>
        <p>
          {"There are bookings available on " + new Date().toLocaleDateString()}
        </p>
        <div className="container">
          <Search search={this.search} />
          <Results />
        </div>
      </div>
    );
  }
}
