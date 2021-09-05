import React from "react";

function Upsale({ itemsToConsider }) {
  return (
    <div className="upsale-container">
      <h1>You May Also Like</h1>
      <div className="itemsToContainer-container">
        {itemsToConsider.map((item, i) => (
          <div>
            <img src={item.image} alt="" />
            <h2> {item.item} </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upsale;
