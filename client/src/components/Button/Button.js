import React from "react";
import "./Button.css";
// import "./SaveBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Button = props => (
  <button type="submit" className={props.buttonstyle} {...props}>{props.buttontext}
  </button>
 );

export default Button;
