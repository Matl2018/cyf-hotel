import React from "react";

// const Button = props => (
//   <div className="search-row">
//     <label htmlFor="customerId">{props.inputText}</label>
//     <input
//       type="text"
//       id="customerId"
//       className="form-control"
//       placeholder={props.inputText}
//     />

//     <button className="btn btn-primary fn-submit-name">
//       {props.buttonText}
//     </button>
//   </div>
// );

class Button extends React.Component {
  render() {
    return (
      <div className="search-row">
        <label htmlFor="customerId">{this.props.inputText}</label>
        <input
          type="text"
          id="customerId"
          className="form-control"
          placeholder={this.props.inputText}
        />

        <button className="btn btn-primary fn-submit-name">
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}

export default Button;
