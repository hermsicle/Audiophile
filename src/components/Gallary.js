import React from "react";

function Gallary({ image1, image2, image3 }) {
  return (
    <div className="gallary-container">
      <div className="gallary-top left">
        <img className="image 1" src={image1} alt="" />
        <img className="image 2" src={image2} alt="" />
      </div>
      <div className="gallary-bottom right">
        <img className="image 3" src={image3} alt="" />
      </div>
    </div>
  );
}

export default Gallary;
