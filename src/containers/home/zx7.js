import React from "react";
import { Link } from "react-router-dom";

const Zx7Container = () => {
  return (
    <div className="zx7-container">
      <div className="left-container">
        <h1>zx7 Speaker</h1>
        <Link to="/zx7">
          <button className="button-2">See Product</button>
        </Link>
      </div>
      <div className="right-container"></div>
    </div>
  );
};

export default Zx7Container;
