import React from "react";
import Button from "./Button";
import ButtonForNames from "./ButtonForNames";

const Search = props => (
  <div className="search">
    <div className="page-header">
      <h4 className="text-left">Search Bookings</h4>
    </div>
    <div className="row search-wrapper">
      <div className="col">
        <div className="form-group search-box">
          <label htmlFor="customerId">Customer Id</label>
          <Button />
        </div>
      </div>
    </div>
    <div className="row search-wrapper">
      <div className="col">
        <div className="form-group search-box">
          <label htmlFor="customerNames">Customer Names</label>
          <ButtonForNames />
        </div>
      </div>
    </div>
  </div>
);

export default Search;
