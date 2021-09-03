import React from "react";
import { useHistory } from "react-router-dom";

const Product = ({
  image,
  imageDesktop,
  title,
  description,
  reverse,
  path,
}) => {
  const history = useHistory();
  return (
    <div
      className={
        reverse === "true" ? "product-container reverse" : "product-container"
      }
    >
      <div className="product-image">
        <img src={image} alt="" className="image-mobile" />
        <img src={imageDesktop} alt="" className="image-desktop" />
      </div>
      <div className="product-content">
        <h5 className="subtitle"> new Product </h5>
        <h1 className="title"> {title} </h1>
        <p className="description"> {description} </p>
        <button className="button-1" onClick={() => history.push(`/${path}`)}>
          See Product
        </button>
      </div>
    </div>
  );
};
export default Product;
