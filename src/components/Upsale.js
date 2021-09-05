import React from "react";

function Upsale({ itemsToConsider }) {
  return (
    <div className="upsale-container">
      <h1>You May Also Like</h1>
      <div className="itemsToConsider-container">
        {itemsToConsider.map((item, i) => (
          <div className="item" key={i}>
            <img className="image-mobile" src={item.image} alt="" />
            <img className="image-tablet" src={item.imageTablet} alt="" />
            <img className="image-desktop" src={item.imageDesktop} alt="" />
            <h2> {item.item} </h2>
            <button className="button-1"> See product </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upsale;
