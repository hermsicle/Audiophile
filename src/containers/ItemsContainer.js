import React from "react";
import { Item } from "../components";

const ItemsContainer = ({ navbar, setToggleNav }) => {
  return (
    <div className={navbar && "items-wrapper-overlay"}>
      <div
        className={navbar ? "items-container nav" : "items-container"}
        // onMouseLeave={() => setToggleNav(false)}
      >
        <Item
          image="./assets/shared/mobile/image-xx99-mark-one-headphones.svg"
          item="headphones"
          setToggleNav={setToggleNav}
        />
        <Item
          image="./assets/shared/mobile/image-zx9-speaker.svg"
          item="speakers"
          setToggleNav={setToggleNav}
        />
        <Item
          image="./assets/shared/mobile/image-category-thumbnail-earphones.svg"
          item="earphones"
          setToggleNav={setToggleNav}
        />
      </div>
    </div>
  );
};

export default ItemsContainer;
