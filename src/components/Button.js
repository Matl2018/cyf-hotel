import React from "react";

const Button = () => (
  <div className="search-row">
    <input
      type="text"
      id="customerId"
      className="form-control"
      placeholder="Customer Id"
    />

    <button className="btn btn-primary fn-submit-name">Search IDs</button>
  </div>
);

export default Button;
