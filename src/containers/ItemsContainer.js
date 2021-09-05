import React from "react";
import { Item } from "../components";
import { Link } from "react-router-dom";

const ItemsContainer = ({ navbar }) => {
  return (
    <div className={navbar && "items-wrapper-overlay"}>
      <div className={navbar ? "items-container nav" : "items-container"}>
        <Item
          image="./assets/shared/mobile/image-xx99-mark-one-headphones.svg"
          item="headphones"
        />
        <Item
          image="./assets/shared/mobile/image-zx9-speaker.svg"
          item="speakers"
        />
        <Item
          image="./assets/shared/mobile/image-category-thumbnail-earphones.svg"
          item="earphones"
        />
      </div>
    </div>
  );
};

export default ItemsContainer;
