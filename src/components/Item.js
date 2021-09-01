import React from "react";
import RightArrowIcon from "./../assets/shared/desktop/icon-arrow-right.svg";

const Item = ({ image, item }) => {
  return (
    <div className="item">
      <img className="item-image" src={image} alt="" />
      <h4>{item}</h4>
      <button className="button-3 shop">
        Shop <img src={RightArrowIcon} alt=">" />
      </button>
    </div>
  );
};

export default Item;
