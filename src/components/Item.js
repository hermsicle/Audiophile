import React from "react";
import RightArrowIcon from "./../assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const Item = ({ image, item }) => {
  return (
    <div className="item">
      <img className="item-image" src={image} alt="" />
      <h4>{item}</h4>
      <Link to={item}>
        <button className="button-3 shop">
          Shop <img src={RightArrowIcon} alt=">" />
        </button>
      </Link>
    </div>
  );
};

export default Item;
