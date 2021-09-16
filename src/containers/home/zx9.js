import React from "react";
import { Link } from "react-router-dom";

const Zx9Container = () => {
  return (
    <div className="zx9-home-container">
      <div className="flex-row">
        <div className="zx9-image-container">
          <img
            className="zx9-image"
            src="./assets/home/mobile/image-speaker-zx9.png"
            alt="zx9"
          />
        </div>
        <div className="zx9-info">
          <h1 className="title">zx9 speaker</h1>
          <p className="content">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to="/zx9">
            <button className="button-2 product"> See Product </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Zx9Container;
