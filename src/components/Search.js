import React from "react";
import Button from "./Button";

// const Search = props => (
//   <div className="search">
//     <div className="page-header">
//       <h4 className="text-left">Search Bookings</h4>
//     </div>
//     <div className="row search-wrapper">
//       <div className="col">
//         <div className="form-group search-box">
//           <Button inputText="Customer ID" buttonText="search IDs" />
//           <Button inputText="Customer Name" buttonText="search Names" />
//         </div>
//       </div>
//     </div>
//   </div>
// );

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <div className="form-group search-box">
              <Button inputText="Customer ID" buttonText="search IDs" />
              <Button inputText="Customer Name" buttonText="search Names" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
