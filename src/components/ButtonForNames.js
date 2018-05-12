import React from "react";

const ButtonForNames = () => (
  <div className="search-row">
    <input
      type="text"
      id="customerNames"
      className="form-control"
      placeholder="Customer Names"
    />

    <button className="btn btn-primary fn-submit-name">Search Names</button>
  </div>
);

export default ButtonForNames;
