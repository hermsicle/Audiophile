import React from "react";
import { Link } from "react-router-dom";

const Yx1Container = () => {
  return (
    <div className="yx1-container">
      <div className="top-container left"></div>
      <div className="bottom-container right">
        <h1> yz1 earphones </h1>
        <Link to="/yx1">
          <button className="button-2"> See Product </button>
        </Link>
      </div>
    </div>
  );
};

export default Yx1Container;
