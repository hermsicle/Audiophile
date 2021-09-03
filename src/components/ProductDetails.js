import React from "react";

function ProductDetails({
  image,
  name,
  description,
  price,
  features,
  inTheBox,
}) {
  return (
    <div className="product-details-container">
      <div className="product-top-container">
        <div className="image"></div>
        <div className="product-details"></div>
      </div>
      <div className="product-bottom-container">
        <div className="features-container"></div>
        <div className="in-the-box"></div>
      </div>
    </div>
  );
}

export default ProductDetails;
