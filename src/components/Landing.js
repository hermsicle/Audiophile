import React from "react";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="landing-container-wrapper">
      <div className="landing-container">
        <div className="landing-container-inner">
          <h6 className="subtitle">New Product</h6>
          <h1 className="title">XX99 Mark II Headphones</h1>
          <p className="content">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/xx99mark2">
            <button className="button-1">See Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
