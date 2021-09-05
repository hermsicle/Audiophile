import React from "react";

function ProductDetails({
  image,
  name,
  description,
  price,
  features,
  features2,
  inTheBox,
}) {
  return (
    <div className="product-details-container">
      <div className="product-top-container">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="product-details">
          <h1> {name} </h1>
          <p> {description} </p>
          <h5> {price} </h5>
          <div className="add-to-cart-container">
            <input type="number" placeholder="1" />
            <button className="button-1"> Add to cart </button>
          </div>
        </div>
      </div>
      <div className="product-bottom-container">
        <div className="features-container">
          <p>{features}</p>
          <p>{features2}</p>
        </div>
        <div className="in-the-box">
          {/* Map out the In the Box Details */}
          {inTheBox.map((item, i) => (
            <div>
              <p>{item.frequency}</p>
              <p> {item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
