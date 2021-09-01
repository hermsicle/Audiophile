import React from "react";
import { Item } from "../components";

const ItemsContainer = () => {
  return (
    <div className="items-container">
      <Item
        image="./assets/shared/mobile/image-xx99-mark-one-headphones.svg"
        item="Headphones"
      />
      <Item
        image="./assets/shared/mobile/image-zx9-speaker.svg"
        item="Speakers"
      />
      <Item
        image="./assets/shared/mobile/image-category-thumbnail-earphones.svg"
        item="Earphones"
      />
    </div>
  );
};

export default ItemsContainer;
