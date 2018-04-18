import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div
     className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
