import React from "react";

function Gallery({ image1, image2, image3 }) {
  return (
    <div className="gallery-container">
      <div className="gallery-top">
        <img className="image 1" src={image1} alt="" />
        <img className="image 2" src={image2} alt="" />
      </div>
      <div className="gallery-bottom">
        <img className="image 3" src={image3} alt="" />
      </div>
    </div>
  );
}

export default Gallery;
