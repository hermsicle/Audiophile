import React from "react";

function ProductDetails({
  image,
  imageTablet,
  imageDesktop,
  name,
  description,
  price,
  features,
  features2,
  inTheBox,
}) {
  return (
    <div className="product-details-container">
      <button className="button-4">Go Back</button>

      <div className="product-top-container">
        <div className="image">
          <img src={image} alt="" className="image-mobile" />
          <img src={imageTablet} alt="" className="image-tablet" />
          <img src={imageDesktop} alt="" className="image-desktop" />
        </div>
        <div className="product-details">
          <h5 className="new-product"> New Product </h5>
          <h1 className="title"> {name} </h1>
          <p className="description"> {description} </p>
          <h5 className="price"> $ {price} </h5>
          <div className="add-to-cart-container">
            <div className="cart-counter">
              <button className="decrement"> - </button>
              <input className="count" type="text" placeholder="1" />
              <button className="increment"> + </button>
            </div>
            <button className="button-1"> Add to cart </button>
          </div>
        </div>
      </div>
      <div className="product-bottom-container">
        <div className="features-container">
          <h2 className="title">Features</h2>
          <p className="feature">{features}</p>
          <p className="feature">{features2}</p>
        </div>
        <div className="in-the-box">
          <h2> In the box </h2>
          <div className="box-container">
            {inTheBox.map((item, i) => (
              <div className="box" key={i}>
                <p className="frequency">{item.frequency}</p>
                <p className="description"> {item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
